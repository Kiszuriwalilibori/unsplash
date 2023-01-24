function capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

export const createOptions = (ary: string[]) =>
    ary.map(item => {
        return { value: item, label: capitalizeFirstLetter(item) };
    });

export default createOptions;
