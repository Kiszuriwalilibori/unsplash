import Unsplash, { toJson } from "unsplash-js";
import { accessKey } from "js/fixtures";
import { clearImages, setImages, setCollectionLength, initialState } from "../imagesReducer";
import { showError } from "reduxware/redux";

export function fetchImages(pattern) {
    return (dispatch, getState) => {
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
                dispatch(showError("Nie ma więcej zdjęć w danej kategorii - nie próbuj ich pobrać"));
            }
        } else {
            dispatch(clearImages(pattern));
            lastFetchedPage = initialState.lastFetchedPage;
            shouldFetch = true;
        }
        if (shouldFetch) {
            const unsplash = new Unsplash(accessKey);

            unsplash.search
                .photos(pattern, lastFetchedPage + 1, 30)
                .then(toJson)
                .then(json => {
                    if (json.errors) {
                        const errors = json.errors.join(", ");
                        dispatch(showError(errors));
                    } else {
                        dispatch(setImages(json.results));
                        dispatch(setCollectionLength(json.total_pages));
                    }
                })
                .catch(err => {
                    dispatch(showError(err.message));
                });
        }
    };
}
