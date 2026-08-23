#!/usr/bin/env bun 

import {Command} from "commander";
import { runWakeup } from "./tui/wakeup.js";

const program = new Command();

program
    .name("my-cli")
    .description("A simple CLI tool")
    .version("1.0.0");

program
    .command("wakeup")
    .description("Wake up the system")
    .action(async () => {
        await runWakeup()
    });

await program.parseAsync(process.argv);