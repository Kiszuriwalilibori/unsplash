import * as React from "react";

import { debounce } from "lodash";
import { connect } from "react-redux";

import { fetchDetails } from "reduxware/redux/thunks";
import { AppDispatch } from "types";
interface Props {
    previous: string;
    fetchDetails: Function;
}

const PreviousImage = (props: Props) => {
    const { previous, fetchDetails } = props;

    const showModal = React.useCallback(
        debounce(() => {
            fetchDetails(previous);
        }, 100),
        [previous]
    );
    return (
        <aside className="modalbody__aside left" onClick={showModal}>
            <div className="modalbody__arrow-box">
                <svg viewBox="0 0 32 32" className={previous ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"}>
                    <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path>
                </svg>
            </div>
        </aside>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchDetails: (str: string) => dispatch(fetchDetails(str)),
});
export default connect(null, mapDispatchToProps)(PreviousImage);
