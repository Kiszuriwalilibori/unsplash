import * as React from "react";
interface Props {
  profileImageLink: string;
  author: string;
}
const ProfileImage = (props: Props) => {
  return (
    <div className="modalbody__header-face">
      <img className="modalbody__header-image" src={props.profileImageLink} alt={props.author} />
    </div>
  );
};
export default ProfileImage;
