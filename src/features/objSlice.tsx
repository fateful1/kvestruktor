import {Action, createSlice} from "@reduxjs/toolkit";

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
    }
})

export const addObjectOnBg = (obj: any) => (dispatch: any) => {
    dispatch(addObject(obj))
}

export const changeCurrentObjectId = (id: any) => (dispatch: any) => {
    dispatch(setCurrentObjectId(id))
}

export const { addObject, setCurrentObjectId, changeWidth, changeX, changeY, changeHeight, changeAngle } = ObjSlice.actions
export const showObjs = (state: { objectData: { obj: any; }; }) => state.objectData.obj
export const showCurrentId = (state: { objectData: { currentObjectId: any; }; }) => state.objectData.currentObjectId
export default ObjSlice.reducer