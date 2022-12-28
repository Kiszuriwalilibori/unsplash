import * as React from "react";
interface Props {
  children: React.ReactNode;
}
function Container(props: Props) {
  return <ul className="search-list">{props.children}</ul>;
}

export default Container;
