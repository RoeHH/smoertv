import { Command } from "./command.ts";
import { CommandGroup } from "./commandGroup.ts";

export interface CommandController {
    getCommands(): Command[];
    executeCommand(name: string): Promise<void>;
    switchGroup(): void;
    switchTab(): void;
    registerDevice(newGroup: CommandGroup): void;
}
