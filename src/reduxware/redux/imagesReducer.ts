import { createAction, createReducer } from "@reduxjs/toolkit";

import { RootStateType, Images } from "types";

export const setImages = createAction<Images>("IMG_SET");
export const chooseSubject = createAction<string>("SUBJECT_CHOOSE");
export const clearImages = createAction<string>("IMAGES_CLEAR");
export const setCollectionLength = createAction<number>("COLLECTION_LENGTH_SET");

export const initialState = {
    count: 0,
    lastFetchedPage: 0,
    subject: "",
    collectionLength: 0,
    backgroundImage: {},
    imgs: [] as Images,
};

const imagesReducer = createReducer(initialState, builder => {
    builder

        .addCase(setImages, (state, action) => {
            if (action.payload) {
                let foo = [...state.imgs];
                foo.push.apply(foo, action.payload);
                state.imgs = foo;
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
            state.imgs = initialState.imgs;
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

export const getAllImages = (state: RootStateType) => state.images.imgs;
