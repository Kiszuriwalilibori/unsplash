import * as React from "react";
import debounce from "lodash/debounce";

import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import BasicButton from "./BasicButton";
import Icons from "assets/icons";
import NoHintsMessage from "./NoHintsMessage";
import HintsSection from "./Hints/HintsSection";
import SelectSection from "./SelectSection";
import Paths from "routes";

import { clearHints } from "reduxware/redux/hintsReducer";
import { AppDispatch, FetchHints, FetchImages } from "types";
import { fetchImages, fetchHints } from "reduxware/redux/thunks";
import { getFormStyle } from "js/functions";
import { useIsMainPage } from "hooks";

function getHovered(node: HTMLElement | undefined) {
    if (!node) return null;
    const elements = node.querySelectorAll(":hover");
    if (!elements) return null;
    const arr = Array.from(elements);
    return arr[arr.length - 1];
}
interface Props {
    fetchHints: FetchHints;
    fetchImages: FetchImages;
    clearHints: () => void;
}

const Form = (props: Props) => {
    const { fetchHints, fetchImages, clearHints } = props;
    const navigate = useNavigate();
    const isMainPage = useIsMainPage();
    const refSelect = React.useRef();
    const foo = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        return false;
    };

    function getImages(e: { key: string }) {
        if (e.key === "Enter") {
            //const withHover = getHovered(document.getElementById("Select-Section-Unsplash"));
            const withHover = getHovered(refSelect.current);

            if (withHover) {
                const className = withHover.className;
                if (className.includes("option")) {
                    withHover.textContent && fetchImages(withHover.textContent);
                    navigate(Paths.images);
                }
            }
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedGetImages = React.useCallback(
        debounce(e => {
            getImages(e);
        }, 300),
        []
    );

    const { register, getValues, reset } = useForm();

    return (
        <div onKeyDown={debouncedGetImages}>
            <form className={getFormStyle(isMainPage, "form")} onSubmit={foo}>
                <BasicButton className="form__button" aria-label="Search">
                    <Icons.Search />
                </BasicButton>
                <input
                    {...register("pattern")}
                    type="text"
                    defaultValue=""
                    className="form__input"
                    onChange={e => {
                        register("pattern").onChange(e);
                        fetchHints(getValues().pattern);
                    }}
                    autoCapitalize="none"
                    placeholder="Search free high-resolution photos"
                />
                ;
                <BasicButton
                    isVisible={true}
                    className="form__input-clear"
                    type="reset"
                    onClick={e => {
                        reset();
                        clearHints();
                    }}
                >
                    <Icons.Reset />
                </BasicButton>
            </form>
            {isMainPage && <SelectSection getValues={getValues} fetchImages={fetchImages} />}
            {!isMainPage && <HintsSection />}
            <NoHintsMessage />
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchHints: (str: string) => dispatch(fetchHints(str)),
    fetchImages: (str: string) => dispatch(fetchImages(str)),
    clearHints: () => dispatch(clearHints()),
});

export default connect(null, mapDispatchToProps)(Form);
