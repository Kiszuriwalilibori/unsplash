import * as React from "react";

import Trending from "./parts/Trending";
import Header from "./parts/Header";
import Container from "./parts/SearchPage_Container";
import ErrorMessage from "components/ErrorMessage";
import Form from "components/Form/Form";

import { trending } from "js/fixtures";

const SearchPage = () => {
  return (
    <Container>
      <Header />
      <Form />
      <Trending ary={trending} />
      <ErrorMessage />
    </Container>
  );
};

export default SearchPage;
