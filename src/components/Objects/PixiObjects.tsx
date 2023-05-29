import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addObjectOnBg } from "@/features/objSlice";
import { Container, Sprite, Stage } from "@inlet/react-pixi";

const PixiObjects = (props: any) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const dispatch = useDispatch();

  const obj = props.props;
  console.log(props);

  const onDragStart = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
  };

  const onDragEnd = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget;
    sprite.alpha = 1;
    sprite.dragging = false;
    setPosition({ x: 100, y: 100 });
    dispatch(
      addObjectOnBg({
        name: obj.name,
        image: obj.url,
        width: obj.width,
        height: obj.height,
        left: position.x,
        top: position.y,
      })
    );
    sprite.data = null;
  };

  const onDragMove = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget;
    if (sprite.dragging) {
      const newPosition = sprite.data.getLocalPosition(sprite.parent);
      setPosition({ x: Number(newPosition.x), y: Number(newPosition.y) });
    }
  };

  return (
    <Stage
      width={obj.width}
      height={obj.height}
      options={{ backgroundColor: 0xffffff }}
    >
      <Container width={obj.width}>
        <Sprite
          width={obj.width}
          height={obj.height}
          image={obj.url}
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
          width={obj.width}
          height={obj.height}
          image={obj.url}
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
