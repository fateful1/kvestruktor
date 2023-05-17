import React from "react";
import {useDispatch} from "react-redux";
import styles from './Layers.module.scss'
import {changeName, deleteObject, makeCopy} from "@/features/objSlice";
import {DragDotsIcon, MenuDotsIcon} from "@/ui/icons";

interface ILayerObject {
    name: any
}
const LayerObject = (props: ILayerObject) =>
{
    const { name } = props
    const [menuIsOpen, setMenuIsOpen] =  React.useState(false);
    const [rename, setRename] = React.useState(false);
    const dispatch = useDispatch();

    function inputChangeName(event: any) {
        if(event != undefined)
            dispatch(changeName(String(event.target.value)));
    }

    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            setRename(false)
        }
    }


    return <div className={styles.layers_name}>
        {
            rename ?
                <>
                    {/* drag_dots.svg */}
                    <DragDotsIcon/>
                    <div className={styles.layers_image}></div>
                    <input type={"text"} autoFocus className={styles.layers_input}  id="name" onChange={inputChangeName} onKeyDown={handleKeyDown} value={name}/>
                    <div className={styles.layers_image_menu} onClick={()=>setMenuIsOpen(!menuIsOpen)}>
                        <MenuDotsIcon/>
                    </div>
                </>
                :
                <>
                    <DragDotsIcon/>
                    <div>{name}</div>
                    <div className={styles.layers_image_menu} onClick={()=>setMenuIsOpen(!menuIsOpen)}>
                        <MenuDotsIcon/>
                    </div>

                    {/* <div className="layers_image_menu" onClick={()=>setMenuIsOpen(!menuIsOpen)}></div> */}
                </>
        }
        {menuIsOpen?<div className={styles.layers_context_menu}>
            <div className={styles.layers_item} onClick={()=>{dispatch(makeCopy()); setMenuIsOpen(!menuIsOpen)}}>Создать дубликат</div>
            <div className={styles.layers_item}  onClick={()=>{setRename(true); setMenuIsOpen(!menuIsOpen)}}>Переименовать</div>
            <div className={styles.layers_item}  style={{color: "#D22D25"}} onClick={()=>{dispatch(deleteObject()); setMenuIsOpen(!menuIsOpen)}}>Удалить</div>
        </div>:null}

    </div>
}

export default LayerObject;