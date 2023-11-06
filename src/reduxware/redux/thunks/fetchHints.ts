import Unsplash, { toJson } from "unsplash-js";

import { clearHints, getHints, hideHintsMsg, showError } from "reduxware/redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

import { createTags } from "js/functions";
import { ACCESS_KEY, INPUT_LENGTH_THRESHOLD, NUMBER_OF_HINTS } from "js/fixtures";
import { AppDispatch, GetState, RootState } from "types";

export function fetchHints(pattern: string): ThunkAction<void, RootState, undefined, AnyAction> {
    return (dispatch: AppDispatch, getState: GetState) => {
        if (pattern && pattern.length > INPUT_LENGTH_THRESHOLD) {
            const unsplash = new Unsplash(ACCESS_KEY as { accessKey: string });
            unsplash.search
                .photos(pattern, 1, NUMBER_OF_HINTS)
                .then(toJson)
                .then(json => {
                    if (json.errors || json?.OK === false) {
                        const errors = json.errors
                            ? json.errors.join(", ")
                            : json.statusText
                            ? json.statusText
                            : "Unknown error during fetching images";

                        dispatch(showError(errors));
                    } else {
                        dispatch(getHints(createTags(json.results)));
                    }
                })
                .catch(err => {
                    let message: string;
                    if (err instanceof Error) {
                        message = err.message;
                    } else {
                        message = "Unknown error occured when fetching hints";
                    }
                    dispatch(showError(message));
                });
        } else {
            if (getState().hints.hints.length) {
                dispatch(clearHints());
            }
            dispatch(hideHintsMsg());
        }
    };
}

export type FetchHints = (pattern: string) => void;
