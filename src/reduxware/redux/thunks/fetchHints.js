import Unsplash, { toJson } from "unsplash-js";
import { clearHints, getHints, hideHintsMsg } from "reduxware/redux/hintsReducer";
import { showError } from "reduxware/redux";
import { getTags } from "js/functions";
import { accessKey } from "js/fixtures";

export function fetchHints(pattern) {
    return (dispatch, getState) => {
        if (pattern && pattern.length > 3) {
            const unsplash = new Unsplash(accessKey);
            unsplash.search
                .photos(pattern, 1, 30)
                .then(toJson)
                .then(json => {
                    if (json.errors) {
                        const errors = json.errors.join(", ");
                        dispatch(showError(errors));
                    } else {
                        dispatch(getHints(getTags(json.results)));
                    }
                })
                .catch(err => {
                    dispatch(showError(err.message));
                });
        } else {
            if (getState().hints.hints.length) {
                dispatch(clearHints());
            }
            dispatch(hideHintsMsg());
        }
    };
}
