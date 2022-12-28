import * as React from "react";
interface Props {
  children: React.ReactNode;
}
function Container(props: Props) {
  return (
    <section className="search__background">
      <div className="form_container">{props.children}</div>
    </section>
  );
}

export default Container;
