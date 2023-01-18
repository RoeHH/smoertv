import { HandlerContext, PageProps } from "$fresh/server.ts";
import { oauth2Client } from "utils/oauth2.ts";
import { gitHubApi } from "https://raw.githubusercontent.com/denoland/showcase_chat/d947bb39b2e5487f62bd797ed5a14ea6999549de/communication/github.ts";
import { setCookie } from "https://deno.land/std@0.146.0/http/cookie.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    if (!code) {
      return new Response(undefined, {status: 404})
    }


    const accessToken = (await oauth2Client.code.getToken(req.url)).accessToken;
  
    const headers: Headers = new Headers
    headers.set('location', `http://${new URL(req.url).host}`)
    setCookie(headers, {
      name: "spotify_token",
      value: accessToken,
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      path: "/",
    });
    return new Response(undefined, {status: 302, headers: headers})
  }
}
