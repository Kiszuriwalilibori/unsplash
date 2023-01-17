import * as React from "react";

import Trending from "./parts/Trending";
import Header from "./parts/Header";
import Container from "./parts/SearchPage_Container";
import ErrorMessage from "components/ErrorMessage";
import Form from "components/Form/Form";

import { trending } from "js/fixtures";
import {useCheckApiKey} from "hooks";

const SearchPage = () => {

  const isKeyAvailable = useCheckApiKey();
  return (
    <Container>
      <Header />
      {isKeyAvailable && <Form />}
      {isKeyAvailable && <Trending ary={trending} />}
      <ErrorMessage />
    </Container>
  );
};

export default SearchPage;
