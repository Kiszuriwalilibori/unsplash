import * as React from "react";
import Header from "./Trending_Header";
import Container from "./Trending_Container";
import Item from "./Trending_List_Item";

interface Props {
  ary: string[];
}

const Trending = React.memo((props: Props) => {
  const { ary } = props;
  return (
    <Container>
      <Header />
      {ary.map((item, index, arr) => (
        <Item item={item} index={index} arr={arr} key={index} />
      ))}
    </Container>
  );
});

export default Trending;
