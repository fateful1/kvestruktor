import {Container, Sprite, Stage, Text } from "@pixi/react";
import React, {useEffect, useState} from "react";

const MainStage = () => {
    // const bg = new PIXI.TEXTURE.fromImage();
    // const bg = new PIXI.SVGScene.from('src/assets/images/backgrounds/bg1.svg')
    const [sizes, setSize] = useState({width: 0, height: 0})
    useEffect(() => {
        if (typeof window !== "undefined") {
            setSize({width: window.innerWidth - 400, height: window.innerHeight})
        }
    },[])

    return (
        <Stage width={sizes.width} height={sizes.height}>
            {/*<Sprite*/}
            {/*    image={}*/}
            {/*    x={400}*/}
            {/*    y={270}*/}
            {/*    anchor={{ x: 0.5, y: 0.5 }}*/}
            {/*/>*/}

            {/*<Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />*/}
        </Stage>
    )
}

export default MainStage