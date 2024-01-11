import { Command, CommandGroup } from "commands";
import { defaultCommands } from "./default.ts";
import * as commandGroups from "./groups/mod.ts";

class CommandController {
    private defaultCommands: Command[] = [];
    private commandGroups: CommandGroup[] = [];
    private tab = 1;
    private index = 0;
    private fullscreen = false;
    private activeGroup = 0;

    constructor() {
        this.defaultCommands.push(...defaultCommands);
        this.commandGroups = [ commandGroups.mystrom ];
    }

    public getCommands(): Command[] {
        return this.defaultCommands.concat(this.commandGroups.at(this.activeGroup)?.commands ?? []);
    }

    public async executeCommand(name: string): Promise<void> {
        console.log(this.index, name);

        const ret = await this.getCommands().find((command) => command.name === name)?.execute({fullscreen: this.fullscreen, index: this.index});
        if (ret?.fullscreen !== undefined) {
            this.fullscreen = ret.fullscreen;
        }
        if (ret?.index !== undefined) {
            this.index = ret.index;
        }
    }

    public switchGroup(): void {
        this.activeGroup = this.activeGroup + 1 >= this.commandGroups.length ? 0 : this.activeGroup + 1;
    }


    public switchTab(): void {
        console.log(this.tab + 1,  this.tab + 1 >= this.commandGroups.length);
        console.log(this.tab);
        this.tab = this.tab + 1 >= this.commandGroups.length ? 0 : this.tab + 1;
        this.switchGroup();
    }

    public registerDevice(newGroup: CommandGroup): void {
        this.commandGroups.push(newGroup);
    }

}

export const commandController = new CommandController();
