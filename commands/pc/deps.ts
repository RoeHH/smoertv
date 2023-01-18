import { flags } from "commands/mod.ts";

export const litebot = flags.device === "pc" ? {} as any : await import("litebot");
