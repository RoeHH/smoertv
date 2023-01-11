import { CommandGroup } from "commands";
import {
  getMousePos,
  mouseClick,
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
  moveMouse,
  setMousePos,
} from "litebot";

export const netflix: CommandGroup = {
  name: "Netflix",
  tab: 0,
  commands: [
    {
      name: "home",
      execute: async (fullscreen?: boolean) => {
        setMousePos(62, fullscreen ? 50 : 101);
        await mouseClick();
        await new Promise((resolve) => setTimeout(resolve, 800));
        setMousePos(3832, 1023);
        await mouseClick({ delay: 1900 });
        setMousePos(410, 630);
      },
      style: {
        icon: "netflix",
        height: 2,
        width: 2,
      },
    },
    {
      name: "next-episode",
      execute: (fullscreen?: boolean) => {
        setMousePos(3430, fullscreen ? 1025 : 975);
        mouseClick();
      },
      style: {
        icon: "next-episode",
        dangerous: true,
      },
    },
    {
      name: "fullscreen",
      execute: (fullscreen?: boolean) => {
        setMousePos(3790, fullscreen ? 1000 : 970);
        mouseClick();
        return { fullscreen: !fullscreen };
      },
      style: {
        icon: "maximize",
        height: 2,
      },
    },
    {
      name: "skip-intro",
      execute: (fullscreen?: boolean) => {
        setMousePos(3690, fullscreen ? 920 : 867);
        mouseClick();
      },
      style: {
        icon: "skip-intro",
      },
    },
    {
      name: "play-pause",
      execute: async (fullscreen?: boolean) => {
        setMousePos(50, fullscreen ? 1000 : 970);
        await mouseClick();
        mouseUp(200);
      },
      style: {
        icon: "play",
        height: 2,
      },
    },
    {
      name: "skip-10s-back",
      execute: async (fullscreen?: boolean) => {
        setMousePos(115, fullscreen ? 1000 : 970);
        await mouseClick();
        await new Promise((resolve) => setTimeout(resolve, 100));
        mouseUp(200);
      },
      style: {
        icon: "skip-left",
      },
    },
    {
      name: "skip-10s",
      execute: async (fullscreen?: boolean) => {
        setMousePos(200, fullscreen ? 1000 : 970);
        await mouseClick();
        await new Promise((resolve) => setTimeout(resolve, 100));
        mouseUp(200);
      },
      style: {
        icon: "skip-right",
      },
    },
    {
      name: "one-left",
      execute: async (fullscreen?: boolean, index?: number) => {
        index = index !== undefined ? index : 1;
        index--;
        if (index < 0) {
          setMousePos(20, 630);
          await mouseClick();
          index = 5;
        }
        setMousePos(410 + index * 600, 630);
        return { index: index };
      },
      style: {
        icon: "chevron-left",
      },
    },
    {
      name: "one-up",
      execute: async (fullscreen?: boolean) => {
        setMousePos(3832, 77);
        await mouseClick({ delay: 895 });
        setMousePos(410, 630);
      },
      style: {
        icon: "chevron-up",
      },
    },
    {
      name: "one-right",
      execute: async (fullscreen?: boolean, index?: number) => {
        index = index || 0;
        index++;
        if (index >= 6) {
          setMousePos(3795, 630);
          await mouseClick();
          index = 0;
        }
        setMousePos(410 + index * 600, 630);
        return { index: index };
      },
      style: {
        icon: "chevron-right",
      },
    },
    {
      name: "confirm",
      execute: async (fullscreen?: boolean, index?: number) => {
        index = index || 0;
        setMousePos(410 + index * 600, 630);
        await mouseClick();
        await new Promise((resolve) => setTimeout(resolve, 400));
        setMousePos(1657, 537);
        await mouseClick();
      },
      style: {
        icon: "check",
      },
    },
    {
      name: "one-down",
      execute: async (fullscreen?: boolean) => {
        setMousePos(3832, 1023);
        await mouseClick({ delay: 895 });
        setMousePos(410, 630);
      },
      style: {
        icon: "chevron-down",
      },
    },
    {
      name: "five-right",
      execute: async (fullscreen?: boolean) => {
        setMousePos(3795, 630);
        await mouseClick();
        setMousePos(410, 630);
        return { index: 0 };
      },
      style: {
        icon: "arrow-right",
      },
    },
  ],
};
