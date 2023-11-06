import { ImageData } from "types/index";

/* eslint-disable no-useless-concat */

export const createUrls = (urls: ImageData["urls"]) => {
    const thumb = urls.thumb ? urls.thumb + " " + "200w" + ", " : "";
    const small = urls.small ? urls.small + " " + "400w" + ", " : "";
    const regular = urls.regular ? urls.regular + " " + "1080w" + ", " : "";
    return thumb + small + regular;
};

export default createUrls;
