import * as React from "react";
import debounce from "lodash/debounce";

import { connect, useSelector } from "react-redux";
import { useCallback } from "react";

import { AppDispatch, FetchImages } from "types";
import { fetchImages } from "reduxware/redux/thunks";
import { selectIsOnline } from "reduxware/redux/selectors";
import useMessage, { ShowMessage } from "hooks/useMessage";

interface Props {
    hint: string;
    fetchImages: FetchImages;
}

const Hint = (props: Props) => {
    const { hint, fetchImages } = props;
    const isOnline = useSelector(selectIsOnline);
    const showMessage = useMessage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const hendleClick = useCallback(
        debounce(() => {
            fetchImages(hint, showMessage);
        }, 200),
        [hint]
    );

    if (!hint) return null;
    return (
        <button disabled={!isOnline} className="hint" onClick={hendleClick} tabIndex={0}>
            {hint}
        </button>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string, showMessage: ShowMessage) => dispatch(fetchImages(str, showMessage)),
});

export default connect(null, mapDispatchToProps)(Hint);
