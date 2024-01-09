import * as React from "react";

import { debounce } from "lodash";
import { useSelector } from "react-redux";

import useDispatchAction from "hooks/useDispatchAction";
import Icons from "assets/icons";

import { selectPreviousModalId } from "reduxware/redux/selectors";

const PreviousImage = () => {
    const Id = useSelector(selectPreviousModalId);

    const { setImageIdForModal } = useDispatchAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = React.useCallback(
        debounce(() => {
            Id && setImageIdForModal(Id);
        }, 100),
        [Id]
    );
    return (
        <aside className="modal-content__aside left" onClick={handleClick} aria-label="previous image">
            <button className="modal-content__arrow-button" disabled={!Id}>
                <Icons.Previous className={Id ? "modal-content__arrow-svg visible" : "modal-content__arrow-svg"} />
            </button>
        </aside>
    );
};

export default PreviousImage;
