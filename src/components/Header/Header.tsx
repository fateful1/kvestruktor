import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import {
  CursorIcon,
  HandIcon,
  RedoIcon,
  UndoIcon,
  VisibleIcon,
} from "@/ui/icons";
import { Button, ButtonIcon } from "@/ui/Buttons";
import {useDispatch, useSelector} from "react-redux";
import { setActiveHand } from "@/features/handsSlice";
import { ActionCreators } from "redux-undo";
import {changeCurrentObjectId, showObjs} from "@/features/objSlice";
import {showBg} from "@/features/bgSlice";

const Header = () => {
  const [mode, setMode] = useState<number>(0);
  const objectList = useSelector(showObjs);
  const bg = useSelector(showBg);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(setActiveHand(mode));
  }, [mode]);

  const hideAll = () => {
    document.getElementById("left-menu").style.display = "none";
    if (document.getElementById("right-menu") !== null) {
      document.getElementById("right-menu").style.display = "none";
    }
    localStorage.setItem('hidden', 'true')
    document.getElementById("hide-all").style.display = "none";
    document.getElementById("show-all").style.display = "flex";
  };

  const showAll = () => {
    document.getElementById("left-menu").style.display = "block";
    if (document.getElementById("right-menu") !== null) {
      document.getElementById("right-menu").style.display = "block";
    }
    localStorage.setItem('hidden', 'false')
    document.getElementById("hide-all").style.display = "flex";
    document.getElementById("show-all").style.display = "none";
  };

  const downloadTxtFile = () => {
    let innerStr = ''
    objectList.forEach(function(item: any, i: any, arr: any) {
      console.log(item.top);
      innerStr+=`{name:"${item.name}", width:"${item.width}", left:"${item.left}", top:"${item.top}", height:"${item.height}", visible:${item.visible}, interactive:${item.interactive},buttonMode:${item.interactive}, fullwidth: false,  img:"${item.image}", simpleInfo:${item.simpleInfo}, info:{ru: "${item.info}"}, inBack:"${item.inBack}"},\n`
    });
    const element = document.createElement("a");
    let str =`var arr = [{name: "Room", width:"${bg.width}", left:"${bg.left}", top:"${bg.top}", height:"${bg.height}", visible:true, interactive:${bg.interactive},buttonMode:${bg.interactive}, fullwidth: true, img:"${bg.image}"},\n ${innerStr}]; \n export { arr }`;
    const file = new Blob([str], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "quest.js";
    document.body.appendChild(element);
    element.click();
  };

  useEffect(() => {
    localStorage.setItem('hidden', 'false')
  },[])

  return (
    <div className={styles.header}>
      <div className={styles.header__left_panel}>
        <div className={styles.header__icons}>
          <ButtonIcon
            icon={<CursorIcon />}
            isClamping={true}
            className={styles.header__cursor}
            onClick={() => setMode(0)}
            isActive={mode === 0}
          />
          <ButtonIcon
            icon={<HandIcon />}
            isClamping={true}
            className={styles.header__cursor}
            onClick={() => setMode(1)}
            isActive={mode === 1}
          />
        </div>
        <div className={styles.header__icons}>
          <ButtonIcon
            icon={<UndoIcon />}
            onClick={() => dispatch(ActionCreators.undo())}
          />
          <ButtonIcon
            icon={<RedoIcon />}
            onClick={() => dispatch(ActionCreators.redo())}
          />
        </div>
      </div>
      <div className={styles.header__center}>
        <div className={styles.header__title}>Квеструктор</div>
        <div className={styles.header__subtitle}>
          Изменения сохраняются автоматически
        </div>
      </div>
      <div className={styles.header__right_panel}>
        <Button
          title={"Предпросмотр"}
          backgroundColor={"lightgreen"}
          icon={<VisibleIcon />}
          id="hide-all"
          className={styles.header__preview}
          onClick={hideAll}
        />
        <Button
          title={"Выйти из предпросмотра"}
          backgroundColor={"lightgreen"}
          icon={<VisibleIcon />}
          id="show-all"
          style={{ display: "none" }}
          className={styles.header__preview}
          onClick={showAll}
        />
        <Button
          title={"Скачать файл"}
          backgroundColor={"green"}
          className={styles.header__next}
          onClick={downloadTxtFile}
        />
      </div>
    </div>
  );
};

export default Header;
