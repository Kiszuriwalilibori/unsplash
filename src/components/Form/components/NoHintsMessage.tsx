import * as React from "react";

interface Props {
    text: string;
    isMainPage: boolean;
}
const NoHintsMessage = (props: Props) => {
    const { text, isMainPage } = props;

    return (
        <p className={isMainPage ? "no-hints-message search-text--dark" : "no-hints-message--short search-text--dark"}>
            {text}
        </p>
    );
};

export default NoHintsMessage;
