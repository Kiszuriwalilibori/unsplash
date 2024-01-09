import * as React from "react";
import Icons from "assets/icons";

const Info = React.memo(() => {
    return (
        <div className="modal-content__button-wrapper">
            <button className="modal-content__button" aria-label="Inforamtions">
                <Icons.Info />
                <span>Info</span>
            </button>
        </div>
    );
});
export default Info;
