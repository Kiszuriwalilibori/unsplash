import { splitUrls } from "js/functions";
import { ImageData } from "types";

const createImageData = (ary: ImageData[]) => {
    let result = ary.map(item => ({
        id: item.id,
        urls: splitUrls(item.urls),
        tags: item.tags,
        description: item.alt_description || item.description || "",
        user: item.user?.name || item.user.first_name + " " + item.user.last_name,
        modal: {
            name: item.user.name || item.first_name + " " + item.last_name || "",
            twitter: item.user.twitter_username || "",
        },
    }));
    return result;
};

export default createImageData;
