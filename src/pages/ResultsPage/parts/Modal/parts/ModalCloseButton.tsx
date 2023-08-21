import * as React from "react";
import { useDispatch } from "react-redux";
import Icons from "assets/icons";

const ModalCloseButton = () => {
    const dispatch = useDispatch();
    return (
        <div className="modal-close__wrapper">
            <button
                aria-label="Close"
                className="modal-close__button"
                type="button"
                onClick={() => dispatch({ type: "MODAL_HIDE" })}
            >
                <Icons.Close />
            </button>
        </div>
    );
};

export default ModalCloseButton;
