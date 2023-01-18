import { Handlers, HandlerContext} from "$fresh/server.ts";
import { getUserData, isAllowedUser } from "utils/oauth2.ts";
import { MiddlewareState } from "../_middleware.ts";

export const handler: Handlers<any | MiddlewareState> = {
  async POST(req:Request, ctx: HandlerContext<any, Record<string, unknown>>) {
    const {accessToken, deviceIp } = await req.json();
    return Response.json(isAllowedUser(await getUserData(accessToken)));
  }
};
