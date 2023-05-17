import {useDispatch, useSelector} from "react-redux";
import {
    changeAngle,
    changeHeight, changeVisibility,
    changeWidth,
    changeX,
    changeY, downObject,
    horizontalMirroring, showCurrentId,
    showObjs, upObject, verticalMirroring
} from "@/features/objSlice";
import styles from './RightMenu.module.scss'
import {ButtonIcon} from "@/ui/Buttons";
import {LayersDownIcon, LayersUpIcon, ReflectionHIcon, ReflectionVIcon} from "@/ui/icons";
import {Tabs} from "@/ui/Tabs";

const Features = () => {
    const dispatch = useDispatch();
    const objectList = useSelector(showObjs);
    const currentObjectId = useSelector(showCurrentId)
    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    function handleInputChange(event: { target: { value: any; }; }) {
        dispatch(changeWidth(Number(event.target.value)));
    }

    function handleInputChangeHeight(event: { target: { value: any; }; }) {
        dispatch(changeHeight(Number(event.target.value)));
    }

    function handleInputChangeAngle(event: { target: { value: any; }; }) {
        let str = String(event.target.value).replace('\u00B0','');
        dispatch(changeAngle(Number(str)));
    }

    function handleInputChangeX(event: { target: { value: any; }; }) {
        dispatch(changeX(Number(event.target.value)));
    }

    function handleInputChangeY(event: { target: { value: any; }; }) {
        dispatch(changeY(Number(event.target.value)));
    }

    function handleInputhorizontalMirroring() {
        dispatch(horizontalMirroring());
    }

    function handleInputverticalMirroring() {
        dispatch(verticalMirroring());
    }
    function handleInputChangeVisibility() {
        dispatch(changeVisibility());
    }

    function handleInputUpObject() {
        dispatch(upObject());
    }
    function handleInputDownObject() {
        dispatch(downObject());
    }

    console.log(objectList[currentObjectId].visible)
    return (
        <>
            <div className={styles.settings__field}>
                <div className={styles.settings__sub_title}>размер и угол</div>
                <div className={styles.settings}>
                    <label>
                        В
                        {
                            currentObjectId < objectList.length ?
                                <input type={"text"} id="height" onChange={handleInputChangeHeight} value={objectList[currentObjectId].height}/>
                                :
                                <input type={"text"} id="height" onChange={handleInputChangeHeight} />
                        }

                    </label>
                    <label>
                        Ш
                        {
                            currentObjectId < objectList.length ?
                                <input type={"text"} id="width"  onChange={handleInputChange} value={objectList[currentObjectId].width}/>
                                :
                                <input type={"text"} id="width"  onChange={handleInputChange} />
                        }

                    </label>
                    <label>
                        У
                        {
                            currentObjectId < objectList.length ?
                                <input type={"text"} id="angle" onChange={handleInputChangeAngle} placeholder={`${objectList[currentObjectId].angle}\u00B0`} value={`${objectList[currentObjectId].angle}\u00B0`}/>
                                :
                                <input type={"text"} id="angle" onChange={handleInputChangeAngle} />
                        }

                    </label>
                </div>
            </div>

            <div className={styles.settings__field}>
                <div className={styles.settings__sub_title}>Положение</div>
                <div className={styles.settings}>
                    <label>
                        X
                        {
                            currentObjectId < objectList.length ?
                                <input type={"text"} id="x" onChange={handleInputChangeX} value={objectList[currentObjectId].left}/>
                                :
                                <input type={"text"} id="x" onChange={handleInputChangeX} />
                        }

                    </label>
                    <label>
                        Y
                        {
                            currentObjectId < objectList.length ?
                                <input type={"text"} id="y" onChange={handleInputChangeY} value={objectList[currentObjectId].top}/>
                                :
                                <input type={"text"} id="y" onChange={handleInputChangeY} />
                        }

                    </label>
                </div>
            </div>
            <div className={styles.position}>
                <div className={styles.position__button} onClick={()=>handleInputUpObject()}>
                    <ButtonIcon icon={<LayersUpIcon/>}/>
                </div>
                <div className={styles.position__button} onClick={()=>handleInputDownObject()}>
                    <ButtonIcon icon={<LayersDownIcon/>}/>
                </div>
                <div className={styles.position__button} onClick={()=>handleInputhorizontalMirroring()}>
                    <ButtonIcon icon={<ReflectionHIcon/>}/>
                </div>
                <div className={styles.position__button} onClick={()=>handleInputverticalMirroring()}>
                    <ButtonIcon icon={<ReflectionVIcon/>}/>
                </div>
            </div>
            <div className={styles.settings__field}>
                <div className={styles.settings__sub_title}>объект изначально</div>
                { objectList[currentObjectId].visible ?
                    <Tabs options={['ВИДЕН', 'СКРЫТ']} onClick={()=>handleInputChangeVisibility()}/>
                    // <div className='hidden_switch'>
                    //     <div className='hidden_switch_position hidden_switch_position_active'>виден</div>
                    //     <div className='hidden_switch_position' onClick={()=>{handleInputChangeVisibility()}}>скрыт</div>
                    // </div>
                    :
                    <Tabs options={['ВИДЕН', 'СКРЫТ']} onClick={()=>handleInputChangeVisibility()}/>
                    // <div className='hidden_switch'>
                    //     <div className='hidden_switch_position' onClick={()=>{ handleInputChangeVisibility()}}>виден</div>
                    //     <div className='hidden_switch_position hidden_switch_position_active'>скрыт</div>
                    // </div>
                }
            </div>
        </>
    );
}

export default Features