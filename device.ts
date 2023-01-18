import { parse } from "flags";

export const device = parse(Deno.args, {string: ["device"]}).device;