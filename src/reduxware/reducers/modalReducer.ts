import { createReducer } from "@reduxjs/toolkit";
import { hideModal, showModal, setImageIdForModal } from "reduxware/redux";

import { RootState } from "types/index";

export interface ModalState {
    isVisible: boolean;
    error: string;
    id: string;
}

const initialState: ModalState = {
    isVisible: false,
    error: "",
    id: "",
};

export const modalReducer = createReducer(initialState, builder => {
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

export const getIdForModal = (state: RootState) => state.modal.id;
