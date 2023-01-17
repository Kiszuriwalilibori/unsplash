import { createAction, createReducer } from "@reduxjs/toolkit";
import { Hints } from "types";
import { extractData } from "js/functions";

export const getImages = createAction("IMAGES_GET");
export const getHints = createAction<Hints>("HINTS_GET");
export const clearHints = createAction("HINTS_CLEAR");
export const chooseSubject = createAction("SUBJECT_CHOOSE");
export const clearImages = createAction<string>("IMAGES_CLEAR");
export const setCollectionLength = createAction("COLLECTION_LENGTH_SET");
export const showHintsMsg = createAction("HINTS_MESSAGE_SHOW");
export const hideHintsMsg = createAction("HINTS_MESSAGE_HIDE");
export const checkNeighbours = createAction("CURRENT_IMAGE_NEIGHBOURS_CHECK");

export const initialState = {
  images: [],
  hints: [] as Hints,
  error: { value: false, code: "" },
  count: 0,
  lastFetchedPage: 0,
  subject: "",
  collectionLength: 0,
  isHintsMessageVisible: false,
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

    .addCase(checkNeighbours, (state, action) => {
      if (action.payload) {
        const index = state.images.findIndex((item:{id:string}) => {
          return action.payload === item.id;
        });
        interface Neighbours{pre: Boolean; post:Boolean}
        const neighbours = {} as Neighbours;
        neighbours.pre = index === 0 ? false : true;
        neighbours.post = index === state.images.length - 1 ? false : true;
        state.currentNeighbours = neighbours;
      }
    })

    .addCase(getHints, (state, action) => {
      if (action.payload) {
        state.hints = action.payload;
      }

      if (action.payload && action.payload.length) {
        state.isHintsMessageVisible = initialState.isHintsMessageVisible;
      } else {
        state.isHintsMessageVisible = true;
      }
    })

    .addCase(clearHints, state => {
      state.hints = initialState.hints;
      state.isHintsMessageVisible = false; /// ta linia jest zmieniona i to jest wątpliwe
    })

    .addCase(hideHintsMsg, state => {
      state.isHintsMessageVisible = initialState.isHintsMessageVisible;
    })

    .addCase(showHintsMsg, state => {
      state.isHintsMessageVisible = true;
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
