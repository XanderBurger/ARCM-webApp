import React from "react";
import {ReactP5Wrapper} from '@p5-wrapper/react'
import Satoshi from '../fonts/Satoshi-Variable.ttf'

function sketch(p5) {

    let satoshi
    let textPoints
    let canvasWidth = p5.windowWidth
    let canvasHeight = p5.windowHeight
    let title = "Computer"
    let colors = ["#FFFFFF", "#F22F66", "#FC5F1A", "#FFE027", "#80D860", "#3263ED"]
    let words = ["COMPUTERS", "ROBOTS", "MACS", "ENIGMA", "QUANTUM", "AI", "PROGRESS"]
    let textSize = 200

    function drawLetter(letter,x,y, colorNum, sampleFactor, squareSize) {
        textPoints = satoshi.textToPoints(letter, x, y, textSize, {sampleFactor: sampleFactor})
        p5.fill("#FFFFF")
        p5.noStroke()
        p5.fill(colors[colorNum])
        p5.beginShape()
        for (let i = 0; i < textPoints.length; i++) {
            let p = textPoints[i];
            p5.vertex((Math.round(p.x / squareSize.x) * squareSize.x),Math.round(p.y/squareSize.y) * squareSize.y)
        }
        p5.endShape(p5.ClOSE)
    }

    p5.preload = () => {
        satoshi = p5.loadFont(Satoshi)
    }

    p5.setup = () => {
        p5.createCanvas(canvasWidth, canvasHeight)
        p5.frameRate(30)
    };
    
    let sizeX = 0
    let sizeY = 0
    let count = 0
    let w = 0
    let y = 450
    p5.draw = () => {
        p5.background("#000000");
        p5.textFont(satoshi)
        p5.textSize(textSize)
        count++
        sizeX += Math.cos(count/30) 
        sizeY += Math.sin(count/30) 
        if (Math.cos(count/30) < -0.999){
            w = (w + 1) % words.length
        }
        title = words[w]

        let squareSize = {x: sizeX, y: sizeY}
        let x = 52
        for (let i = 0; i < title.length; i++) {
            drawLetter(title[i],x, y, 3, 0.2, squareSize)
            x += p5.textWidth(title[i])
        }
        x = 48
        for (let i = 0; i < title.length; i++) {
            drawLetter(title[i],x, y, 1, 0.2, squareSize)
            x += p5.textWidth(title[i])
        }
        x= 50
        for (let i = 0; i < title.length; i++) {
            drawLetter(title[i],x, y, 0, 0.5, squareSize)
            x += p5.textWidth(title[i])
        }
    }
}

export default function P5app() {
    return <ReactP5Wrapper sketch={sketch}/>
}
