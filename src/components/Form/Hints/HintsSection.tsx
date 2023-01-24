import * as React from "react";
import uuid from "react-uuid";

import Hint from "./Hint";
import { useLocation } from "react-router";
import { selectSortedHints } from "reduxware/redux/selectors";
import { useSelector } from "react-redux";

const HintsSection = () => {
    const hints = useSelector(selectSortedHints);
    const path = useLocation().pathname;

    return hints?.length && path ? (
        <section className="images-hints-wrapper" id="images-hints-wrapper">
            {hints.map(hint => (
                <Hint key={uuid()} hint={hint} />
            ))}
        </section>
    ) : null;
};

export default HintsSection;
