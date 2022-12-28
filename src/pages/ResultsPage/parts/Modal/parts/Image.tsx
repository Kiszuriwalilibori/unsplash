import * as React from "react";
interface Props {
  author: string;
  urls: string;
}

const Image = (props: Props) => {
  const { author, urls } = props;

  return <img alt={author} className="modalbody__image fade-in" sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 521px) 500px, (min-aspect-ratio: 3711/2562) calc((calc(100vh - 175px)) * 1.44848), calc(100vw - 32px)" srcSet={urls} />;
};
export default Image;
