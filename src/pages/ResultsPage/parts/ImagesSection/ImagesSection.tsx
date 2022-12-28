import React,{ useEffect, useCallback } from "react";
import { connect } from "react-redux";

import debounce from "lodash/debounce";
import handleViewport from "react-in-viewport";
import uuid from "react-uuid";

import Image from "../Image";
import Subject from "./Subject";
import Block from "./PageBottomControl";
import ImagesContainer from "./ImagesContainer";

import { fetchImages } from "reduxware/redux/thunks";
import { fetchDetails } from "reduxware/redux/thunks";
import { AppDispatch, RootStateType } from "types";

const ViewportBlock = handleViewport(Block);

interface Props{
  images: any[];
  fetchImages: Function;
  fetchDetails: Function;
  subject: string;
}

const ImagesSection = (props:Props) => {
  const { images, fetchDetails, fetchImages, subject } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScrollBottom = useCallback(
    debounce(() => {
      fetchImages(subject);
    }, 300),
    [fetchImages, subject]
  );

  const clickHandler = debounce(e => {
        const id = e?.target?.dataset?.id;
        if (id) {
          fetchDetails(id);
        }
      }, 300);

  useEffect(() => {
    window.addEventListener(
      "click" as keyof DedicatedWorkerGlobalScopeEventMap,
      clickHandler,
      [fetchDetails] as AddEventListenerOptions
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return images && images.length ? (
    <>
      <Subject />
      <ImagesContainer>
        {images.map(item => (
          <Image key={uuid()} prop={item} />
        ))}
        <ViewportBlock onEnterViewport={() => handleScrollBottom()} />
      </ImagesContainer>
    </>
  ) : null;
};

const mapStateToProps = (state: RootStateType) => ({
  images: state.images.images,
  subject: state.images.subject,
});

const mapDispatchToProps = (dispatch:AppDispatch) => ({
  fetchImages: (str:string) => dispatch(fetchImages(str)),
  fetchDetails: (str:string) => dispatch(fetchDetails(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);
