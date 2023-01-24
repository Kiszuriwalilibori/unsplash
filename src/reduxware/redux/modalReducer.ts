import { createReducer, createAction } from "@reduxjs/toolkit";

import { Details, RootStateType } from "types/index";

export const showModal = createAction("MODAL_SHOW");
export const hideModal = createAction("MODAL_HIDE");
export const setImageIdForModal = createAction<string>("ID_SET");

const initialState = {
    isVisible: false,
    details: {} as Details,
    error: "",
    id: "",
};

const modalReducer = createReducer(initialState, builder => {
    builder
        .addCase(showModal, state => {
            state.isVisible = true;
        })
        .addCase(hideModal, state => {
            state.isVisible = false;
        })
        .addCase(setImageIdForModal, (state, action) => {
            state.id = action.payload;
        })
        .addDefaultCase(() => {});
});

export default modalReducer;

export const getIdForModal = (state: RootStateType) => state.modal.id;
