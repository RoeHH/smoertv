import { HandlerContext} from "$fresh/server.ts";

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  console.log(ctx.params.name);
  return new Response("Hello, " + ctx.params.name);
};
