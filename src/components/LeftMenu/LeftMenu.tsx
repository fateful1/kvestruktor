import React, {useEffect, useState} from "react";
import styles from './LeftMenu.module.scss'
import {Tab} from "@/ui/Tab";
import {CardsIcon, ImageIcon, LayersIcon} from "@/ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab, showActiveTab} from "@/features/tabsSlice";
import classNames from "classnames";

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
            <div className={styles.menu__tabs_contents}>
                <div className={classNames(styles.menu__tab_content, id === 0 ? styles.menu__tab_active : '')}>
                    <div className={styles.menu__backgrounds}>
                        <div className={styles.menu__bg}>
                            <svg width="336" height="190" viewBox="0 0 336 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V190H28.8539H89.2584H336V0H0Z" fill="#E6F0F0"/>
                                <path d="M336 137.926H0V89.7223C0 89.7223 49.7906 64.7408 84 64.7408C118.209 64.7408 134.129 84.8969 168 89.7223C200.48 94.3495 220.327 81.1392 252 89.7223C269.234 94.3924 276.151 107.843 294 107.843C311.849 107.843 336 89.7223 336 89.7223V137.926Z" fill="#3AB8BC"/>
                                <path d="M336 137.926H0V134.935H336V137.926Z" fill="white"/>
                                <g clipPath="url(#clip0_567_5493)">
                                    <path d="M336 137.926H0V209.528H336V137.926Z" fill="#333333"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_567_5493">
                                        <rect width="336" height="52.0741" fill="white" transform="translate(0 137.926)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.menu__tab_content, id === 1 ? styles.menu__tab_active : '')}>Объекты</div>
                <div className={classNames(styles.menu__tab_content, id === 2 ? styles.menu__tab_active : '')}>Слои</div>
            </div>
        </div>
    )
}

export default LeftMenu