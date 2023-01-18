import { HandlerContext} from "$fresh/server.ts";
import { commandController } from "commands";

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  console.log(ctx.params.name);
  commandController.executeCommand(ctx.params.name);
  return new Response("Hello, " + ctx.params.name);
};
