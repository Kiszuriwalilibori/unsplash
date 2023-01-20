import * as React from "react";

import { shallowEqual} from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { isNoHintsFoundVisible } from "reduxware/redux/selectors";
import { useIsMainPage } from "hooks";


const messageText = "Nie znaleziono podpowiedzi dla wprowadzonego tekstu";

const NoHintsMessage = () => {
    const isVisible = useTypedSelector(isNoHintsFoundVisible, shallowEqual);
    const isMainPage = useIsMainPage();

    if (!isVisible) return null;
    
    return <p className={isMainPage? "noHints search-text--dark": "noHints--short search-text--dark" }>{messageText}</p>;
};

export default NoHintsMessage;
