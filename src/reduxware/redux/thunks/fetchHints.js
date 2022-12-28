import Unsplash, { toJson } from "unsplash-js";
import { showError, clearHints, getHints } from "reduxware/redux/imagesReducer";
import { getTags, getOptions } from "js/functions";
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
            dispatch(getHints(getOptions(getTags(json.results))));
          }
        })
        .catch(err => {
          dispatch(showError(err.message));
        });
    } else {
      if (getState().images.hints.length) {
        dispatch(clearHints());
      }
    }
  };
}
