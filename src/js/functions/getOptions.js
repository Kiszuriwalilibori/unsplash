function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export const getOptions = ary =>
  ary.map(item => {
    return { value: item, label: capitalizeFirstLetter(item) };
  });

export default getOptions;
