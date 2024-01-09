import { createSelector } from "@reduxjs/toolkit";
import { createOptions, createImageData, createUrls } from "functions";

import { isNoHintsFoundVisible, getAllHints } from "../../reducers/hintsReducer";
import { getAllImages } from "../../reducers/imagesReducer";
import { getIdForModal } from "../../reducers/modalReducer";
import { HintsState, ImagesState } from "types";
import { selectIsOnline } from "reduxware/reducers/onlineReducer";

const sortHints = (ary: HintsState["hints"]) => {
    const localeSort = Array.from(ary).sort((a, b) => {
        return a.localeCompare(b, "en", { sensitivity: "base" });
    });
    return localeSort;
};

const createModalData = (images: ImagesState["imgs"], id: string) => {
    const image = images.find(item => item.id === id);
    return {
        location: image?.location?.city
            ? image.location.city + ", " + (image.location.country ? image.location.country : "")
            : image?.user?.location
            ? image?.user?.location
            : "",
        author: image?.user.name || image?.user.last_name || image?.user.first_name || "",
        twitter: image?.user.twitter_username || "",
        profileImage: image?.user.profile_image.small || "",
        urls: image?.urls ? createUrls(image.urls) : "",
    };
};

const createNextModalId = (ary: ImagesState["imgs"], id: string | null) => {
    const index = ary.findIndex(item => item.id === id);
    const result = ary[index + 1] !== undefined ? ary[index + 1].id : null;
    return result;
};

const createPreviousModalId = (ary: ImagesState["imgs"], id: string) => {
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
    selectAllImages,
    selectDataForModal,
    selectNextModalId,
    selectPreviousModalId,
    isNoHintsFoundVisible,
    selectIsOnline,
};
