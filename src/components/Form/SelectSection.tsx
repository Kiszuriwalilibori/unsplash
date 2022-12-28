import * as React from "react";
import Select from "react-select";
import { Hints } from "./Hints/model";
import { useNavigate, useLocation } from "react-router";

interface Props {
    hints: Hints;
    getValues: any;
    fetchImages: Function;
}

const SelectSection = (props: Props) => {
    const { hints, getValues, fetchImages } = props;
    const history = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return hints?.length && path === "/" ? (
        <Select
            className="select-top"
            id="Select-Section-Unsplash"
            value={getValues}
            isClearable={true}
            menuIsOpen={true}
            onChange={selectValue => {
                fetchImages(selectValue.value);
                history("./images");
            }}
            options={hints}
        />
    ) : null;
};

export default SelectSection;
