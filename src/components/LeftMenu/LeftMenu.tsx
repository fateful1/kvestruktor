import React from "react";
import styles from './LeftMenu.module.scss'
import {Tab} from "@/ui/Tab";
import {CardsIcon, ImageIcon, LayersIcon} from "@/ui/icons";

const LeftMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__tabs}>
                <Tab title={'Фон'}  icon={<ImageIcon/>} />
                <Tab title={'Объекты'}  icon={<CardsIcon/>} />
                <Tab title={'Слои'}  icon={<LayersIcon/>} />
            </div>
        </div>
    )
}

export default LeftMenu