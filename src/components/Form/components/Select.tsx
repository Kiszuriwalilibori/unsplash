import * as React from "react";
import { default as RawSelect } from "react-select";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import PATHS from "routes";

import { selectSelectOptions } from "reduxware/redux/selectors";
import { FetchImages } from "types";

import { selectStyles } from "./styled";
import useMessage from "hooks/useMessage";

interface Props {
    getValues: any;
    fetchImages: FetchImages;
}

const Select = (props: Props) => {
    const { getValues, fetchImages } = props;
    const options = useSelector(selectSelectOptions);
    const navigate = useNavigate();
    const showMessage = useMessage();

    if (!options.length) return null;

    return (
        <RawSelect
            styles={selectStyles}
            id="Select-Section-Unsplash"
            aria-label="select hint"
            value={getValues}
            isClearable={true}
            menuIsOpen={true}
            onChange={selectValue => {
                fetchImages(selectValue.value, showMessage);
                navigate(PATHS.RESULTS);
            }}
            options={options}
        />
    );
};

export default Select;
