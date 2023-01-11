import { Command } from "./command.ts";

export interface CommandGroup {
    name: string;
    tab: number;
    commands: Command[];
}