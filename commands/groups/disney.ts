import { CommandGroup } from "commands";
import { mouseClick, mouseUp, setMousePos } from "litebot";

export const disney: CommandGroup = {
  name: "Disney+",
  tab: 1,
  commands: [
    {
      name: "home",
      execute: async() => {
        setMousePos(80, 100);
        await mouseClick();
		await new Promise((resolve) => setTimeout(resolve, 50));
		setMousePos(3832, 108);
		await mouseClick({delay: 1200});
      },
      style: {
        icon: "disney",
		height: 2,
		width: 2,
      },
    },
    {
      name: "next-episode",
      execute: (fullscreen?: boolean) => {
        setMousePos(400, 565);
        mouseClick();
      },
      style: {
        icon: "next-episode",
      },
    },
    {
      name: "fullscreen",
      execute: async (fullscreen?: boolean) => {
        if(!fullscreen){
			setMousePos(3724, 46);
			await mouseClick();
		}
		setMousePos(3805, fullscreen ? 970 : 910);
		await new Promise((resolve) => setTimeout(resolve, 500));
        await mouseClick();
		if(fullscreen){
			await new Promise((resolve) => setTimeout(resolve, 500));
			setMousePos(3724, 46);
			await mouseClick();
		}
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
        setMousePos(1930, fullscreen ? 970 : 920);
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
        setMousePos(1894, fullscreen ? 970 : 920);
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
        setMousePos(1991, fullscreen ? 970 : 920);
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
          setMousePos(20, 496);
          await mouseClick();
          index = 4;
        }
        setMousePos(370 + index * 700, 496);
        return { index: index };
      },
      style: {
        icon: "chevron-left",
      },
    },
    {
      name: "one-up",
      execute: async (fullscreen?: boolean, index?: number) => {
		index = index !== undefined ? index : 1;
        setMousePos(3832, 77);
        await mouseClick({ delay: 800 });
        setMousePos(370 + index * 700, 496);
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
        if (index >= 5) {
          setMousePos(3795, 496);
          await mouseClick();
          index = 0;
        }
        setMousePos(370 + index * 700, 496);
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
        setMousePos(370 + index * 700, 496);
        await mouseClick();
		return { index: 0 };
      },
      style: {
        icon: "check",
      },
    },
    {
      name: "one-down",
      execute: async (fullscreen?: boolean, index?: number) => {
		index = index || 0;
        setMousePos(3832, 1023);
        await mouseClick({ delay: 600 });
        setMousePos(370 + index * 700, 496);
      },
      style: {
        icon: "chevron-down",
      },
    },
    {
      name: "five-right",
      execute: async (fullscreen?: boolean, index?: number) => {
		index = index || 0;
        setMousePos(3795, 496);
        await mouseClick();
        setMousePos(370 + index * 700, 496);
        return { index: 0 };
      },
      style: {
        icon: "arrow-right",
      },
    },
  ],
};
