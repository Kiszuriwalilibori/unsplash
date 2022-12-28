import * as React from "react";
import debounce from "lodash/debounce";

import { useNavigate, useLocation } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import BasicButton from "./BasicButton";
import Icons from "icons";
import NoHintsMessage from "./NoHintsMessage";
import HintsSection from "./Hints/HintsSection";
import SelectSection from "./SelectSection";

import { clearHints } from "reduxware/redux/imagesReducer";
import { RootStateType, AppDispatch, Hints } from "types";
import { fetchImages, fetchHints } from "reduxware/redux/thunks";
import { getFormStyle } from "js/functions";

function getHovered(node: HTMLElement | null) {
    if (!node) return null;
    const elements = node.querySelectorAll(":hover");
    if (!elements) return null;
    const arr = Array.from(elements);
    return arr[arr.length - 1];
}

interface Props  {
    fetchHints: Function;
    fetchImages: Function
    clearHints: Function,
    hints: Hints,
};

const Form = (props:Props) => {
    const { fetchHints, hints, clearHints, fetchImages} = props;
    const history = useNavigate();
    const location = useLocation();
    //const refSelect = React.useRef();
    const path = location.pathname;
    const foo = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        return false;
    };

    function getImages(e: { key: string; }) {
        if (e.key === "Enter") {
            const withHover = getHovered(document.getElementById("Select-Section-Unsplash"));
            //const withHover = getHovered(refSelect.current);
            
            if (withHover) {
                const className = withHover.className;
                if (className.includes("option")) {
                    fetchImages(withHover.textContent);
                    history("./images");
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

    React.useEffect(() => {
        path === "/" && clearHints();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { register, getValues, reset } = useForm();

    return (
        <div onKeyDown={debouncedGetImages}>
            <form className={getFormStyle(path, "form")} onSubmit={foo}>
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
                    isVisible={Boolean(getValues().pattern || "")}
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
            <SelectSection hints={hints} getValues={getValues} fetchImages={fetchImages} /*ref={refSelect}*/ />
            <HintsSection hints={hints} />
            <NoHintsMessage />
        </div>
    );
};

const mapDispatchToProps = (dispatch:AppDispatch) => ({
    fetchHints: (str:string) => dispatch(fetchHints(str)),
    clearHints: () => dispatch(clearHints()),
    fetchImages: (str:string) => dispatch(fetchImages(str)),
});

const mapStateToProps = (state:RootStateType) => ({
    hints: state.images.hints,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

/**
 * todo hints powinno być z kontekstu jest czy nie ma bo inaczej mryga
 * */


//export const getDraw = (state: { draw: { minifigs: Minifigs } }) => state.draw.minifigs;
//export const getRunningStatus = (state: { running: { isRunning: boolean } }) => state.running.isRunning;