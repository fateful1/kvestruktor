import { Sprite, Text } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import { useDispatch, useSelector } from "react-redux";

import React, {useEffect, useRef, useState} from "react";
import {
  changeAngle,
  changeCurrentObjectId,
  changeHeight,
  changeLock,
  changeWidth,
  changeX,
  changeY,
  deleteObject,
  showCurrentId,
  showObjs,
} from "@/features/objSlice";
import { showHandInfo } from "@/features/handsSlice";
import { Transformer } from "@pixi-essentials/react-bindings";

const OnePixyObject = ({ props }) => {
  const style = new PIXI.TextStyle({
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    fill: "#11dbe0",
    stroke: "#01857b",
    strokeThickness: 1,
  });

  const objectList = useSelector(showObjs);
  const currentObjectId = useSelector(showCurrentId);
  const mode = useSelector(showHandInfo);

  console.log(objectList[currentObjectId])

  const dispatch = useDispatch();
  const scale = { x: props.width, y: props.height };
  const [move, setMove] = useState(false);
  const position = { x: Number(props.left), y: Number(props.top) };
  let img = props.image;
  if (props.visible === false) img = null;

  const [sprite, setSprite] = useState(null);
  const transformer = useRef(null);
  const [hover, setHover] = useState(false);
  const [isTransform, setIsTransform] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('hidden') === 'true') {
      setIsTransform(true)
    } else {
      setIsTransform(false)
    }
  },[localStorage.getItem('hidden')])

  function setId() {
    // setMouseOver(false);
    // @ts-ignore
    dispatch(changeCurrentObjectId(props.id));
    setMove(false);
  }

  function setSpriteInfo() {
    // console.log(`x: ${transformer.current.group[0].x}`);
    // console.log(`y: ${transformer.current.group[0].y}`);
    // console.log(`height: ${transformer.current.group[0].height}`);
    // console.log(`width: ${transformer.current.group[0].width}`);
    // console.log(`angle: ${transformer.current.group[0].angle}`);

    let x = transformer.current.group[0].x;
    let y = transformer.current.group[0].y;
    let height = transformer.current.group[0].height;
    let width = transformer.current.group[0].width;
    let angle = transformer.current.group[0].angle;
    setMove(false);
    dispatch(changeX(Number(Math.round(x))));
    dispatch(changeY(Number(Math.round(y))));
    dispatch(changeAngle(Number(Math.round(angle))));
    dispatch(changeWidth(Number(Math.round(width))));
    dispatch(changeHeight(Number(Math.round(height))));
  }

  return (
    <>
      {!move && !isTransform ? (
        <Text
          text={props.name}
          anchor={0.5}
          x={position.x - scale.x / 2 + 30}
          y={position.y - scale.y / 2 - 20}
          style={style}
        />
      ) : null}
      <Sprite
        ref={(g) => {
          setSprite(g);
        }}
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
        pointerleave={() => setHover(false)}
        // pointerover={() =>console.log("nya")}
        // pointerout={() =>console.log("nonya")}

        alpha={props.visible}
        // visible={props.visible}
        // pointerover={e =>setMouseOver(true)}
        // pointerout={e =>setMouseOver(false)}
      />

      <Transformer
        group={sprite ? [sprite] : []}
        skewEnabled={false}
        trasientGroupTilt={false}
        wireframeStyle={{
          thickness: 2,
          color: 0x00ead9,
        }}
        // pointerup={getSpriteInfo}
        // pointerupoutside={getSpriteInfo}
        // dragstart={()=>setMove(false)}
        visible={hover}
        // translateEnabled={false}
        // boxRotationEnabled={false}
        scaleEnabled={false}
        boxRotationTolerance={false}
        rotateEnabled={false}
        translateEnabled={false}
        ref={transformer}
      />

      {currentObjectId === props.id && mode !== 1 && !isTransform ? (
        <>
          <Transformer
              group={sprite ? [sprite] : []}
              skewEnabled={false}
              trasientGroupTilt={false}
              wireframeStyle={{
                thickness: 2, color: 0x3AB8BC,
              }}
              pointerup={setSpriteInfo}
              pointerupoutside={setSpriteInfo}
              pointerinside={() => setMove(false)}
              pointerdown={() => setMove(true)}
              ref={transformer}
          />
          {
            !move ? (
              <Sprite
                // image={del}
                image={"../icons/delete.png"}
                x={position.x + scale.x / 1.6}
                y={position.y - scale.y / 2}
                buttonMode
                interactive
                pointerdown={() => dispatch(deleteObject())}
              />
            ) : null
          }
          {
            !objectList[currentObjectId].locked ? (
                <Sprite
                    // image={del}
                    image={"../icons/lock.png"}
                    x={position.x + scale.x / 2}
                    y={position.y - scale.y / 2}
                    buttonMode
                    interactive
                    pointerdown={() => dispatch(changeLock())}
                />
            ) : (
                <Sprite
                    // image={del}
                    image={"../icons/locked.png"}
                    x={position.x + scale.x / 1.73}
                    y={position.y - scale.y / 2.55}
                    buttonMode
                    interactive
                    pointerdown={() => dispatch(changeLock())}
                />
            )
          }
        </>
      ) : null}
      {/*</Container>*/}
    </>
  );
};

export default OnePixyObject;
