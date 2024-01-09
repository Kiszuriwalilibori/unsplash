import React from "react";

import MyModal from "./parts/ImageModal";
import Images from "./parts/Images";

import { ResultsPageContainer, ResultsPageFormContainer } from "./styled";
import { ErrorMessage, Form } from "components";
import { useClearOnMount } from "hooks";

const ResultsPage = () => {
    useClearOnMount();
    return (
        <ResultsPageContainer>
            <ErrorMessage />
            <ResultsPageFormContainer>
                <Form />
            </ResultsPageFormContainer>
            <MyModal />
            <Images />
        </ResultsPageContainer>
    );
};

export default ResultsPage;
