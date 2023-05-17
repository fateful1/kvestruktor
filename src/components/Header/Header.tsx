import React, {useEffect, useState} from "react";
import styles from './Header.module.scss'
import {CursorIcon, HandIcon, RedoIcon, UndoIcon, VisibleIcon} from "@/ui/icons";
import {Button, ButtonIcon} from "@/ui/Buttons";
import {useDispatch} from "react-redux";
import {setActiveHand} from "@/features/handsSlice";
import {ActionCreators} from "redux-undo";

const Header = () => {
    const [mode, setMode] = useState<number>(0)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(setActiveHand(mode))
    },[mode])
    return (
        <div className={styles.header}>
            <div className={styles.header__left_panel}>
                <div className={styles.header__icons}>
                    <ButtonIcon icon={<CursorIcon/>} isClamping={true} className={styles.header__cursor} onClick={()=>setMode(0)} isActive={mode === 0}/>
                    <ButtonIcon icon={<HandIcon/>} isClamping={true} className={styles.header__cursor} onClick={()=>setMode(1)} isActive={mode === 1}/>
                </div>
                <div className={styles.header__icons}>
                    <ButtonIcon icon={<UndoIcon/>} onClick={() => dispatch(ActionCreators.undo())}/>
                    <ButtonIcon icon={<RedoIcon/>} onClick={() => dispatch(ActionCreators.redo())}/>
                </div>
            </div>
            <div className={styles.header__center}>
                <div className={styles.header__title}>Квеструктор</div>
                <div className={styles.header__subtitle}>Изменения сохраняются автоматически</div>
            </div>
            <div className={styles.header__right_panel}>
                <Button title={'Предпросмотр'} backgroundColor={'lightgreen'} icon={<VisibleIcon/>} className={styles.header__preview}/>
                <Button title={'Далее'} backgroundColor={'green'} className={styles.header__next}/>
            </div>
        </div>
    )
}

export default Header