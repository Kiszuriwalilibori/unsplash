import * as React from "react";

import { debounce } from "lodash";
import { useSelector } from "react-redux";

import useDispatchAction from "hooks/useDispatchAction";
import Icons from "assets/icons";

import { selectNextModalId } from "reduxware/redux/selectors";

const NextImage = () => {
    const nextId = useSelector(selectNextModalId);
    const { setImageIdForModal } = useDispatchAction();

    const showModal = React.useCallback(
        debounce(() => {
            nextId && setImageIdForModal(nextId);
        }, 100),
        [nextId]
    );
    return (
        <aside className="modalbody__aside right" onClick={showModal}>
            <div className="modalbody__arrow-box">
                <Icons.Next className={nextId ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"} />
            </div>
        </aside>
    );
};

export default NextImage;
