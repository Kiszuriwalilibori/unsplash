import { createReducer } from "@reduxjs/toolkit";
import { clearError, showError } from "reduxware/redux";

export const initialState = {
    isError: false,
    message: "",
};
export type ErrorState = typeof initialState;

export const errorReducer = createReducer(initialState, builder => {
    builder
        .addCase(showError, (state, action) => {
            if (action.payload) {
                state.isError = true;
                state.message = action.payload;
            }
        })
        .addCase(clearError, state => {
            state.isError = false;
            state.message = "";
        })

        .addDefaultCase(() => {});
});

export default errorReducer;
