import * as React from "react";

import { debounce } from "lodash";
import { useSelector } from "react-redux";

import useDispatchAction from "hooks/useDispatchAction";
import Icons from "assets/icons";

import { selectNextModalId } from "reduxware/redux/selectors";

const NextImage = () => {
    const nextId = useSelector(selectNextModalId);
    const { setImageIdForModal } = useDispatchAction();

    const handleClickNext = React.useCallback(
        debounce(() => {
            nextId && setImageIdForModal(nextId);
        }, 100),
        [nextId]
    );
    return (
        <aside className="modal-content__aside right" onClick={handleClickNext} aria-label="next image">
            <button className="modal-content__arrow-button" disabled={!nextId}>
                <Icons.Next className={nextId ? "modal-content__arrow-svg visible" : "modal-content__arrow-svg"} />
            </button>
        </aside>
    );
};

export default NextImage;
