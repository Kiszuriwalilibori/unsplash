import React, { useEffect } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import { connect } from "react-redux";


import MyModal from "./parts/Modal/Modal";
import Form from "components/Form/Form";
import Container from "./parts/ResultsPageContainer";
import ErrorMessage from "components/ErrorMessage";
import ImagesSection from "./parts/ImagesSection/ImagesSection";

import { fetchDetails, fetchImages } from "reduxware/redux/thunks";
import { withFormContainer } from "HOCs";

const WrappedForm = withFormContainer(Form);

const ResultsPage = props => {
  const { fetchImages, fetchDetails } = props;

  useEffect(() => {
    window.addEventListener(
      "click",
      debounce(e => {
        const id = e?.target?.dataset?.image_hint;
        if (id) {
          fetchImages(id);
        }
      }, 200),
      [fetchImages]
    );

    return () => {
      window.removeEventListener(
        "click",
        debounce(e => {
          const id = e?.target?.dataset?.id;
          if (id) {
            fetchImages(id);
          }
        }, 300),
        [fetchImages]
      );
    };
  }, [fetchDetails, fetchImages]);

  return (
    <Container>
      <ErrorMessage />
      <WrappedForm />
      <MyModal />
      <ImagesSection />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchImages: str => dispatch(fetchImages(str)),
  fetchDetails: str => dispatch(fetchDetails(str)),
});

export default connect(null, mapDispatchToProps)(ResultsPage);

ResultsPage.propTypes = { fetchImages: PropTypes.func, fetchDetails: PropTypes.func };
