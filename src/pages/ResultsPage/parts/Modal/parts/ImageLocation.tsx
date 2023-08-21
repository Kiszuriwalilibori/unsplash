import * as React from "react";

import LocationContainer from "./LocationContainer";
import Icons from "assets/icons";

import { withDescription } from "HOCs";

interface Props {
    location: string;
}
const ImageLocation = (props: Props) => {
    const { location } = props;

    return <LocationContainer>{location && withDescription(Icons.Location, location)}</LocationContainer>;
};
export default ImageLocation;
