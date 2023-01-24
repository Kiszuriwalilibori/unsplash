export const getTags = (ary: { tags: { title: string }[] }[]) => [
    ...new Set(
        ary
            .map(item => item.tags)
            .flat()
            .map(item => item.title)
    ),
];

export default getTags;
