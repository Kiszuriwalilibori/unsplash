import * as React from "react";
import Icons from "assets/icons";

const Like = React.memo(() => {
    return (
        <div className="modal-content__button-wrapper">
            <button className="modal-content__button" aria-label="Like" id="Like">
                <Icons.Like />
            </button>
        </div>
    );
});
export default Like;
