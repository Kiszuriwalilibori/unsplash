import Unsplash, { toJson } from "unsplash-js";

import { createNeighbours } from "js/functions";
import { accessKey } from "js/fixtures";
import { showError } from "../imagesReducer";
import { getDetails } from "reduxware/redux";

export function fetchDetails(id) {
  return (dispatch, getState) => {
    const unsplash = new Unsplash(accessKey);

    unsplash.photos
      .getPhoto(id)
      .then(toJson)
      .then(json => {
        const images = getState().images.images;

        const index = images.findIndex(item => {
          return json.id === item.id;
        });
        const result = { data: json, neighbours: createNeighbours(index, images) };
        if (result.data) {
          dispatch(getDetails(result));
        } else {
          dispatch(showError("received invalid data from Unsplash"));
        }
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}
