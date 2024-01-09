import * as React from "react";
import Modal from "@mui/material/Modal";

import { useSelector } from "react-redux";
import { Author, Close, Image, Like, ToPreviousImage, ToNextImage, Place, Share, Info, Add } from "./parts";
import { selectDataForModal } from "reduxware/redux/selectors";

interface Props {
    isModalVisible: boolean;
}

export const ImageModal = (props: Props) => {
    const { location, author, twitter, urls, profileImage } = useSelector(selectDataForModal);
    const { isModalVisible } = props;
    if (!urls) return null;

    return (
        <Modal open={isModalVisible} id="my-modal">
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
        </Modal>
    );
};
