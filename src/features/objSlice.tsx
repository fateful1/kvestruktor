import {createSlice} from "@reduxjs/toolkit";

export const ObjSlice = createSlice({
    name: 'obj',
    initialState: {
        obj: [],
        currentObjectId: null
    },
    reducers: {
        addObject: (state, action) => {
            // @ts-ignore
            state.obj.push({
                    id:state.obj.length,
                    image: action.payload.image,
                    name: action.payload.name,
                    width: action.payload.width,
                    height:action.payload.height,
                    angle:0,
                    left:500,
                    top:500,
                    visible:true,
                    interactive:true,
                    buttonMode:true,
                    actionClick:false,
                    fullwidth:false,
                    inBack:false, // объект улетает в рюкзак
                    simpleInfo: false, //появляется подсказка
                    task:null, //появляется задание
                    becomeVisible:false, //становится видимым
                    becomeUnvisible:false, //становится невидимым
                    info: null,
                });

        },
        setCurrentObjectId: (state, action) => {
            if(state.obj.length > action.payload)
                state.currentObjectId = action.payload;
        },
        changeWidth: (state, action) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].width = action.payload;
        },
        changeHeight: (state, action) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].height = action.payload;
        },
        changeAngle: (state, action) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].angle = action.payload;
        },
        changeX: (state, action) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].left = action.payload;
        },
        changeY: (state, action) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].top = action.payload;
        },
        addText:(state, action) =>{
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].info=action.payload;
        },
        changeList:(state, action)=>{
            state.obj=action.payload;
            // if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
            // = copy.map((el,index)=>({...el, id: index}));
            // for (let i = 0; i < state.objectList.length; i += 1)
            // state.objectList[i] ={...state.objectList[i], id: i};
        },
        changeTask:(state, action) => { ///появляется задание
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].task = action.payload;
        },
        changeActionClick: (state, action) => { //действия по клику
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
            {state.obj[state.currentObjectId].actionClick = action.payload;
                if(action.payload===false)
                {
                    state.obj[state.currentObjectId].inBack = action.payload;
                    state.obj[state.currentObjectId].simpleInfo = action.payload;
                    state.obj[state.currentObjectId].info= null;
                    state.obj[state.currentObjectId].becomeVisible = action.payload;
                    state.obj[state.currentObjectId].becomeUnvisible = action.payload;
                    state.obj[state.currentObjectId].task = action.payload;
                }
            }
        },
        changeObjectFliesInBackpack: (state, action) => {   // объект улетает в рюкзак
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].inBack = action.payload;
        },
        changeAddAHint: (state, action) => { //появляется подсказка
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].simpleInfo = action.payload;
        },
        changeBecomeVisible: (state, action) => { //становится видимым
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].becomeVisible = action.payload;
        },
        changeBecomeUnvisible: (state, action) => { //становится невидимым
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].becomeUnvisible = action.payload;
        },
        deleteObject: (state) => {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                state.obj.splice(state.currentObjectId, 1);

            for (let i = 0; i < state.obj.length; i += 1) {
                state.obj[i].id = i;
            }
            state.currentObjectId=null;
        },
        horizontalMirroring:(state)=>
        {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
            {
                state.obj[state.currentObjectId].width = -state.obj[state.currentObjectId].width;
                // let c = state.currentObjectId
                // state.currentObjectId = null
                // state.currentObjectId = c

            }
        },
        verticalMirroring:(state)=>
        {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
            {
                let h = -state.obj[state.currentObjectId].height
                state.obj[state.currentObjectId].height = h;
                // let c = state.currentObjectId
                // state.currentObjectId = null
                // state.currentObjectId = c
            }

        },
        changeVisibility:(state)=>
        {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId)
                console.log(state.obj[state.currentObjectId].visible)
            console.log(state.obj.length)
            console.log(state.currentObjectId)
            console.log(state.obj[state.currentObjectId])
                state.obj[state.currentObjectId].visible = !state.obj[state.currentObjectId].visible;
        },
        upObject:(state)=>
        {
            if(state.currentObjectId!=null && state.obj.length>state.currentObjectId+1) {
                [state.obj[state.currentObjectId], state.obj[state.currentObjectId + 1]] = [state.obj[state.currentObjectId + 1], state.obj[state.currentObjectId]];
                state.currentObjectId = state.currentObjectId +1;
                for (let i = 0; i < state.obj.length; i += 1)
                    state.obj[i].id = i;
            }
        },
        downObject:(state)=>
        {
            if(state.currentObjectId!=null && 0<state.currentObjectId)
            {
                [state.obj[state.currentObjectId], state.obj[state.currentObjectId - 1]] = [state.obj[state.currentObjectId - 1], state.obj[state.currentObjectId]];
                state.currentObjectId = state.currentObjectId - 1;
                for (let i = 0; i < state.obj.length; i += 1)
                    state.obj[i].id = i;
            }
        },
        changeName:(state, action) => {
            if(state.obj.length>state.currentObjectId)
                state.obj[state.currentObjectId].name = action.payload;
        },
        makeCopy: (state) => {
            if(state.obj.length>0) {
                state.obj.push(
                    {
                        id: state.obj.length,
                        image: state.obj[state.currentObjectId].image,
                        name: state.obj[state.currentObjectId].name,
                        width: state.obj[state.currentObjectId].width,
                        height: state.obj[state.currentObjectId].height,
                        angle: state.obj[state.currentObjectId].angle,
                        left: state.obj[state.currentObjectId].left,
                        top: state.obj[state.currentObjectId].left,
                        visible: state.obj[state.currentObjectId].visible,
                        interactive: state.obj[state.currentObjectId].interactive,
                        buttonMode: state.obj[state.currentObjectId].buttonMode,
                        actionClick: state.obj[state.currentObjectId].actionClick,
                        fullwidth: state.obj[state.currentObjectId].fullwidth,
                        inBack: state.obj[state.currentObjectId].inBack, // объект улетает в рюкзак
                        simpleInfo: state.obj[state.currentObjectId].simpleInfo, //появляется подсказка
                        task: state.obj[state.currentObjectId].task, //появляется задание
                        becomeVisible: state.obj[state.currentObjectId].becomeVisible, //становится видимым
                        becomeUnvisible: state.obj[state.currentObjectId].becomeUnvisible, //становится невидимым
                    });
            }
        },
    },
})

export const addObjectOnBg = (obj: any) => (dispatch: any) => {
    dispatch(addObject(obj))
}

export const changeCurrentObjectId = (id: any) => (dispatch: any) => {
    dispatch(setCurrentObjectId(id))
}

export const {
    // setCursorMode,
    // setHandMode,
    changeWidth,
    changeHeight,
    changeAngle,
    changeX,
    changeY,
    setCurrentObjectId,
    addObject,
    horizontalMirroring,
    verticalMirroring,
    changeVisibility,
    deleteObject,
    upObject,
    downObject,
    changeObjectFliesInBackpack,
    changeAddAHint,
    changeBecomeVisible,
    changeBecomeUnvisible,
    changeActionClick,
    changeTask,
    changeList,
    makeCopy,
    changeName,
    addText
} = ObjSlice.actions;
export const showObjs = (state: any) => state.objectData.present.obj
export const showCurrentId = (state: any) => state.objectData.present.currentObjectId
export default ObjSlice.reducer