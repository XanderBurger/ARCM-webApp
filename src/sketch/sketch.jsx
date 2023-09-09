import React from "react";
import {ReactP5Wrapper} from '@p5-wrapper/react'
import Satoshi from '../fonts/Satoshi-Variable.ttf'

function sketch(p5) {
    
    p5.preload = () => {
        const satoshi = p5.loadFont(Satoshi)
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)
        p5.filter(p5.BLUR, 3)
    };

    p5.draw = () => {
        p5.background(0);
        p5.noFill();
        p5.stroke("#894F9F");
        p5.strokeWeight(10);
        p5.strokeCap(p5.SQUARE);
        p5.bezier(50, 400, p5.mouseX, p5.mouseY, p5.mouseX,-p5.mouseY+600, p5.windowWidth - 50, 400);
        p5.stroke("#EC5824");
        p5.bezier(50, 350, p5.mouseX, p5.mouseY-25, p5.mouseX,-(p5.mouseY * 1.1)+600, p5.windowWidth - 50, 350);
        p5.stroke("#FBAA27");
        p5.bezier(50, 300, p5.mouseX, p5.mouseY-50, p5.mouseX, -(p5.mouseY * 1.15)+600, p5.windowWidth - 50, 300);
        p5.stroke("#EE1C4E")
        p5.bezier(50, 250, p5.mouseX, p5.mouseY-75, p5.mouseX, -(p5.mouseY * 1.2)+600, p5.windowWidth - 50, 250);
    };
        

}


export default function P5app() {
    return <ReactP5Wrapper sketch={sketch}/>
}
