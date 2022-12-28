import * as React from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import { useNavigate, useLocation } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import BasicButton from "./BasicButton";
import Icons from "icons";
import NoHintsMessage from "./NoHintsMessage";
import HintsSection from "./Hints/HintsSection";
import SelectSection from "./SelectSection";

import { clearHints } from "reduxware/redux/imagesReducer";

import { fetchImages, fetchHints } from "reduxware/redux/thunks";
import { getFormStyle } from "js/functions";

function getHovered(node) {
    if (!node) return null;
    const elements = node.querySelectorAll(":hover");
    if (!elements) return null;
    const arr = Array.from(elements);
    return arr[arr.length - 1];
}

const Form = props => {
    const { fetchHints, hints, clearHints, fetchImages, noHintsMessageVisible } = props;
    const history = useNavigate();
    const location = useLocation();
    //const refSelect = React.useRef();
    const path = location.pathname;
    const foo = e => {
        e.preventDefault();
        return false;
    };

    function getImages(e) {
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
            <HintsSection path={path} hints={hints} />
            {noHintsMessageVisible && <NoHintsMessage />}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchHints: str => dispatch(fetchHints(str)),
    clearHints: str => dispatch(clearHints(str)),
    fetchImages: str => dispatch(fetchImages(str)),
});

const mapStateToProps = state => ({
    hints: state.images.hints,
    noHintsMessageVisible: state.images.hintsMessageVisible,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
    fetchHints: PropTypes.func,
    fetchImages: PropTypes.func,
    clearHints: PropTypes.func,
    hints: PropTypes.array,
};

/**
 * todo hints powinno być z kontekstu jest czy nie ma bo inaczej mryga
 * */
