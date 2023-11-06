import * as React from "react";
import Icons from "assets/icons";

const Add = React.memo(() => {
    return (
        <div className="modal-content__button-wrapper">
            <button className="modal-content__button" aria-label="Add">
                <Icons.Add />
            </button>
        </div>
    );
});
export default Add;
