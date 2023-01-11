import {
    getMousePos,
    mouseDown,
    mouseLeft,
    mouseRight,
    mouseUp,
    moveMouse,
    setMousePos,
    mouseClick,
} from "https://deno.land/x/litebot/mod.ts";


console.log(getMousePos());

//setMousePos(1650, 550); 
//mouseClick();

setMousePos(3832, 1023); 
//mouseClick();

const tab = 1;
//setMousePos(150 + 194 * tab, 15); // tab switch reset 

/*
for (let index = 0; index < 10; index++) {
await mouseClick({ delay: 670 });
//delay of 2 seconds
await new Promise((resolve) => setTimeout(resolve, 500));
}*/