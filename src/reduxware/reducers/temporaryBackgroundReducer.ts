import { createReducer } from "@reduxjs/toolkit";
import { hideTemporaryBackground } from "reduxware/redux";

export const initialState = {
    isVisible: true,
};

export const temporaryBackgroundReducer = createReducer(initialState, builder => {
    builder
        .addCase(hideTemporaryBackground, state => {
            state.isVisible = false;
        })

        .addDefaultCase(() => {});
});

export default temporaryBackgroundReducer;
