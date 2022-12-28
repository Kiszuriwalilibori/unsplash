import { createAction, createReducer } from "@reduxjs/toolkit";
import Unsplash, { toJson } from "unsplash-js";

import { setBackground, extractData } from "js/functions";
import { accessKey } from "js/fixtures";
import { clearError } from "reduxware/redux";

export const getImages = createAction("IMAGES_GET");
export const getHints = createAction("HINTS_GET");
export const clearHints = createAction("HINTS_CLEAR");
export const showError = createAction("ERROR_SHOW");
export const chooseSubject = createAction("SUBJECT_CHOOSE");
export const clearImages = createAction("IMAGES_CLEAR");
export const setCollectionLength = createAction("COLLECTION_LENGTH_SET");
export const showHintsMsg = createAction("HINTS_MESSAGE_SHOW");
export const hideHintsMsg = createAction("HINTS_MESSAGE_HIDE");
export const getBackgroundImage = createAction("GET_BACKGROUND_IMAGE");
export const checkNeighbours = createAction("CURRENT_IMAGE_NEIGHBOURS_CHECK");

export const initialState = {
  images: [],
  hints: [],
  error: { value: false, code: "" },
  count: 0,
  lastFetchedPage: 0,
  subject: "",
  collectionLength: 0,
  hintsMessageVisible: false,
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
        const index = state.images.findIndex(item => {
          return action.payload === item.id;
        });
        const neighbours = {};
        neighbours.pre = index === 0 ? false : true;
        neighbours.post = index === state.images.length - 1 ? false : true;
        state.currentNeighbours = neighbours;
      }
    })

    .addCase(getHints, (state, action) => {
      if (action.payload) {
        state.hints = action.payload;
      }

      if (action.payload.length) {
        state.hintsMessageVisible = initialState.hintsMessageVisible;
      } else {
        state.hintsMessageVisible = true;
      }
    })

    .addCase(clearHints, state => {
      state.hints = initialState.hints;
      state.hintsMessageVisible = false; /// ta linia jest zmieniona i to jest wątpliwe
    })

    .addCase(getBackgroundImage, (state, action) => {
      state.backgroundImage = action.payload;
    })

    .addCase(hideHintsMsg, state => {
      state.hintsMessageVisible = initialState.hintsMessageVisible;
    })

    .addCase(showHintsMsg, state => {
      state.hintsMessageVisible = true;
    })

    .addCase(clearImages, (state, action) => {
      state.lastFetchedPage = initialState.lastFetchedPage;
      state.images = initialState.images;
      state.subject = action.payload;
    })

    .addCase(showError, (state, action) => {
      if (action.payload) {
        state.error.value = true;
        state.error.code = action.payload;
      }
    })
    .addCase(clearError, state => {
      state.error.value = false;
      state.error.code = "";
    })

    .addCase(chooseSubject, (state, action) => {
      if (action.payload) {
        state.subject = action.payload;
      }
    })
    .addDefaultCase(() => {});
});

export default imagesReducer;

export function fetchBackgroundImage() {
  return dispatch => {
    const unsplash = new Unsplash(accessKey);
    unsplash.photos
      .getRandomPhoto({ query: "nature", orientation: "landscape" })
      .then(toJson)
      .then(json => {
        if (!json?.errors) {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          const root = document.getElementById("root");
          root.style.backgroundSize = `cover`;
          const image = isMobile ? json.urls?.small || json.urls?.regular || json.urls?.full || json.urls?.raw : json.urls?.regular || json.urls?.full || json.urls?.raw || json.urls?.small;

          if (image) {
            root.style.background = `url(${image}) no-repeat center center fixed`;
            root.style.backgroundSize = `cover`;
            setBackground(image);
          } else {
            setBackground();
            dispatch(showError("Can not load background image"));
          }
        } else {
          setBackground();
          const errors = json.errors.join(", ");

          dispatch(showError(errors));
        }
      })
      .catch(err => {
        setBackground();
        const errors = "Błąd podczas pobierania tła" + err.message;
        dispatch(showError(errors));
      });
  };
}
