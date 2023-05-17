import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeList, setCurrentObjectId, showCurrentId, showObjs} from "@/features/objSlice";
import {LayerObject} from "@/components/Layers/index";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";


const getItemStyle = (currentObjectId: any, isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    // padding: '10px',
    margin: `0 0 10px 0`,
    width: 336,
    borderBottom:2,
    borderColor:"grey",
    background: isDragging || currentObjectId ? "#E6F0F0" : "white",
    color: isDragging || currentObjectId ? "#006666" : "black",
    fontWeight: isDragging || currentObjectId ? 500 : 400,
    fontSize: '18px',
    ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
    // background: isDraggingOver ? "lightblue" : "white",
    background: "white",

    // padding: '10px',
    position: "relative",
    padding: '32px'
});

const queryAttr = "data-rbd-drag-handle-draggable-id";

const Layers = () => {

    const dispatch = useDispatch();
    const objectList = useSelector(showObjs)
    const currentObjectId = useSelector(showCurrentId)

    const [placeholderProps, setPlaceholderProps] = useState<any>({});
    // const [copyObjectList, setItems] = useState(Array.from(objectList));
    let copyObjectList = (Array.from(objectList)).reverse();
    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        setPlaceholderProps({})
        console.log(copyObjectList)
        // const objlist =
        dispatch(changeList( reorder(copyObjectList, result.source.index, result.destination.index, currentObjectId)));
        // reorder(objectList, result.source.index, result.destination.index);
        // setItems();
    };

    function Click(id: any)
    {
        dispatch(setCurrentObjectId(id));
    }


    const reorder = (list: any, startIndex: any, endIndex: any, currentObjectId: any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        const copy = Array.from(result).reverse();
        const id = copy.findIndex((el: any)=>el.id===currentObjectId);
        dispatch(setCurrentObjectId(id));
        const res = Array.from(copy.map((el: any,index)=>({...el, id: index})));
        console.log(res)
        // dispatch(changeList(res));
        return res;
    };


    const onDragUpdate = (update: any) => {

        if(!update.destination){
            return;
        }
        const draggableId = update.draggableId;
        const destinationIndex = update.destination.index;

        const domQuery = `[${queryAttr}='${draggableId}']`;
        const draggedDOM = document.querySelector(domQuery);

        if (!draggedDOM) {
            return;
        }
        const { clientHeight, clientWidth } = draggedDOM;

        // @ts-ignore
        const clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) + [...draggedDOM.parentNode.children]
            .slice(0, destinationIndex)
            .reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const marginBottom = parseFloat(style.marginBottom);
                return total + curr.clientHeight + marginBottom;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode as Element).paddingLeft)
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {
                            copyObjectList.length >0 ? copyObjectList.map((item: any,index) => (
                                <Draggable key={Number(item.id)} draggableId={String(item.id)} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                currentObjectId===item.id,
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                            onClick={() => Click(item.id)}
                                        >

                                            <LayerObject key={item.id} name={item.name}/>
                                            {/*{item.id}*/}
                                            {/*{index}*/}
                                        </div>
                                    )}
                                </Draggable>
                            )):null}

                        {provided.placeholder}
                        <div style={{
                            position: "absolute",
                            top: placeholderProps.clientY,
                            left: placeholderProps.clientX,
                            height: placeholderProps.clientHeight,
                            background: "#B0DCDC",
                            width: placeholderProps.clientWidth
                        }}/>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Layers