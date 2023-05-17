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
import { useDispatch } from "react-redux";
import { setActiveHand } from "@/features/handsSlice";
import { ActionCreators } from "redux-undo";

const Header = () => {
  const [mode, setMode] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(setActiveHand(mode));
  }, [mode]);

  const hideAll = () => {
    document.getElementById("left-menu").style.display = "none";
    document.getElementById("right-menu").style.display = "none";
    document.getElementById("hide-all").style.display = "none";
    document.getElementById("show-all").style.display = "flex";
  };

  const showAll = () => {
    document.getElementById("left-menu").style.display = "block";
    document.getElementById("right-menu").style.display = "block";
    document.getElementById("hide-all").style.display = "flex";
    document.getElementById("show-all").style.display = "none";
  };

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
        />
      </div>
    </div>
  );
};

export default Header;
