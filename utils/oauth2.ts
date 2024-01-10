// Spotify OAuth2 client

import { OAuth2Client } from "https://deno.land/x/oauth2_client@v0.2.1/mod.ts";
import { getNetworkAddr } from "local_ip";

import "https://deno.land/x/dotenv@v3.2.0/load.ts";
const secrets = {
    clientId: Deno.env.get("clientId"),
    clientSecret: Deno.env.get("clientSecret"),
};
if (!secrets.clientId || !secrets.clientSecret) {
    throw new Error("environment variable clientSecret or clientId not set");
}

export interface User {
    userId: string;
    userName: string;
    avatarUrl: string;
}

export const isAllowedUser = (user: User): boolean => {
    const allowedUsers = Deno.env.get("allowedUsers")?.split(",").map((user) =>
        user.trim()
    );
    return allowedUsers?.includes(user.userId) || false;
};

export const oauth2Client = new OAuth2Client({
    clientId: secrets.clientId || "",
    clientSecret: secrets.clientSecret || "",
    authorizationEndpointUri: "https://accounts.spotify.com/authorize",
    tokenUri: "https://accounts.spotify.com/api/token",
    redirectUri: `http://${await getNetworkAddr()}:2005/oauth2/callback`,
    defaults: {
        scope: "user-read-email",
    },
});

export const getUserData = async (accessToken: string): Promise<User> => {
    return {
        userId: "spotify.roe",
        userName: "Roe",
        avatarUrl: "https://i.scdn.co/image/ab6775700000ee85b5a9f2b7a8f9e6e8b5a5b3d0",
    }
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    if (!response.ok) {
        throw new Error(await response.text());
    }

    const userData = await response.json();
    console.log(userData);
    
    return {
        userId: userData.id,
        userName: userData.display_name,
        avatarUrl: userData.images[0].url,
    };
};
