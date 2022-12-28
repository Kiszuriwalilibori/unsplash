import * as React from "react";

interface Props {
  children: React.ReactNode;
}
const ImagesContainer = (props: Props) => {
  return (
    <section className="fotos__wrapper">
      <div className="fotos__grid">
        <article className="fotos__container" id="fotos__container">
          {props.children}
        </article>
      </div>
    </section>
  );
};

export default ImagesContainer;
