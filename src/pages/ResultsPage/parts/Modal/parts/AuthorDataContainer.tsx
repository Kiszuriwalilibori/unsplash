import * as React from 'react';
const AuthorDataContainer: React.FC = props => {
    return (
        <div className="modalbody__header-author">
            <div className="author-data">{props.children}</div>
        </div>
    );
};
export default AuthorDataContainer;
