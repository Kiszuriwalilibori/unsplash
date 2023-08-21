import * as React from "react";
import Select, { SingleValue } from "react-select";

import { useNavigate } from "react-router";
import { connect, useSelector } from "react-redux";

import Paths from "routes";

import { selectSelectOptions } from "reduxware/redux/selectors";
import { AppDispatch, FetchImages } from "types";
import { fetchHints } from "reduxware/redux/thunks";
import { FieldValues, UseFormGetValues } from "react-hook-form";

interface Props {
    getValues: any;
    fetchImages: FetchImages;
}

const SelectSection = (props: Props) => {
    const { getValues, fetchImages } = props;
    const options = useSelector(selectSelectOptions);
    const navigate = useNavigate();

    if (!options.length) return null;

    return (
        <Select
            className="select-top"
            id="Select-Section-Unsplash"
            value={getValues}
            isClearable={true}
            menuIsOpen={true}
            onChange={selectValue => {
                fetchImages(selectValue.value);
                navigate(Paths.images);
            }}
            options={options}
        />
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchHints: (str: string) => dispatch(fetchHints(str)),
});
export default connect(null, mapDispatchToProps)(SelectSection);
