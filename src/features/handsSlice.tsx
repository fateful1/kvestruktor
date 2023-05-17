import { Action, createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "react";

export const HandsSlice = createSlice({
  name: "hand",
  initialState: {
    hand: 0,
  },
  reducers: {
    setHandInfo: (state, action) => {
      state.hand = action.payload;
    },
  },
});

export const setActiveHand = (tab: number) => (dispatch: Dispatch<Action>) => {
  dispatch(setHandInfo(tab));
};

export const { setHandInfo } = HandsSlice.actions;
export const showHandInfo = (state: { handsData: { hand: number } }) =>
  state.handsData.hand;
export default HandsSlice.reducer;
