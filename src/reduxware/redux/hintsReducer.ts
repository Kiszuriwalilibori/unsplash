import { createAction, createReducer } from "@reduxjs/toolkit";
import { Hints, RootStateType } from "types";

export const getHints = createAction<Hints>("HINTS_GET");
export const clearHints = createAction("HINTS_CLEAR");
export const showHintsMsg = createAction("HINTS_MESSAGE_SHOW");
export const hideHintsMsg = createAction("HINTS_MESSAGE_HIDE");

export const initialState = {
 
  hints: [] as Hints,
  isHintsMessageVisible: false,
  
};

const hintsReducer = createReducer(initialState, builder => {
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

    .addCase(showHintsMsg, state => {
      state.isHintsMessageVisible = true;
    })

    .addDefaultCase(() => {});
});

export default hintsReducer;


export const isNoHintsFoundVisible = (state: RootStateType)=>state.hints.isHintsMessageVisible;

export const getAllHints = (state: RootStateType)=>state.hints.hints as Hints;
