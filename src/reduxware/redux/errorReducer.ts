import { createReducer } from "@reduxjs/toolkit";
import { clearError,showError } from "reduxware/redux";

export const initialState = {
  value: false, code: "" 
  
};

const errorReducer = createReducer(initialState, builder => {
  builder
    .addCase(showError, (state, action) => {
      if (action.payload) {
        state.value = true;
        state.code = action.payload;
      }
    })
    .addCase(clearError, state => {
      state.value = false;
      state.code = "";
    })

    
    .addDefaultCase(() => {});
});

export default errorReducer;
