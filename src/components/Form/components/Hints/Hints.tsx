import * as React from "react";
import uuid from "react-uuid";

import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import Hint from "./Hint";

import { HintsContainer } from "./styled";
import { selectSortedHints } from "reduxware/redux/selectors";

const Hints = () => {
    const hints = useSelector(selectSortedHints);
    const path = useLocation().pathname;

    return hints?.length && path ? (
        <HintsContainer id="images-hints-wrapper">
            {hints.map(hint => (
                <Hint key={uuid()} hint={hint} />
            ))}
        </HintsContainer>
    ) : null;
};

export default Hints;
