import * as React from "react";

import { useLocation } from "react-router";

const messageText = "Nie znaleziono podpowiedzi dla wprowadzonego tekstu";

const NoHints = () => {
    const location = useLocation();
    const path = location.pathname;
    const cls = path === "/images" ? "noHints--short search-text--dark" : "noHints search-text--dark";

    return <p className={cls}>{messageText}</p>;
};

export default NoHints;
