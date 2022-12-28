import * as React from "react";
interface Props {
  author: string;
  twitter: string;
}
const AuthorNameTwitter = (props: Props) => {
  const { author, twitter } = props;
  return (
    <div className="modalbody__header-name-twitter">
      <div className="modalbody__header-name">{author}</div>
      {twitter && <div className="modalbody__header-twitter">{"@" + twitter}</div>}
    </div>
  );
};

export default AuthorNameTwitter;
