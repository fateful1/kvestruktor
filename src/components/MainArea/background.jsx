import React, { useState } from "react";
import { Sprite } from "@inlet/react-pixi";
import { useDispatch, useSelector } from "react-redux";
import { changeBgX, changeBgY, showBg } from "@/features/bgSlice";
import { showHandInfo } from "@/features/handsSlice";

const Background = () => {
  const bg = useSelector(showBg);
  const hand = useSelector(showHandInfo);
  const [move, setMove] = useState([bg.left, bg.top]);
  const dispatch = useDispatch();
  const [isMoving, setIsMoving] = useState(false);
  const onDragStart = (event) => {
    const sprite = event.currentTarget;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
    setIsMoving(true);
  };
  // console.log(bg)

  const onDragEnd = (event) => {
    const sprite = event.currentTarget;
    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
    setIsMoving(false);

    dispatch(changeBgX(move[0]));
    dispatch(changeBgY(move[1]));
  };

  const onDragMove = (event) => {
    const sprite = event.currentTarget;
    if (sprite.dragging) {
      const newPosition = sprite.data.getLocalPosition(sprite.parent);
      dispatch(changeBgX(Number(newPosition.x)));
      dispatch(changeBgY(Number(newPosition.y)));
      setMove([Number(newPosition.x), Number(newPosition.y)]);
    }
  };

  console.log(bg);

  // @ts-ignore
  return (
    <>
      {hand === 1 ? (
        isMoving ? (
          <Sprite
            cursor={"grab"}
            width={2000}
            height={bg.height}
            image={bg.image}
            x={move[0]}
            y={move[1]}
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
        ) : (
          <Sprite
            cursor={"grab"}
            width={2000}
            height={bg.height}
            image={bg.image}
            x={bg.left}
            y={bg.top}
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
        )
      ) : (
        <Sprite
          cursor={"grab"}
          width={2000}
          height={bg.height}
          image={bg.image}
          x={move[0]}
          y={move[1]}
          interactive
          buttonMode
          anchor={0.5}
          visible={true}
          zIndex={150}
        />
      )}
    </>
  );
};

export default Background;
