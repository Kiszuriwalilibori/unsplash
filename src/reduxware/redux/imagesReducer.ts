import { createAction, createReducer } from "@reduxjs/toolkit";
import { extractData } from "js/functions";

export const getImages = createAction("IMAGES_GET");
export const chooseSubject = createAction("SUBJECT_CHOOSE");
export const clearImages = createAction<string>("IMAGES_CLEAR");
export const setCollectionLength = createAction("COLLECTION_LENGTH_SET");

export const initialState = {
    images: [],
    count: 0,
    lastFetchedPage: 0,
    subject: "",
    collectionLength: 0,
    backgroundImage: {},
    currentNeighbours: {},
};

const imagesReducer = createReducer(initialState, builder => {
    builder

        .addCase(getImages, (state, action) => {
            if (action.payload) {
                let temp = [...state.images];
                temp.push.apply(temp, extractData(action.payload));
                state.images = temp;
                state.lastFetchedPage++;
            }
        })

        .addCase(setCollectionLength, (state, action) => {
            if (action.payload) {
                state.collectionLength = action.payload;
            }
        })

        .addCase(clearImages, (state, action) => {
            state.lastFetchedPage = initialState.lastFetchedPage;
            state.images = initialState.images;
            state.subject = action.payload;
        })

        .addCase(chooseSubject, (state, action) => {
            if (action.payload) {
                state.subject = action.payload;
            }
        })
        .addDefaultCase(() => {});
});

export default imagesReducer;
