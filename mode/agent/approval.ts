import { select, isCancel } from "@clack/prompts";
import chalk from "chalk";
import type { ActionTracker } from "./action-tracker.ts";
import type { ActionLog } from "./types.ts";

interface ReviewGroup {
    label: string;
    actions: string[];
    patch: string | null;
}

export async function runApprovalFlow(tracker:ActionTracker):Promise<boolean>{
    return true;
}
