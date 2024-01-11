import { HandlerContext } from "$fresh/server.ts";
import { MiddlewareState } from "../_middleware.ts";

export const handler = (
    _req: Request,
    ctx: HandlerContext<any, MiddlewareState>,
): Response => {
    ctx.state.commandController.getCommands();
    return Response.json(
        ctx.state.commandController.getCommands(),
    );
};
