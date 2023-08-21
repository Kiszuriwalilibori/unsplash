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
    const showModal = React.useCallback(
        debounce(() => {
            Id && setImageIdForModal(Id);
        }, 100),
        [Id]
    );
    return (
        <aside className="modalbody__aside left" onClick={showModal}>
            <div className="modalbody__arrow-box">
                <Icons.Previous className={Id ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"} />
            </div>
        </aside>
    );
};

export default PreviousImage;
