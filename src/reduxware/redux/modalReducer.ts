import { createReducer, createAction } from "@reduxjs/toolkit";
import { Details, Result } from "types/index";
import { splitUrls } from "js/functions";

export const showModal = createAction("MODAL_SHOW");
export const hideModal = createAction("MODAL_HIDE");
export const getDetails = createAction<Result>("DETAILS_GET");

const initialState = {
    isVisible: false,
    details: {} as Details,
    error: "",
};

const modalReducer = createReducer(initialState, builder => {
    builder

        .addCase(showModal, state => {
            state.isVisible = true;
        })
        .addCase(hideModal, state => {
            state.isVisible = false;
        })

        .addCase(getDetails, (state, action) => {
            if (action.payload) {
                const { data, neighbours } = action.payload;
                const details = {} as Details;
                details.location = data.location?.city
                    ? data.location.city + ", " + (data.location.country ? data.location.country : "")
                    : "";
                details.author = data.user.name || data.user.last_name || data.user.first_name || "";
                details.twitter = data.user.twitter_username || "";
                details.profileImage = data.user.profile_image.small || "";
                details.urls = data.urls ? splitUrls(data.urls) : "";
                details.previous = neighbours.previous;
                details.next = neighbours.next;
                state.details = details;

                if (state.details) {
                    state.isVisible = true;
                }
            }
        })
        .addDefaultCase(() => {});
});

export default modalReducer;
