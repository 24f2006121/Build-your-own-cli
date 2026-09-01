import chalk from "chalk";
import { isCancel , text } from "@clack/prompts";
import { ActionTracker } from "./action-tracker";
import { defaultAgentConfig } from "./types";
import { ToolExecutor } from "./tool-executor";
import { createAgentTools } from "./agent-tools";
import { stepCountIs, ToolLoopAgent } from "ai";
import { getAgentModel } from "../../ai";
import { renderTerminalMarkdown } from "../../tui/terminal-md";
import { runApprovalFlow } from "./approval";

export async function runAgentMode(){
    console.log(chalk.bold('Agent mode'));

    const goal = await text({
        message: "What would you like the agent to do?",
        placeholder: "Concreate task for this codebase.. "
    })

    if(isCancel(goal) || !goal.trim()) return;

    const config = defaultAgentConfig();
    const tracker = new ActionTracker();
    const executor = new ToolExecutor(tracker, config);
    const tools = createAgentTools(executor);

    const agent = new ToolLoopAgent ({
        model:getAgentModel(),
        stopWhen:stepCountIs(20),
        instructions: [
            `Workspace root: ${config.codebasePath}`,
            "All mutations are staged until approval.",
        ].join("\n"),
        tools,
    });

    const result = await agent.generate({
        prompt:goal.trim(),
        onStepFinish: ({ toolCalls }) => {
            for(const tc of toolCalls){
                const preview = JSON.stringify(tc.input).slice(0, 100);
                console.log(
                    chalk.green(" corrcet"),
                    chalk.bold(String(tc.toolName)),
                    chalk.dim(preview + (preview.length >= 160 ? "..." : "")),
                );
            }
        }
    });

    if(result.text?.trim()) console.log(renderTerminalMarkdown(result.text));

    const ok = await runApprovalFlow(tracker);
    if(!ok) return executor.clearStaging()

        const {errors} = executor.applyApprovedFromTracker();

        if(errors.length){
            console.log(chalk.red("\nSome operation reported errors:"));
            for (const e of errors) console.log(chalk.red(`  • ${e}`));
        }
        else{
            console.log(chalk.green('\n✓ Applied.\n'));
        }

        executor.clearStaging()
}