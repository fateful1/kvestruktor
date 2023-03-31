import {Action, createSlice} from "@reduxjs/toolkit";
import {Dispatch} from "react";

export const TabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        tab: 0
    },
    reducers: {
        setTabsInfo: (state, action) => {
            state.tab = action.payload;
        }
    }
})

export const setActiveTab = (tab: number) => (dispatch: Dispatch<Action>) => {
    dispatch(setTabsInfo(tab))
}

export const { setTabsInfo } = TabsSlice.actions
export const showActiveTab = (state: { tabsData: { tab: number; }; }) => state.tabsData.tab
export default TabsSlice.reducer