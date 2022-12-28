/* eslint-disable no-useless-concat */
interface Obj {
  thumb: string;
  small: string;
  regular: string;
}

export const splitUrls = (obj: Obj) => {
  const thumb = obj.thumb ? obj.thumb + " " + "200w" + ", " : "";
  const small = obj.small ? obj.small + " " + "400w" + ", " : "";
  const regular = obj.regular ? obj.regular + " " + "1080w" + ", " : "";
  return thumb + small + regular;
};

export default splitUrls;
