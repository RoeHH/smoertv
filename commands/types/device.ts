import { CommandGroup } from "./commandGroup.ts";
import { Command } from "./command.ts";

export interface Device {
    ip: string;
    default: Command[];
    Groups: CommandGroup[];
}