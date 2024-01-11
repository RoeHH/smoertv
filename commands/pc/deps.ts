import { device } from "device";

export const litebot = device === "pc" ? await import("litebot") : {} as any;
