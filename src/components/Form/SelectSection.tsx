import * as React from "react";
import Select from "react-select";

import { useNavigate } from "react-router";
import { connect, useSelector } from "react-redux";

import { getSortedPairs } from "reduxware/redux/selectors";
import { AppDispatch } from "types";
import { fetchHints } from "reduxware/redux/thunks";

interface Props {
    getValues: any;
    fetchImages: Function;
}

const SelectSection = (props: Props) => {
    const { getValues, fetchImages } = props;
    const hints = useSelector(getSortedPairs);
    const history = useNavigate();

    if (!hints.length) return null;

    return (
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
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchHints: (str: string) => dispatch(fetchHints(str)),
});
export default connect(null, mapDispatchToProps)(SelectSection);
