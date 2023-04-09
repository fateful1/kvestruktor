import {Action, createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";

export const BgSlice = createSlice({
    name: 'bg',
    initialState: {
        bg: {
            image: null,
            width:0,
            height:0,
            left:null,
            top:null,
            fullwidth:true,
        }
    },
    reducers: {
        setBg: (state, action) => {
            console.log(state.bg)
            console.log(action.payload)
            state.bg.image=action.payload.image;
            state.bg.width=action.payload.width;
            // @ts-ignore
            state.bg.left=action.payload.width / 2;
            state.bg.height=action.payload.height;
            // @ts-ignore
            state.bg.top=action.payload.height / 2;
        },
        changeBackgroundX: (state, action) =>{
            state.bg.left = action.payload;
        },
        changeBackgroundY: (state,action) =>{
            state.bg.top = action.payload;
        },
    }
})

export const setActiveBg = (bg: { image: string; width: number; height: number; }) => (dispatch: (arg0: { payload: any; type: "bg/setBg"; }) => void) => {
    console.log(bg)
    dispatch(setBg(bg))
}

export const changeBgX = (x: any) => (dispatch: (arg0: { payload: any; type: "bg/changeBackgroundX"; }) => void) => {
    dispatch(changeBackgroundX(x))
}
export const changeBgY = (y: any) => (dispatch: any) => {
    dispatch(changeBackgroundY(y))
}

export const { setBg, changeBackgroundX, changeBackgroundY } = BgSlice.actions
export const showBg = (state: { bgData: { bg: any; }; }) => state.bgData.bg
export default BgSlice.reducer