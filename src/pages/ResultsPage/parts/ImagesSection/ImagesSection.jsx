import { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import debounce from "lodash/debounce";
import handleViewport from "react-in-viewport";
import PropTypes from "prop-types";
import uuid from "react-uuid";

import Image from "../Image";
import Subject from "./Subject";
import Block from "./PageBottomControl";
import ImagesContainer from "./ImagesContainer";

import { fetchImages } from "reduxware/redux/thunks";
import { fetchDetails } from "reduxware/redux/thunks";

const ViewportBlock = handleViewport(Block);

const ImagesSection = props => {
  const { images, fetchDetails, fetchImages, subject } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScrollBottom = useCallback(
    debounce(() => {
      fetchImages(subject);
    }, 300),
    [fetchImages, subject]
  );

  useEffect(() => {
    window.addEventListener(
      "click",
      debounce(e => {
        const id = e?.target?.dataset?.id;
        if (id) {
          fetchDetails(id);
        }
      }, 300),
      [fetchDetails]
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

const mapStateToProps = state => ({
  images: state.images.images,
  subject: state.images.subject,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: str => dispatch(fetchImages(str)),
  fetchDetails: str => dispatch(fetchDetails(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);

ImagesSection.propTypes = {
  fetchImages: PropTypes.func,
  fetchDetails: PropTypes.func,
  images: PropTypes.array,
  subject: PropTypes.string,
};
