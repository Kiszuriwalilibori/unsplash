export const getTags = ary => [
  ...new Set(
    ary
      .map(item => item.tags)
      .flat()
      .map(item => item.title)
  ),
];

export default getTags;
