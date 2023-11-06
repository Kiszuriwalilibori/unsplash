import * as React from "react";
import Icons from "assets/icons";

const Share = React.memo(() => {
    return (
        <div className="modal-content__button-wrapper">
            <button className="modal-content__button" aria-label="Share">
                <Icons.Share />
                <span>Share</span>
            </button>
        </div>
    );
});
export default Share;
