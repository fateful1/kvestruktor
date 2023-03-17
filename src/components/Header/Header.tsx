import React from "react";
import styles from './Header.module.scss'
import {CursorIcon, HandIcon} from "@/ui/icons";
import {ButtonIcon} from "@/ui/Buttons";
const Header = () => {
    const dragClickOptions = ['click', 'drag']
    return <div className={styles.header}>
        {dragClickOptions.map((x, index) => {
            return <ButtonIcon icon={x === 'click' ? <CursorIcon /> : <HandIcon/>} key={index} />
        })}
        <ButtonIcon icon={<CursorIcon/>}/>
    </div>
}

export default Header