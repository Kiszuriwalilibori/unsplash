import * as React from "react";

interface Props {
    author: string;
    twitter: string;
    profileImageLink: string;
}
const Author = (props: Props) => {
    const { author, profileImageLink, twitter } = props;
    return (
        <div className="modal-content__header-author">
            <div className="author-data">
                <img className="author-data__image" src={profileImageLink} alt={author} />
                <div className="author-data__personal">
                    <div className="author-data__name">{author}</div>
                    {twitter && <div className="author-data__twitter">{twitter}</div>}
                </div>
            </div>
        </div>
    );
};
export default Author;
