import * as React from "react";

import { useSelector } from "react-redux";

import HeaderIcons from "../HeaderIcons";
import Icons from "icons";

import {
    Image,
    AuthorProfileImage,
    AuthorNameTwitter,
    ToPreviousImage,
    ToNextImage,
    AuthorDataContainer,
    ModalCloseButton,
    ModalFadeContainer,
    ImageLocation,
} from "./parts";

import { withDescription, WithButtonAndWrapperForIcon } from "HOCs";
import { selectDataForModal } from "reduxware/redux/selectors";

const ImageMagnified = () => {
    const { location, author, twitter, urls, profileImage } = useSelector(selectDataForModal);

    if (!urls) return null;
    return (
        <ModalFadeContainer>
            <ModalCloseButton />
            <ToPreviousImage />
            <article className="modalbody">
                <header className="modalbody__header">
                    <AuthorDataContainer>
                        <AuthorProfileImage profileImageLink={profileImage} author={author} />
                        <AuthorNameTwitter author={author} twitter={twitter} />
                    </AuthorDataContainer>

                    <HeaderIcons>
                        <WithButtonAndWrapperForIcon ariaLabel="Like">
                            <Icons.Like />
                        </WithButtonAndWrapperForIcon>
                        <WithButtonAndWrapperForIcon ariaLabel="Add">
                            <Icons.Add />
                        </WithButtonAndWrapperForIcon>
                    </HeaderIcons>
                </header>

                <Image author={author} urls={urls} />

                <footer className="modalbody__header footer">
                    <ImageLocation location={location} />
                    <WithButtonAndWrapperForIcon ariaLabel="Share">
                        {withDescription(Icons.Share, "Share")}
                    </WithButtonAndWrapperForIcon>

                    <WithButtonAndWrapperForIcon ariaLabel="Info">
                        {withDescription(Icons.Info, "Info")}
                    </WithButtonAndWrapperForIcon>
                </footer>
            </article>
            <ToNextImage />
        </ModalFadeContainer>
    );
};

export default ImageMagnified;

/**
 * todo własciwie urls jest mocno wykluczjące, może by pobrać i sprawdzić urls o poziom wyżej
 * */
