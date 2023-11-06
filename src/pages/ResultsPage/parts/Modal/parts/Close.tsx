import * as React from "react";

import Icons from "assets/icons";

import { useDispatchAction } from "hooks";

const Close = () => {
    const initialFocus = React.useRef<HTMLButtonElement>(null);
    const { hideModal } = useDispatchAction();
    const handleClick = React.useCallback(() => hideModal(), [hideModal]);

    React.useEffect(() => {
        initialFocus.current?.focus();
    });

    return (
        <button id="Close" aria-label="Close" className="modal-content__close" type="button" onClick={handleClick}>
            <Icons.Close />
        </button>
    );
};

export default Close;
