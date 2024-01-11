import { Command } from "commands";
import { commandController } from "commands/pc/commandController.ts";

export const defaultCommands: Command[] = [
  {
    name: "mute",
    execute: () => {
      Deno.run({ cmd: ["nircmd", "mutesysvolume", "2"] });
    },
    style: {
      icon: "volume-off",
    },
  },
  {
    name: "volume-up",
    execute: () => {
      Deno.run({ cmd: ["nircmd", "changesysvolume", "2000"] });
    },
    style: {
      icon: "plus",
    },
  },
  {
    name: "Shutdown",
    description: "Shutdown the computer",
    execute: () => {
      Deno.run({ cmd: ["shutdown", "/s", "/t", "40"] });
    },
    style: {
      icon: "power",
      dangerous: true,
    },
  },
  {
    name: "switch",
    execute: () => {
      commandController.switchTab();
    },
    style: {
        icon: "switch",
        reload: true,
    }
  },
  {
    name: "volume-down",
    execute: () => {
      Deno.run({ cmd: ["nircmd", "changesysvolume", "-2000"] });
    },
    style: {
        icon: "minus",
    }
  },
  {
    name: "toweb",
    description: "Will switch to the web deployed app to toggle smart lights",
    execute: () => {

    },
    redirect: "https://smoertv.roeh",
    style: {
      icon: "bulb",
    },
  },
];
