import React, {useEffect, useState} from "react";
import styles from './LeftMenu.module.scss'
import {Tab} from "@/ui/Tab";
import {CardsIcon, ImageIcon, LayersIcon} from "@/ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab, showActiveTab} from "@/features/tabsSlice";
import classNames from "classnames";
import Image from "next/image";
import {setActiveBg, showBg} from "@/features/bgSlice";
import { listOfObject } from "./listOfObjects";
import {Objects} from "@/components/Objects";
import {Layers} from "@/components/Layers";

const LeftMenu = () => {
    const dispatch = useDispatch()
    const [id, setId] = useState<number>(0);

    const activeTab = useSelector(showActiveTab)
    const bg = useSelector(showBg)

    const changeBg = (src: string) => {
        dispatch(setActiveBg({image: src, width: 1920, height: 990}))
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(setActiveTab(id))
    },
    [dispatch, id])

    // @ts-ignore
    return (
        <div className={styles.menu} id='left-menu'>
            <div className={styles.menu__tabs}>
                <Tab title={'Фон'}  icon={<ImageIcon/>} onClick={() => setId(0)} isActive={id === 0} />
                <Tab title={'Объекты'}  icon={<CardsIcon/>} onClick={() => bg.image === null ? '' : setId(1)} isActive={id === 1} disabled={bg.image === null} />
                <Tab title={'Слои'}  icon={<LayersIcon/>} onClick={() => bg.image === null ? '' : setId(2)} isActive={id === 2} disabled={bg.image === null}/>
            </div>
            <div className={styles.menu__tabs_contents}>
                <div className={classNames(styles.menu__tab_content, id === 0 ? styles.menu__tab_active : '')}>
                    <div className={styles.menu__backgrounds}>
                        <div className={styles.menu__bg} onClick={() => changeBg('/backgrounds/bg1.svg')}><Image src='/backgrounds/bg1.svg' width={336} height={190} alt={''} /></div>
                        <div className={styles.menu__bg} onClick={() => changeBg('/backgrounds/bg2.svg')}><Image src='/backgrounds/bg2.svg' width={336} height={190} alt={''} /></div>
                        <div className={styles.menu__bg} onClick={() => changeBg('/backgrounds/bg1.svg')}><Image src='/backgrounds/bg1.svg' width={336} height={190} alt={''} /></div>
                        <div className={styles.menu__bg} onClick={() => changeBg('/backgrounds/bg1.svg')}><Image src='/backgrounds/bg2.svg' width={336} height={190} alt={''} /></div>
                    </div>
                </div>
                <div className={classNames(styles.menu__tab_content, id === 1 ? styles.menu__tab_active : '')}>
                    {listOfObject.map((element) =>
                        <Objects title={element.title} content={element.content} key={element.id}/>
                    )}
                </div>
                <div className={classNames(styles.menu__tab_content, id === 2 ? styles.menu__tab_active : '')}>
                    <Layers/>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu