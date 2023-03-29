import React from "react";
import styles from './Header.module.scss'
import {CursorIcon, HandIcon, RedoIcon, UndoIcon, VisibleIcon} from "@/ui/icons";
import {Button, ButtonIcon} from "@/ui/Buttons";
const Header = () => {
    const dragClickOptions = ['click', 'drag']
    return (
        <div className={styles.header}>
            <div className={styles.header__left_panel}>
                <div className={styles.header__icons}>
                    <ButtonIcon icon={<CursorIcon/>} className={styles.header__cursor}/>
                    <ButtonIcon icon={<HandIcon/>}/>
                </div>
                <div className={styles.header__icons}>
                    <ButtonIcon icon={<UndoIcon/>}/>
                    <ButtonIcon icon={<RedoIcon/>}/>
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