import React, { useCallback, useRef } from "react";
import handleViewport from "react-in-viewport";
import uuid from "react-uuid";

import { isEmpty, debounce, after } from "lodash";
import { connect, useSelector } from "react-redux";

import Image from "./Image";
import Subject from "./Subject";
import BottomControl from "./BottomControl";

import { fetchImages } from "reduxware/redux/thunks";
import { AppDispatch, FetchImages, RootState } from "types";
import { selectAllImages } from "reduxware/redux/selectors";
import { ImagesContentWrapper, Loading } from "../styled";
import useMessage, { ShowMessage } from "hooks/useMessage";
import { DEBOUNCE_DELAY } from "config";

const ViewportBottomMarker = handleViewport(BottomControl);

interface Props {
    fetchImages: FetchImages;
    subject: string;
}

const Images = (props: Props) => {
    const { fetchImages, subject } = props;
    const images = useSelector(selectAllImages);
    const showMessage = useMessage();

    const refContainer = useRef<HTMLDivElement>(null);
    const loadingRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getMoreImages = useCallback(
        debounce(() => {
            fetchImages(subject, showMessage);
        }, DEBOUNCE_DELAY),
        [fetchImages, subject]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadHandler = useCallback(
        after(images.length, () => {
            refContainer.current?.classList.add("active");
            loadingRef.current?.classList.add("hidden");
        }),
        [images]
    );

    if (!images || isEmpty(images)) return null;

    return (
        <>
            <Subject />
            <ImagesContentWrapper>
                <Loading ref={loadingRef}>Loading images</Loading>
                <article className="images" ref={refContainer} aria-label="images">
                    {images.map(image => (
                        <Image key={uuid()} {...image} loadHandler={loadHandler} />
                    ))}
                    <ViewportBottomMarker onEnterViewport={getMoreImages} />
                </article>
            </ImagesContentWrapper>
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    subject: state.images.subject,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string, showMessage: ShowMessage) => dispatch(fetchImages(str, showMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
