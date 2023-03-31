import React, {useEffect, useState} from "react";
import styles from './LeftMenu.module.scss'
import {Tab} from "@/ui/Tab";
import {CardsIcon, ImageIcon, LayersIcon} from "@/ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab, showActiveTab} from "@/features/tabsSlice";

const LeftMenu = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState<number>(0);

    const activeTab = useSelector(showActiveTab)

    useEffect(() => {
        // @ts-ignore
        dispatch(setActiveTab(id))
    },
    [dispatch, id])

    return (
        <div className={styles.menu}>
            <div className={styles.menu__tabs}>
                <Tab title={'Фон'}  icon={<ImageIcon/>} onClick={() => setId(0)} isActive={id === 0} />
                <Tab title={'Объекты'}  icon={<CardsIcon/>} onClick={() => setId(1)} isActive={id === 1} />
                <Tab title={'Слои'}  icon={<LayersIcon/>} onClick={() => setId(2)} isActive={id === 2}/>
            </div>
        </div>
    )
}

export default LeftMenu