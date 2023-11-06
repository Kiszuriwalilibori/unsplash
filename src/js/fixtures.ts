import { UnsplashApi } from "unsplash-js";

export const ACCESS_KEY = { accessKey: process.env.REACT_APP_ACCESS_KEY };
export const trending = ["flowers", "wallpapers", "backgrounds", "happy", "love"];

export const fallbackBackground = {
    mobile: "url(../images/background_mobile.jpg) no-repeat center center fixed",
    small: "background: url(../images/background_small.jpg) no-repeat center center fixed",
    tablet: "background: url(../images/background_tablet.jpg) no-repeat center center fixed",
    desktop: "background: url(../images/background_desktop.jpg) no-repeat center center fixed",
    large: "background: url(../images/background.jpg) no-repeat center center fixed",
};

export const NUMBER_OF_HINTS = 30;
export const NUMBER_OF_IMAGES = 30;
export const INPUT_LENGTH_THRESHOLD = 3;

export const RANDOM_BACKGROUND_QUERY = { query: "nature,green", orientation: "landscape" };
