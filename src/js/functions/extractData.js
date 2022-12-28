import { splitUrls } from "js/functions";

export const extractData = ary => {
  let res = ary.map(item => {
    let result = {};
    result.id = item.id;
    result.urls = splitUrls(item.urls);
    result.tags = item.tags;
    result.description = item.alt_description || item.description || "";
    result.user = item.user?.name || item.user.first_name + " " + item.user.last_name;
    result.modal = {
      name: item.user.name || item.first_name + " " + item.last_name || "",
      twitter: item.user.twitter_username || "",
    };
    return result;
  });
  return res;
};

export default extractData;
