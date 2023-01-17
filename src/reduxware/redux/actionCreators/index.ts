import { createAction } from "@reduxjs/toolkit";

import { showModal, hideModal, getDetails } from "../modalReducer";

export const clearError = createAction("ERROR_CLEAR");
export const showError = createAction<string>("ERROR_SHOW");

export { showModal, hideModal, getDetails};
