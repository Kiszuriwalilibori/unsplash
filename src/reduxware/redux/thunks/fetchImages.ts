import Unsplash, { toJson } from "unsplash-js";

import { ACCESS_KEY, NUMBER_OF_IMAGES } from "config";
import { clearImages, setImages, setCollectionLength, initialState } from "../../reducers/imagesReducer";
import { showError } from "reduxware/redux";
import { AppDispatch, GetState, RootState, ShowMessage } from "types";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

const fetchFullImage = (id: string) => {
    return fetch(`https://api.unsplash.com/photos/${id}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY.accessKey}`,
        },
    }).then(response => response.json());
};

export function fetchImages(
    pattern: string,
    showMessage: ShowMessage
): ThunkAction<void, RootState, undefined, AnyAction> {
    return (dispatch: AppDispatch, getState: GetState) => {
        if (pattern) {
            const lastSubject = getState().images.subject;
            let lastFetchedPage, collectionLength;
            let shouldFetch = false;
            if (lastSubject === pattern) {
                collectionLength = getState().images.collectionLength;
                lastFetchedPage = getState().images.lastFetchedPage;
                if (collectionLength > lastFetchedPage) {
                    shouldFetch = true;
                } else {
                    shouldFetch = false;
                    showMessage.warning("Nie ma więcej zdjęć w danej kategorii - nie próbuj ich pobrać");
                }
            } else {
                dispatch(clearImages(pattern));
                lastFetchedPage = initialState.lastFetchedPage;
                shouldFetch = true;
            }
            if (shouldFetch) {
                const unsplash = new Unsplash(ACCESS_KEY as { accessKey: string });
                unsplash.search
                    .photos(pattern, lastFetchedPage + 1, NUMBER_OF_IMAGES)
                    .then(toJson)
                    .then(json => {
                        if (json.errors || json?.OK === false) {
                            const errors = json.errors
                                ? json.errors.join(", ")
                                : json.statusText
                                  ? json.statusText
                                  : "Unknown error during fetching images";

                            dispatch(showError(errors));
                            return;
                        } else {
                            Promise.all(json.results.map((image: { id: string }) => fetchFullImage(image.id)))
                                .then(fullImages => {
                                    dispatch(setImages(fullImages));
                                    dispatch(setCollectionLength(json.total_pages));
                                })
                                .catch(err => {
                                    const message =
                                        err instanceof Error
                                            ? err.message
                                            : "Unknown error occured when fetching image details";

                                    dispatch(showError(message));
                                });
                        }
                    })
                    .catch(err => {
                        let message: string;
                        if (err instanceof Error) {
                            message = err.message;
                        } else {
                            message = "Unknown error occured when fetching images";
                        }
                        dispatch(showError(message));
                    });
            }
        }
    };
}

export type FetchImages = (pattern: string, showMessage: ShowMessage) => void;
