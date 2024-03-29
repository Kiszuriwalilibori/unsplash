import { createUrls } from "functions";
import { Images } from "types";

const createImageData = (ary: Images) => {
    let result = ary.map(item => ({
        id: item.id,
        urls: createUrls(item.urls),
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
