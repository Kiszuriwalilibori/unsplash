import * as React from "react";
import FocusTrap from "focus-trap-react";
import { useSelector } from "react-redux";

import { Author, Close, Image, Like, ToPreviousImage, ToNextImage, Place, Share, Info, Add } from "./parts";

import { selectDataForModal } from "reduxware/redux/selectors";

const ModalContent = React.forwardRef((props, ref) => {
    const { location, author, twitter, urls, profileImage } = useSelector(selectDataForModal);

    if (!urls) return null;

    return (
        <FocusTrap>
            <div className="modal-content__container fade-in">
                <Close />
                <ToPreviousImage />
                <article className="modal-content" aria-label="modal content">
                    <header className="modal-content__header">
                        <Author profileImageLink={profileImage} author={author} twitter={twitter} />
                        <Like />
                        <Add />
                    </header>

                    <Image author={author} urls={urls} />

                    <footer className="modal-content__footer">
                        <Place location={location} />
                        <Share />
                        <Info />
                    </footer>
                </article>
                <ToNextImage />
            </div>
        </FocusTrap>
    );
});

export default ModalContent;

/**
 * todo własciwie urls jest mocno wykluczjące, może by pobrać i sprawdzić urls o poziom wyżej
 * */
