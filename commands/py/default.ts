import { Command } from "commands";
import { commandController } from "commands/pc/commandController.ts";

export const defaultCommands: Command[] = [
  {
    name: "mystromtoggle",
    execute: async () => {
      await fetch("http://192.168.1.105/toggle");      
    },
    style: {
      icon: "temperature",
      height: 2,
      width: 2,
    },
  },
  {
    name: "topc",
    description: "Will switch to the web deployed app to toggle smart lights",
    execute: () => {},
    redirect: "http://192.168.1.142:2005/",
    style: {
      height: 2,
      icon: "netflix",
    },
  },
];
