import { createReducer } from "@reduxjs/toolkit";

import { setIsOnline } from "reduxware/redux";
import { RootState } from "types";

const initialState = { isOnline: true };
export const onlineReducer = createReducer(initialState, builder => {
    builder.addCase(setIsOnline, (state, action) => {
        state.isOnline = action.payload;
    });
});

export default onlineReducer;

export const selectIsOnline = (state: RootState) => state.online.isOnline;
