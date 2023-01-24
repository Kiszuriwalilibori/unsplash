import { createAction } from "@reduxjs/toolkit";

import { showModal, hideModal, setImageIdForModal } from "../modalReducer";
import { clearHints } from "../hintsReducer";

export const clearError = createAction("ERROR_CLEAR");
export const showError = createAction<string>("ERROR_SHOW");

export { showModal, hideModal, clearHints, setImageIdForModal };
