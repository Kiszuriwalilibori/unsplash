import React, { useCallback, useRef } from "react";
import handleViewport from "react-in-viewport";
import uuid from "react-uuid";

import { isEmpty, debounce, after } from "lodash";
import { connect, useSelector } from "react-redux";

import Image from "../Image";
import Subject from "./Subject";
import Block from "./PageBottomControl";

import { fetchImages } from "reduxware/redux/thunks";
import { AppDispatch, RootStateType } from "types";
import { selectAllImages } from "reduxware/redux/selectors";

const ViewportBlock = handleViewport(Block);

interface Props {
    fetchImages: Function;
    subject: string;
}

const ImagesSection = (props: Props) => {
    const { fetchImages, subject } = props;
    const images = useSelector(selectAllImages) as any[];

    const refContainer = useRef<HTMLDivElement>(null);
    const loadingRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScrollBottom = useCallback(
        debounce(() => {
            fetchImages(subject);
        }, 300),
        [fetchImages, subject]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadHandler = useCallback(
        after(images.length, () => {
            refContainer.current?.classList.add("active");
            loadingRef.current?.classList.remove("active");
        }),
        [images]
    );

    if (!images || isEmpty(images)) return null;

    return (
        <>
            <Subject />
            <section className="fotos__wrapper">
                <div className="fotos__loading active" ref={loadingRef}>
                    Loading images
                </div>
                <div className="fotos__grid">
                    <article className="fotos__container" id="fotos__container" ref={refContainer}>
                        {images.map(image => (
                            <Image key={uuid()} {...image} loadHandler={loadHandler} />
                        ))}
                        <ViewportBlock onEnterViewport={() => handleScrollBottom()} />
                    </article>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    subject: state.images.subject,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string) => dispatch(fetchImages(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);
