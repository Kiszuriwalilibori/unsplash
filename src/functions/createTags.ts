import { Images } from "types";

export const createTags = (ary: Images) => [
    ...new Set(
        ary
            .map(item => item.tags)
            .flat()
            .map(item => item.title)
    ),
];

export default createTags;
