import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addObjectOnBg } from "@/features/objSlice";
import { Container, Sprite, Stage } from "@inlet/react-pixi";

const PixiObjects = (props: any) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dispatch = useDispatch();

  console.log(props);

  const onDragStart = (event: any) => {
    const sprite = event.currentTarget;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
    console.log("start");
  };

  const onDragEnd = (event: any) => {
    console.log("end");
    const sprite = event.currentTarget;
    sprite.alpha = 1;
    sprite.dragging = false;
    // if(position.x>350){
    setPosition({ x: 100, y: 100 });
    // @ts-ignore
    dispatch(
      addObjectOnBg({
        name: props.props.name,
        width: props.props.width,
        height: props.props.height,
        image: props.props.url,
        left: position.x,
        top: position.y,
      })
    );
    // }
    setPosition({ x: 100, y: 100 });
    sprite.data = null;
  };

  const onDragMove = (event: any) => {
    console.log("move");
    const sprite = event.currentTarget;
    if (sprite.dragging) {
      const newPosition = sprite.data.getLocalPosition(sprite.parent);
      setPosition({ x: Number(newPosition.x), y: Number(newPosition.y) });
    }
  };

  return (
    <Stage
      width={props.props.width}
      height={props.props.height}
      options={{ backgroundColor: 0xffffff }}
    >
      <Container width={props.props.width}>
        <Sprite
          width={props.props.width}
          height={props.props.height}
          image={props.props.url}
          x={position.x}
          y={position.y}
          interactive
          buttonMode
          anchor={0.5}
          pointerdown={onDragStart}
          pointerup={onDragEnd}
          pointerupoutside={onDragEnd}
          pointermove={onDragMove}
          visible={true}
          zIndex={150}
        />
        <Sprite
          width={props.props.width}
          height={props.props.height}
          image={props.props.url}
          x={100}
          y={100}
          anchor={0.5}
          interactive={false}
          buttonMode={false}
        />
      </Container>
    </Stage>
  );
};

export default PixiObjects;
