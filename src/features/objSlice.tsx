import {Action, createSlice} from "@reduxjs/toolkit";

export const ObjSlice = createSlice({
    name: 'obj',
    initialState: {
        obj: [],
        currentObjectId: null
    },
    reducers: {
        addObject: (state, action) => {
            console.log(state)
            console.log(action)
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
    }
})

export const addObjectOnBg = (obj: any) => (dispatch: any) => {
    dispatch(addObject(obj))
}

export const changeCurrentObjectId = (id: any) => (dispatch: any) => {
    dispatch(setCurrentObjectId(id))
}

export const { addObject, setCurrentObjectId } = ObjSlice.actions
export const showObjs = (state: { objectData: { obj: any; }; }) => state.objectData.obj
export const showCurrentId = (state: { objectData: { currentObjectId: any; }; }) => state.objectData.currentObjectId
export default ObjSlice.reducer