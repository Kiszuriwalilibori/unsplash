import * as React from "react";
import debounce from "lodash/debounce";
import { connect } from "react-redux";

import { AppDispatch } from "types";
import { fetchImages } from "reduxware/redux/thunks";
interface Props {
    hint: string;
    fetchImages: Function;
}

const Hint = (props: Props) => {
    const { hint, fetchImages } = props;

    const clickHandler = debounce(() => {
        fetchImages(hint);
    }, 200);

    if (!hint) return null;
    return (
        <button className="images-hint" onClick={clickHandler} tabIndex={0}>
            {hint}
        </button>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string) => dispatch(fetchImages(str)),
});

export default connect(null, mapDispatchToProps)(Hint);
