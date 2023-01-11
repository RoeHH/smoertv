import { Command, CommandGroup } from "commands";
import { defaultCommands } from "./default.ts";
import * as commandGroups from "./groups/mod.ts";
import { setMousePos, mouseClick } from "litebot";

class CommandController {
    private defaultCommands: Command[] = [];
    private commandGroups: CommandGroup[] = [];
    private tab = 1;
    private index = 0;
    private fullscreen = false;

    constructor() {
        this.defaultCommands.push(...defaultCommands);
        this.commandGroups = [ commandGroups.netflix, commandGroups.disney ];
    }

    public getCommands(): Command[] {
        return this.defaultCommands.concat(this.commandGroups.find((group) => group.tab === this.tab)?.commands ?? []);
    }

    public async executeCommand(name: string): Promise<void> {
        console.log(this.index, name);
        
        const ret = await this.getCommands().find((command) => command.name === name)?.execute(this.fullscreen, this.index);
        if (ret?.fullscreen !== undefined) {
            this.fullscreen = ret.fullscreen;
        }
        if (ret?.index !== undefined) {
            this.index = ret.index;
        }        
    }
    
    public switchTab(): void {
        console.log(this.tab + 1,  this.tab + 1 >= this.commandGroups.length);
        console.log(this.tab);
        this.tab = this.tab + 1 >= this.commandGroups.length ? 0 : this.tab + 1;
        setMousePos(150 + 194 * this.tab, 15);
        mouseClick();
    }

}

export const commandController = new CommandController();