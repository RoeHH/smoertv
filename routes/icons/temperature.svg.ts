import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any | {temperature: number}> = {
  async GET(_, ctx) {
    
    const {temperature} = await fetch("http://192.168.1.105/report", {}).then((res) => res.json());
    

    return new Response('<svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 24 24" width="1912" ><text x="0" y="15" fill="black">'+temperature+'°C</text></svg>', {
      headers: {
        "content-type": "image/svg+xml",
      }})
  },
};
