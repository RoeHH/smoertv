import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { CommandController } from "commands";
import { device } from "device";
import { oauth2Client, getUserData, User, isAllowedUser } from "utils/oauth2.ts";
import { getCookies } from "https://deno.land/std@0.146.0/http/cookie.ts"

export interface MiddlewareState {
    commandController: CommandController
    user: User
}

const allowedRoutes = ["/oauth2/callback", "/device/register"];

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext<MiddlewareState>,
) {
    const maybeAccessToken = getCookies(req.headers)["spotify_token"];
    if(allowedRoutes.map(r => req.url.includes(r)).includes(true)) {
        return await ctx.next();
    }
    if (true || maybeAccessToken) {

        const user = await getUserData(maybeAccessToken)
        if(isAllowedUser(user)){
            const {commandController}: {commandController: CommandController} = await import(
                `commands/${
                    device
                }/commandController.ts`
            );

            ctx.state = {commandController, user };
            return await ctx.next();
        }else{
            return new Response( "You are not allowed to use this device", {status: 403});
        }
    }else{
        return  Response.redirect(oauth2Client.code.getAuthorizationUri(), 302);
    }
}
