import React from 'react'
import {useSelector} from "react-redux";
import Features from "@/components/RightMenu/Features";
import Actions from "@/components/RightMenu/Actions";
import {showCurrentId, showObjs} from "@/features/objSlice";
import {showBg} from "@/features/bgSlice";
import {showHandInfo} from "@/features/handsSlice";
import styles from './RightMenu.module.scss'
import classNames from "classnames";

const RightMenu = () => {
    const objectList = useSelector(showObjs)
    const currentObjectId = useSelector(showCurrentId)
    const mode = useSelector(showHandInfo)
    const backgroundImage = useSelector(showBg)
    const [characteristicsIsOpen,setCharacteristicsIsOpen] = React.useState(true);

    return (
        <>
            {
                currentObjectId === null || mode === 1 ? null :<div id='right-menu' className={styles.rightsidepanel}>
                    <div className={styles.rightsidepanel__title}>{objectList[currentObjectId].name}</div>
                    <div className={styles.rightsidepanel__content}>
                        {
                            characteristicsIsOpen ?
                                <>
                                    <div className={styles.rightsidepanel__switch}>
                                        <div className={classNames(styles.rightsidepanel__tab, styles.rightsidepanel__tab_active )} onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                        <div className={styles.rightsidepanel__tab} onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                    </div>
                                    <Features/>
                                </>:
                                <>
                                    <div className={styles.rightsidepanel__switch}>
                                        <div className={styles.rightsidepanel__tab} onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                        <div className={classNames(styles.rightsidepanel__tab, styles.rightsidepanel__tab_active )}  onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                    </div>
                                    <Actions/>
                                </>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default RightMenu

// export async function getServerSideProps(context) {
//
// }