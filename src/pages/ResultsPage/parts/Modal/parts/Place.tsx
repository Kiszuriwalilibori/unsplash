import * as React from "react";

import Icons from "assets/icons";

interface Props {
    location: string;
}
const Place = (props: Props) => {
    const { location } = props;

    return (
        <div className="modal-content__location">
            {location && (
                <>
                    <Icons.Location />
                    <span>{location}</span>
                </>
            )}
        </div>
    );
};
export default Place;
