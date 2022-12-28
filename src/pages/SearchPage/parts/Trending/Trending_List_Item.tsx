import * as React from "react";
import uuid from "react-uuid";

interface Props {
  item: string;
  index: number;
  arr: string[];
}
const Item = (props: Props) => {
  const { item, index, arr } = props;
  return (
    <li className="search-text search-text--smaller search-list-item" key={uuid()}>
      {index === arr.length - 1 ? item : item + ","}
    </li>
  );
};
export default Item;
