import { configureStore } from "@reduxjs/toolkit";
import {TabsSlice} from "@/features/tabsSlice";
import {HandsSlice} from "@/features/handsSlice";

export const rootReducer = configureStore({
    reducer: {
        tabsData: TabsSlice.reducer,
        handsData: HandsSlice.reducer,
    }
})
