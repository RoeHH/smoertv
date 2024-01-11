import { CommandGroup } from "commands";
import { litebot } from "commands/pc/deps.ts";

export const netflix: CommandGroup = {
    name: "Netflix",
    tab: 0,
    commands: [
        {
            name: "home",
            execute: async ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(62, fullscreen ? 50 : 101);
                await litebot.mouseClick();
                await new Promise((resolve) => setTimeout(resolve, 800));
                litebot.setMousePos(3832, 1023);
                await litebot.mouseClick({ delay: 1900 });
                litebot.setMousePos(410, 630);
            },
            style: {
                icon: "netflix",
                height: 2,
                width: 2,
            },
        },
        {
            name: "next-episode",
            execute: ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(3430, fullscreen ? 1025 : 975);
                litebot.mouseClick();
            },
            style: {
                icon: "next-episode",
                dangerous: true,
            },
        },
        {
            name: "fullscreen",
            execute: ({ fullscreen }: { fullscreen: boolean }) => {
                litebot.setMousePos(3790, fullscreen ? 1000 : 970);
                litebot.mouseClick();
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
                litebot.setMousePos(50, fullscreen ? 1000 : 970);
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
                litebot.setMousePos(115, fullscreen ? 1000 : 970);
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
                litebot.setMousePos(200, fullscreen ? 1000 : 970);
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
                    litebot.setMousePos(20, 630);
                    await litebot.mouseClick();
                    index = 5;
                }
                litebot.setMousePos(410 + index * 600, 630);
                return { index: index };
            },
            style: {
                icon: "chevron-left",
            },
        },
        {
            name: "one-up",
            execute: async () => {
                litebot.setMousePos(3832, 77);
                await litebot.mouseClick({ delay: 895 });
                litebot.setMousePos(410, 630);
            },
            style: {
                icon: "chevron-up",
            },
        },
        {
            name: "one-right",
            execute: async ({ index }: { index: number }) => {
                index = index || 0;
                index++;
                if (index >= 6) {
                    litebot.setMousePos(3795, 630);
                    await litebot.mouseClick();
                    index = 0;
                }
                litebot.setMousePos(410 + index * 600, 630);
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
                litebot.setMousePos(410 + index * 600, 630);
                await litebot.mouseClick();
                await new Promise((resolve) => setTimeout(resolve, 400));
                litebot.setMousePos(1657, 537);
                await litebot.mouseClick();
            },
            style: {
                icon: "check",
            },
        },
        {
            name: "one-down",
            execute: async () => {
                litebot.setMousePos(3832, 1023);
                await litebot.mouseClick({ delay: 895 });
                litebot.setMousePos(410, 630);
            },
            style: {
                icon: "chevron-down",
            },
        },
        {
            name: "five-right",
            execute: async () => {
                litebot.setMousePos(3795, 630);
                await litebot.mouseClick();
                litebot.setMousePos(410, 630);
                return { index: 0 };
            },
            style: {
                icon: "arrow-right",
            },
        },
    ],
};
