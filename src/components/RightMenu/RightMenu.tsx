import React from 'react'
import {useSelector} from "react-redux";
import Features from "@/components/RightMenu/Features";
import Actions from "@/components/RightMenu/Actions";
import {showCurrentId, showObjs} from "@/features/objSlice";
import {showBg} from "@/features/bgSlice";
import {showHandInfo} from "@/features/handsSlice";
import styles from './RightMenu.module.scss'

const RightMenu = () => {
    const objectList = useSelector(showObjs)
    const currentObjectId = useSelector(showCurrentId)
    const mode = useSelector(showHandInfo)
    const backgroundImage = useSelector(showBg)
    const [characteristicsIsOpen,setCharacteristicsIsOpen] = React.useState(true);

    return (
        <>
            {
                currentObjectId === null || mode === 1 ? null :<div className={styles.rightsidepanel}>
                    <div className='title'>{objectList[currentObjectId].name}</div>
                    <div className='content'>

                        {
                            characteristicsIsOpen ?
                                <>
                                    <div className='switch'>
                                        <div className='tab active-tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                        <div className='tab' onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                    </div>
                                    <Features/>
                                </>:
                                <>
                                    <div className='switch'>
                                        <div className='tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                        <div className='tab active-tab'  onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                    </div>
                                    <Actions/>

                                </>
                        }
                    </div>
                </div>
            }</>
    );
}

export default RightMenu