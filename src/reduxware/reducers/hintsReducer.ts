import { createReducer } from "@reduxjs/toolkit";
import { Hints, RootState } from "types";
import { clearHints, getHints, hideHintsMsg } from "reduxware/redux";

export interface HintsState {
    hints: Hints;
    isHintsMessageVisible: boolean;
}

export const initialState: HintsState = {
    hints: [],
    isHintsMessageVisible: false,
};

export const hintsReducer = createReducer(initialState, builder => {
    builder
        .addCase(getHints, (state, action) => {
            if (action.payload) {
                state.hints = action.payload;
            }

            if (action.payload && action.payload.length) {
                state.isHintsMessageVisible = initialState.isHintsMessageVisible;
            } else {
                state.isHintsMessageVisible = true;
            }
        })

        .addCase(clearHints, state => {
            state.hints = initialState.hints;
            state.isHintsMessageVisible = false;
        })

        .addCase(hideHintsMsg, state => {
            state.isHintsMessageVisible = initialState.isHintsMessageVisible;
        })
        .addDefaultCase(() => {});
});

export default hintsReducer;

export const isNoHintsFoundVisible = (state: RootState) => state.hints.isHintsMessageVisible;

export const getAllHints = (state: RootState) => state.hints.hints as Hints;
