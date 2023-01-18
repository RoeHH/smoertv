import { CommandGroup } from "commands";
import { litebot } from "commands/pc/deps.ts";

export const disney: CommandGroup = {
    name: "Disney+",
    tab: 1,
    commands: [
        {
            name: "home",
            execute: async () => {
                litebot.setMousePos(80, 100);
                await litebot.mouseClick();
                await new Promise((resolve) => setTimeout(resolve, 50));
                litebot.setMousePos(3832, 108);
                await litebot.mouseClick({ delay: 1200 });
            },
            style: {
                icon: "disney",
                height: 2,
                width: 2,
            },
        },
        {
            name: "next-episode",
            execute: () => {
                litebot.setMousePos(400, 565);
                litebot.mouseClick();
            },
            style: {
                icon: "next-episode",
            },
        },
        {
            name: "fullscreen",
            execute: async ({ fullscreen }: { fullscreen: boolean }) => {
                if (!fullscreen) {
                    litebot.setMousePos(3724, 46);
                    await litebot.mouseClick();
                }
                litebot.setMousePos(3805, fullscreen ? 970 : 910);
                await new Promise((resolve) => setTimeout(resolve, 500));
                await litebot.mouseClick();
                if (fullscreen) {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    litebot.setMousePos(3724, 46);
                    await litebot.mouseClick();
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
            execute: ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(3690, fullscreen ? 920 : 867);
                litebot.mouseClick();
            },
            style: {
                icon: "skip-intro",
            },
        },
        {
            name: "play-pause",
            execute: async ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(1930, fullscreen ? 970 : 920);
                await litebot.mouseClick();
                litebot.mouseUp(200);
            },
            style: {
                icon: "play",
                height: 2,
            },
        },
        {
            name: "skip-10s-back",
            execute: async ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(1894, fullscreen ? 970 : 920);
                await litebot.mouseClick();
                await new Promise((resolve) => setTimeout(resolve, 100));
                litebot.mouseUp(200);
            },
            style: {
                icon: "skip-left",
            },
        },
        {
            name: "skip-10s",
            execute: async ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(1991, fullscreen ? 970 : 920);
                await litebot.mouseClick();
                await new Promise((resolve) => setTimeout(resolve, 100));
                litebot.mouseUp(200);
            },
            style: {
                icon: "skip-right",
            },
        },
        {
            name: "one-left",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index !== undefined ? index : 1;
                index--;
                if (index < 0) {
                    litebot.setMousePos(20, 496);
                    await litebot.mouseClick();
                    index = 4;
                }
                litebot.setMousePos(370 + index * 700, 496);
                return { index: index };
            },
            style: {
                icon: "chevron-left",
            },
        },
        {
            name: "one-up",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index !== undefined ? index : 1;
                litebot.setMousePos(3832, 77);
                await litebot.mouseClick({ delay: 800 });
                litebot.setMousePos(370 + index * 700, 496);
            },
            style: {
                icon: "chevron-up",
            },
        },
        {
            name: "one-right",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index || 0;
                index++;
                if (index >= 5) {
                    litebot.setMousePos(3795, 496);
                    await litebot.mouseClick();
                    index = 0;
                }
                litebot.setMousePos(370 + index * 700, 496);
                return { index: index };
            },
            style: {
                icon: "chevron-right",
            },
        },
        {
            name: "confirm",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index || 0;
                litebot.setMousePos(370 + index * 700, 496);
                await litebot.mouseClick();
                return { index: 0 };
            },
            style: {
                icon: "check",
            },
        },
        {
            name: "one-down",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index || 0;
                litebot.setMousePos(3832, 1023);
                await litebot.mouseClick({ delay: 600 });
                litebot.setMousePos(370 + index * 700, 496);
            },
            style: {
                icon: "chevron-down",
            },
        },
        {
            name: "five-right",
            execute: async (
                { index }: { index: number },
            ) => {
                index = index || 0;
                litebot.setMousePos(3795, 496);
                await litebot.mouseClick();
                litebot.setMousePos(370 + index * 700, 496);
                return { index: 0 };
            },
            style: {
                icon: "arrow-right",
            },
        },
    ],
};
