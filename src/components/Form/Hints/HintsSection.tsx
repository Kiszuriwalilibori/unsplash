import * as React from "react";
import uuid from "react-uuid";

import Hint from "./Hint";
import { Hints } from "./model";
import { useLocation } from "react-router";

interface Props {
    hints: Hints;
}
const HintsSection = (props: Props) => {
    const { hints } = props;
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
