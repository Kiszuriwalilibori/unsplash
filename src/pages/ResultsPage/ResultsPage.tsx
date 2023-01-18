import React  from "react";

import MyModal from "./parts/Modal/Modal";
import Form from "components/Form/Form";
import Container from "./parts/ResultsPageContainer";
import ErrorMessage from "components/ErrorMessage";
import ImagesSection from "./parts/ImagesSection/ImagesSection";

import { withFormContainer } from "HOCs";


const WrappedForm = withFormContainer(Form);

const ResultsPage = () => {
  
  return (
    <Container>
      <ErrorMessage />
      <WrappedForm />
      <MyModal />
      <ImagesSection />
    </Container>
  );
};

export default ResultsPage;