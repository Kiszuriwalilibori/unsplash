import * as React from "react";

import { debounce } from "lodash";
import { connect } from "react-redux";

import { fetchDetails } from "reduxware/redux/thunks";
import { AppDispatch } from "types";

interface Props {
    next: string;
    fetchDetails: Function;
}

const NextImage = (props: Props) => {
    const { next, fetchDetails } = props;
    const showModal = React.useCallback(
        debounce(() => {
            fetchDetails(next);
        }, 100),
        [next]
    );
    return (
        <aside className="modalbody__aside right" onClick={showModal}>
            <div className="modalbody__arrow-box">
                <svg viewBox="0 0 32 32" className={next ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"}>
                    <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
                </svg>
            </div>
        </aside>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchDetails: (str: string) => dispatch(fetchDetails(str)),
});

export default connect(null, mapDispatchToProps)(NextImage);
