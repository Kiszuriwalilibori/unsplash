import * as React from "react";

import { useNavigate } from "react-router";
import { connect, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

import Icons from "assets/icons";
import PATHS from "routes";

import { Hints, NoHintsMessage, Select } from "./components";
import { clearHints } from "reduxware/redux";
import { isNoHintsFoundVisible } from "reduxware/redux/selectors";
import { AppDispatch, FetchHints, FetchImages } from "types";
import { fetchImages, fetchHints } from "reduxware/redux/thunks";
import { useIsMainPage, useIsResultsPage, useTypedSelector } from "hooks";
import { BasicButton } from "components";
import useMessage, { ShowMessage } from "hooks/useMessage";

interface Props {
    fetchHints: FetchHints;
    fetchImages: FetchImages;
    clearHints: () => void;
}

const SearchForm = (props: Props) => {
    const { fetchHints, fetchImages, clearHints } = props;
    const navigate = useNavigate();
    const isMainPage = useIsMainPage();
    const isResultsPage = useIsResultsPage();
    const isNoHintsMessageVisible = useTypedSelector(isNoHintsFoundVisible, shallowEqual);
    const showMessage = useMessage();

    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const pattern = getValues().pattern;
            pattern.length && fetchImages(pattern, showMessage);
            if (isMainPage) navigate(PATHS.RESULTS);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isMainPage]
    );

    const handleClickReset = React.useCallback(() => {
        reset();
        clearHints();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { register, getValues, reset } = useForm();

    const formClassName = useMemo(() => (isMainPage ? "form form--search" : "form form--images"), [isMainPage]);

    return (
        <>
            <form className={formClassName} onSubmit={handleSubmit}>
                <BasicButton className="form__button--search" aria-label="Search" type="submit">
                    <Icons.Search />
                </BasicButton>
                <input
                    className="form__input"
                    {...register("pattern")}
                    id="unsplash_form_input"
                    aria-label="Search free high-resolution photos"
                    type="text"
                    defaultValue=""
                    onChange={e => {
                        register("pattern").onChange(e);
                        fetchHints(getValues().pattern);
                    }}
                    autoCapitalize="none"
                    placeholder="Search free high-resolution photos"
                />
                <BasicButton
                    isVisible={true}
                    className="form__button--reset"
                    type="reset"
                    aria-label="Clear form"
                    onClick={handleClickReset}
                >
                    <Icons.Reset />
                </BasicButton>
            </form>

            {isMainPage && <Select getValues={getValues} fetchImages={fetchImages} />}
            {isResultsPage && <Hints />}
            {isNoHintsMessageVisible && (
                <NoHintsMessage isMainPage={isMainPage} text={"Nie znaleziono podpowiedzi dla wprowadzonego tekstu"} />
            )}
        </>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchHints: (str: string) => dispatch(fetchHints(str)),
    fetchImages: (str: string, showMessage: ShowMessage) => dispatch(fetchImages(str, showMessage)),
    clearHints: () => dispatch(clearHints()),
});

const Form = connect(null, mapDispatchToProps)(SearchForm);
export default Form;
