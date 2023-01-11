//Deno.run({cmd: ["shutdown", "/s", "/t", "400"]});
Deno.run({ cmd: ["shutdown", "/s", "/t" ,"399"]}).status();

Deno.run({cmd: ["shutdown", "/a"]}).status();
