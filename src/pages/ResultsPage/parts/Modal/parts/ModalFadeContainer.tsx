import * as React from 'react';
const ModalFadeContainer: React.FC = props => {
    return <div className="modalbody__container fade-in">{props.children}</div>;
};
export default ModalFadeContainer;
