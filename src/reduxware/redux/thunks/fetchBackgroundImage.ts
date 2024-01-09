import Unsplash, { toJson } from "unsplash-js";
import { showError, hideTemporaryBackground } from "reduxware/redux";

import { setBackground } from "js/functions";
import { AppDispatch, RootState } from "types";
import { RANDOM_BACKGROUND_QUERY, ACCESS_KEY } from "config";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

export function fetchBackgroundImage(): ThunkAction<void, RootState, undefined, AnyAction> {
    return (dispatch: AppDispatch) => {
        if (!ACCESS_KEY.accessKey) {
            setBackground();
            dispatch(hideTemporaryBackground());
            return;
        }

        const unsplash = new Unsplash(ACCESS_KEY as { accessKey: string });
        unsplash.photos
            .getRandomPhoto(RANDOM_BACKGROUND_QUERY)
            .then(toJson)
            .then(json => {
                if (json === undefined) {
                    setBackground();
                    dispatch(hideTemporaryBackground());
                    dispatch(showError("Can not load background image. Most likely, Requeste Limit Rate is exceeded"));
                } else {
                    if (!json?.errors || json?.OK !== false) {
                        const isMobile = window.matchMedia("(max-width: 768px)").matches;
                        const root = document.getElementById("root");
                        if (root) root.style.backgroundSize = `cover`;
                        const image = isMobile
                            ? json.urls?.small || json.urls?.regular || json.urls?.full || json.urls?.raw
                            : json.urls?.regular || json.urls?.full || json.urls?.raw || json.urls?.small;

                        if (image) {
                            if (root) root.style.background = `url(${image}) no-repeat center center fixed`;
                            if (root) root.style.backgroundSize = `cover`;
                            setBackground(image);
                            dispatch(hideTemporaryBackground());
                        } else {
                            setBackground();
                            dispatch(hideTemporaryBackground());
                            dispatch(showError("Can not load background image"));
                        }
                    } else {
                        setBackground();
                        dispatch(hideTemporaryBackground());
                        const errors = json.errors
                            ? json.errors.join(", ")
                            : json.statusText
                            ? json.statusText
                            : "Undescribed error of fetching background";

                        dispatch(showError(errors));
                    }
                }
            })
            .catch(err => {
                dispatch(hideTemporaryBackground());
                setBackground();
                let message: string;
                if (err instanceof Error) {
                    message = err.message.includes("Rate Limit Exceeded")
                        ? "Błąd podczas pobierania tła: Rate Limit Exceeded"
                        : "Błąd podczas pobierania tła: " + err.message;
                } else {
                    message = "Unknown error occured when fetching background image";
                }

                dispatch(showError(message));
            });
    };
}
