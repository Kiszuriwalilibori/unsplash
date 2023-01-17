import * as React from "react";

import { shallowEqual} from "react-redux";
import { useLocation } from "react-router";
import { useTypedSelector } from "hooks/useTypedSelector";
import { isNoHintsFoundVisible } from "reduxware/redux/selectors";


const messageText = "Nie znaleziono podpowiedzi dla wprowadzonego tekstu";

const NoHintsMessage = () => {
    const isVisible = useTypedSelector(isNoHintsFoundVisible, shallowEqual);
    const location = useLocation();

    if (!isVisible) return null;
    
    const path = location.pathname;
    const cls = path === "/images" ? "noHints--short search-text--dark" : "noHints search-text--dark";

    return <p className={cls}>{messageText}</p>;
};

export default NoHintsMessage;
