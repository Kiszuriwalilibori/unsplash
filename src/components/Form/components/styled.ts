import { StylesConfig } from "react-select";

export const selectStyles: StylesConfig = {
    control: styles => ({ ...styles, display: "none" }),
    container: styles => ({ ...styles, marginTop: "6px" }),
    option: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? "#F5F5F5" : undefined,
        cursor: isFocused ? "pointer" : "default",
    }),
};
