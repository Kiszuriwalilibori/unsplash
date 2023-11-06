import { createAction } from "@reduxjs/toolkit";

import { ErrorState, ModalState, HintsState } from "types";
//ERROR
export const clearError = createAction("ERROR_CLEAR");
export const showError = createAction<ErrorState["message"]>("ERROR_SHOW");
// TEMPORARY BACKGROUND
export const hideTemporaryBackground = createAction("TEMPORARY_BACKGROUND_HIDE");
// MODAL
const showModal = createAction("MODAL_SHOW");
const hideModal = createAction("MODAL_HIDE");
const setImageIdForModal = createAction<ModalState["id"]>("ID_SET");

//HINTS
const getHints = createAction<HintsState["hints"]>("HINTS_GET");
const clearHints = createAction("HINTS_CLEAR");
const hideHintsMsg = createAction("HINTS_MESSAGE_HIDE");

///ONLINE
const setIsOnline = createAction<boolean>("IS_ONLINE");

export { clearHints, getHints, hideHintsMsg, hideModal, setImageIdForModal, setIsOnline, showModal };
