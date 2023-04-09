import { configureStore } from "@reduxjs/toolkit";
import {TabsSlice} from "@/features/tabsSlice";
import {HandsSlice} from "@/features/handsSlice";
import {BgSlice} from "@/features/bgSlice";
import {ObjSlice} from "@/features/objSlice";

export const rootReducer = configureStore({
    reducer: {
        tabsData: TabsSlice.reducer,
        handsData: HandsSlice.reducer,
        bgData: BgSlice.reducer,
        objectData: ObjSlice.reducer,
    }
})
