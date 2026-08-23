import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";


export async function runCliMode() {
    while(true){
        const mode = await select({
            message: "Choose CLI sub-mode",
            options:[
                {value: "agent", label: "Agent Mode"},
                {value: "plan", label: "Plan Mode"},
                {value: "ask", label: "Ask Mode"},
                {value: "main", label: "back to main menu"},
            ],
        });

        if(isCancel(mode) || mode === "main") return;

        if(mode === "agent"){
            console.log("agent mode selected")
        }
        if(mode === "ask"){
            console.log("ask mode selected")
        }
        if(mode === "plan"){
            console.log("plan mode selected")
        }

        if (mode !== 'agent' && mode !== 'ask' && mode !== 'plan') {
            console.log(chalk.yellow("\n That mode is not implemented yet. \n"));
        }
    }
}