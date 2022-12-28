import * as React from "react";

import { shallowEqual } from "react-redux";

import HeaderIcons from "../HeaderIcons";
import Icons from "icons";

import { Image, AuthorProfileImage, AuthorNameTwitter, ToPreviousImage, ToNextImage, AuthorDataContainer, ModalCloseButton, ModalFadeContainer, ImageLocation } from "./parts";
import { withDescription, WithButtonAndWrapperForIcon } from "HOCs";
import { useTypedSelector } from "hooks/useTypedSelector";

const ImageMagnified = () => {
  const { previous, next, location, author, twitter, urls, profileImage } = useTypedSelector(state=>state.modal.details, shallowEqual);
  return urls ? (
    <ModalFadeContainer>
      <ModalCloseButton />
      <ToPreviousImage previous={previous} />
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
          <WithButtonAndWrapperForIcon ariaLabel="Share">{withDescription(Icons.Share, "Share")}</WithButtonAndWrapperForIcon>

          <WithButtonAndWrapperForIcon ariaLabel="Info">{withDescription(Icons.Info, "Info")}</WithButtonAndWrapperForIcon>
        </footer>
      </article>
      <ToNextImage next={next} />
    </ModalFadeContainer>
  ) : null;
};

export default ImageMagnified;

/**
 * todo własciwie urls jest mocno wykluczjące, może by pobrać i sprawdzić urls o poziom wyżej
 * */
