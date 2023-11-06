import { createReducer } from "@reduxjs/toolkit";
import { hideModal, showModal, setImageIdForModal } from "reduxware/redux";

import { Details, RootState } from "types/index";

const initialState: ModalState = {
    isVisible: false,
    details: {} as Details,
    error: "",
    id: "",
};
export interface ModalState {
    isVisible: boolean;
    details: Details;
    error: string;
    id: string;
}

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
