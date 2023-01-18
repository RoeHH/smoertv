import { HandlerContext} from "$fresh/server.ts";
import { CommandController } from "commands";

export const handler = (_req: Request, ctx: HandlerContext<any,  {commandController: CommandController}>): Response => {
  ctx.state.commandController.executeCommand(ctx.params.name);
  return new Response("Hello, " + ctx.params.name);
};
