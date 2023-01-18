import { getNetworkAddr } from 'https://deno.land/x/local_ip/mod.ts';

const netAddr = await getNetworkAddr();

console.log(netAddr);
