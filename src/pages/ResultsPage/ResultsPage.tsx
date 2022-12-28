import React, { useEffect } from "react";
import debounce from "lodash/debounce";

import { connect } from "react-redux";

import MyModal from "./parts/Modal/Modal";
import Form from "components/Form/Form";
import Container from "./parts/ResultsPageContainer";
import ErrorMessage from "components/ErrorMessage";
import ImagesSection from "./parts/ImagesSection/ImagesSection";

import { fetchDetails, fetchImages } from "reduxware/redux/thunks";
import { withFormContainer } from "HOCs";
import { AppDispatch } from "types";

const WrappedForm = withFormContainer(Form);

interface Props {fetchImages:Function; fetchDetails:Function}
const ResultsPage = (props:Props) => {
  const { fetchImages, fetchDetails } = props;

const clickHandler = debounce(e => {
        const id = e?.target?.dataset?.image_hint;
        if (id) {
          fetchImages(id);
        }
      }, 200)

  useEffect(() => {
    window.addEventListener(
      "click" as keyof DedicatedWorkerGlobalScopeEventMap,
      clickHandler,
      [fetchImages] as AddEventListenerOptions
    );

    return () => {
      window.removeEventListener(
        "click"as keyof DedicatedWorkerGlobalScopeEventMap,
        clickHandler,
        [fetchImages] as AddEventListenerOptions
      );
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

const mapDispatchToProps = (dispatch:AppDispatch) => ({
  fetchImages: (str:string) => dispatch(fetchImages(str)),
  fetchDetails: (str:string) => dispatch(fetchDetails(str)),
});

export default connect(null, mapDispatchToProps)(ResultsPage);
