import { Hints } from "types/index";

function capitalizeFirstLetter(str: string) {
    return str ? str[0].toUpperCase() + str.slice(1) : str;
}

export const createOptions = (ary: Hints) =>
    ary.map(item => {
        return { value: item, label: capitalizeFirstLetter(item) };
    });

export default createOptions;
