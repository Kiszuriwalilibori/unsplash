export const getFormStyle = (str: boolean, baseClass: string) => {
    switch (str) {
        case true:
            return `${baseClass} form--search`;

        case false:
            return `${baseClass} form--images`;

        default:
            return `${baseClass} form--search`;
    }
};

export default getFormStyle;
