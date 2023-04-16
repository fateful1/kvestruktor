import {Sprite, Container, Text, Stage} from "@inlet/react-pixi";
import * as PIXI from 'pixi.js'
import {useDispatch, useSelector} from "react-redux";

import React from 'react'
import {
    changeAngle,
    changeCurrentObjectId, changeHeight,
    changeWidth,
    changeX,
    changeY,
    showCurrentId,
    showObjs
} from "@/features/objSlice";
import {showHandInfo} from "@/features/handsSlice";
import {Transformer} from "@pixi-essentials/react-bindings";

const OnePixyObject = ({props}) => {
    const style = new PIXI.TextStyle({
        fontFamily: 'Roboto',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        fill:'#11dbe0',
        stroke: '#01857b',
        strokeThickness: 1,
    })

    const objectList = useSelector(showObjs);
    const currentObjectId = useSelector(showCurrentId);
    const mode = useSelector(showHandInfo)

    const dispatch = useDispatch();
    const scale = { x: props.width, y: props.height};
    const [move, setMove] = React.useState(false)
    const position= { x: Number(props.left), y: Number(props.top) };
    let img = props.image
    if(props.visible === false)
        img = null

    const [object, setObject] = React.useState(null);
    const transformer = React.useRef(null);
    const [hover, setHover] = React.useState(false);
    function setId()
    {
        // setMouseOver(false);
        // @ts-ignore
        dispatch(changeCurrentObjectId(props.id));
        setMove(false);
    }

    function getSpriteInfo()
    {

        console.log(`x: ${transformer.current.group[0].x}`);
        console.log(`y: ${transformer.current.group[0].y}`);
        console.log(`height: ${transformer.current.group[0].height}`);
        console.log(`width: ${transformer.current.group[0].width}`);
        console.log(`angle: ${transformer.current.group[0].angle}`);

        let x = transformer.current.group[0].x;
        let y = transformer.current.group[0].y;
        let height = transformer.current.group[0].height;
        let width = transformer.current.group[0].width;
        let angle = transformer.current.group[0].angle;
        setMove(false)
        dispatch(changeX(Number(Math.round(x))));
        dispatch(changeY(Number(Math.round(y))));
        dispatch(changeAngle(Number(Math.round(angle))));
        dispatch(changeWidth(Number(Math.round(width))));
        dispatch(changeHeight(Number(Math.round(height))));
    }

    return (
        <>
            {
                !move ?
                    <Text
                        text={props.name}
                        anchor={0.5}
                        x={position.x -scale.x/2+30}
                        y={position.y -scale.y/2-20}
                        style={style}
                    />:null}
            <Sprite
                ref={(g) => { setObject(g);}}
                image={img}
                x={position.x}
                y={position.y}
                anchor={0.5}
                angle={props.angle}
                height={scale.y}

                width={scale.x}
                interactive
                buttonMode
                pointerdown={setId}
                pointerover={() => setHover(true)}
                pointerout={() => setHover(false)}
                // pointerleave={() => setHover(false)}
                // pointerover={() =>console.log("nya")}
                // pointerout={() =>console.log("nonya")}

                alpha={props.visible}
                // visible={props.visible}
                // pointerover={e =>setMouseOver(true)}
                // pointerout={e =>setMouseOver(false)}
            />

            <Transformer
                group={object ? [object] : []}
                skewEnabled={false}
                trasientGroupTilt={false}
                wireframeStyle={{
                    thickness: 2,
                    color: 0x00EAD9}}
                // pointerup={getSpriteInfo}
                // pointerupoutside={getSpriteInfo}
                // dragstart={()=>setMove(false)}
                visible={hover}
                // translateEnabled={false}
                // boxRotationEnabled={false}
                scaleEnabled={false}
                boxRotationTolerance={false}
                rotateEnabled={false}
                translateEnabled = {false}
                ref={transformer}
            />

            {currentObjectId === props.id && mode !== 1?
                <>
                    {/*{setMouseOver(false)}*/}
                    <Transformer
                        group={object ? [object] : []}
                        skewEnabled={false}
                        trasientGroupTilt={false}
                        wireframeStyle={{
                            thickness: 2,
                            color: 0x00EAD9}}

                        pointerup={getSpriteInfo}
                        pointerupoutside={getSpriteInfo}
                        pointerinside={()=>setMove(false)}
                        pointerdown={()=>setMove(true)}
                        ref={transformer}
                    />
                    {
                        // <Stage >
                        //     <Sprite image={'../delete.png'} width={24} height={24} />
                        // </Stage>
                        !move ?
                            <Sprite
                                // image={del}
                                image={'../delete.png'}
                                x={position.x+scale.x/2}
                                y={position.y-scale.y/2}
                                buttonMode
                                interactive
                                // pointerdown={()=>dispatch(deleteObject())}
                            />:null
                    }
                </> :null}
            {/*</Container>*/}
        </>

    );
}

export default OnePixyObject;