export type { Command } from "./types/command.ts";
export type { CommandGroup } from "./types/commandGroup.ts";
export type { Device } from "./types/device.ts";

import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
export const flags = parse(Deno.args, {string: ["device"]});
export const commandController = await import(`commands/${flags.device}/commandController.ts`);
