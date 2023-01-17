import Unsplash, { toJson } from "unsplash-js";
import { accessKey } from "js/fixtures";
import { showError } from "reduxware/redux";
import { setBackground } from "js/functions";

export function fetchBackgroundImage() {
  return dispatch => {
    if(!accessKey.accessKey){
       setBackground();
       return;
    }
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
