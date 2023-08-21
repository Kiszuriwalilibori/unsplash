import { createSelector } from "@reduxjs/toolkit";
import { createOptions, createImageData, splitUrls } from "js/functions";

import { isNoHintsFoundVisible, getAllHints } from "../hintsReducer";
import { getAllImages } from "../imagesReducer";
import { getIdForModal } from "../modalReducer";
import { ImageData, Images } from "types";

const sortHints = (ary: string[]) => {
    const localeSort = Array.from(ary).sort((a, b) => {
        return a.localeCompare(b, "en", { sensitivity: "base" });
    });
    return localeSort;
};

const createModalData = (images: ImageData[], id: string) => {
    const image = images.find(item => item.id === id);

    return {
        location: image?.location?.city
            ? image.location.city + ", " + (image.location.country ? image.location.country : "")
            : "",
        author: image?.user.name || image?.user.last_name || image?.user.first_name || "",
        twitter: image?.user.twitter_username || "",
        profileImage: image?.user.profile_image.small || "",
        urls: image?.urls ? splitUrls(image.urls) : "",
    };
};

const createNextModalId = (ary: Images, id: string | null) => {
    const index = ary.findIndex(item => item.id === id);
    const result = ary[index + 1] !== undefined ? ary[index + 1].id : null;
    return result;
};

const createPreviousModalId = (ary: Images, id: string) => {
    const index = ary.findIndex(item => item.id === id);
    const result = ary[index + -1] !== undefined ? ary[index - 1].id : null;
    return result;
};

const selectSortedHints = createSelector(getAllHints, sortHints);

const selectSelectOptions = createSelector(selectSortedHints, createOptions);

const selectAllImages = createSelector(getAllImages, createImageData);

const selectDataForModal = createSelector(getAllImages, getIdForModal, createModalData);

const selectNextModalId = createSelector(getAllImages, getIdForModal, createNextModalId);

const selectPreviousModalId = createSelector(getAllImages, getIdForModal, createPreviousModalId);
export {
    selectSelectOptions,
    selectSortedHints,
    isNoHintsFoundVisible,
    selectAllImages,
    selectDataForModal,
    selectNextModalId,
    selectPreviousModalId,
};
