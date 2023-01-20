import React, { useCallback, useRef } from "react";
import handleViewport from "react-in-viewport";
import uuid from "react-uuid";

import { isEmpty, debounce } from "lodash";
import { connect } from "react-redux";

import Image from "../Image";
import Subject from "./Subject";
import Block from "./PageBottomControl";

import { fetchImages } from "reduxware/redux/thunks";
import { AppDispatch, RootStateType } from "types";

const ViewportBlock = handleViewport(Block);

interface Props {
    images: any[];
    fetchImages: Function;
    subject: string;
}

const ImagesSection = (props: Props) => {
    const { images, fetchImages, subject } = props;
    const refContainer = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScrollBottom = useCallback(
        debounce(() => {
            fetchImages(subject);
        }, 300),
        [fetchImages, subject]
    );
    if (!images || isEmpty(images)) return null;

    return (
        <>
            <Subject />
            <section className="fotos__wrapper" ref={refContainer}>
                <div className="fotos__grid">
                    <article className="fotos__container" id="fotos__container">
                        {images.map(item => (
                            <Image key={uuid()} prop={item} />
                        ))}
                        <ViewportBlock onEnterViewport={() => handleScrollBottom()} />
                    </article>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    images: state.images.images,
    subject: state.images.subject,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string) => dispatch(fetchImages(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);
