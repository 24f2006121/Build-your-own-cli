import chalk from "chalk";
import { isCancel , text } from "@clack/prompts";

export async function runAgentMode(){
    console.log(chalk.bold('Agent mode'));

    const goal = await text({
        message: "What would you like the agent to do?",
        placeholder: "Concreate task for this codebase.. "
    })

    if(isCancel(goal) || !goal.trim()) return;

    const config = defaultAgentConfig();
    const tracker = new ActionTracker();
}