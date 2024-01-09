import { ImageData } from "types";

export const createTags = (ary: ImageData[]) => [
    ...new Set(
        ary
            .map(item => item.tags)
            .flat()
            .map(item => item.title)
    ),
];

export default createTags;
