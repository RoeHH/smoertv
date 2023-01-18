import { device } from "device";

export type { Command } from "./types/command.ts";
export type { CommandGroup } from "./types/commandGroup.ts";
export type { Device } from "./types/device.ts";
export type { CommandController } from "./types/commandController.ts";

export const commandController = await import(`commands/${device}/commandController.ts`);
