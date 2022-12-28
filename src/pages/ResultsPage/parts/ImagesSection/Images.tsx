import * as React from "react";

interface Props {
  children: React.ReactNode;
}
const Images = (props: Props) => {
  return (
    <article className="fotos__container" id="fotos__container">
      {props.children}
    </article>
  );
};

export default Images;
