import * as React from "react";

import Icons from "assets/icons";

import { useDispatchAction, useInitialFocus } from "hooks";

const Close = () => {
    const initialFocus = useInitialFocus<HTMLButtonElement>();
    const { hideModal } = useDispatchAction();
    const handleClick = React.useCallback(() => hideModal(), [hideModal]);

    return (
        <button
            ref={initialFocus}
            id="Close"
            aria-label="Close"
            className="modal-content__close"
            type="button"
            onClick={handleClick}
        >
            <Icons.Close />
        </button>
    );
};

export default Close;
