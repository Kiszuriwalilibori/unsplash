import * as React from "react";

import { connect } from "react-redux";

import HeaderIcons from "../HeaderIcons";
import Icons from "icons";
import { Image, AuthorProfileImage, AuthorNameTwitter, ToPreviousImage, ToNextImage, AuthorDataContainer, ModalCloseButton, ModalFadeContainer, ImageLocation } from "./parts";
import { withDescription, WithButtonAndWrapperForIcon } from "HOCs";
import { RootStateType } from "components/AppProvider";

interface Props {
  tabindex?: string;
  details: {
    previous: string;
    next: string;
    author: string;
    location: string;
    twitter: string;
    profileImage: string;
    urls: string;
  };
}

const ImageMagnified = (props: Props) => {
  const { previous, next, location, author, twitter, urls, profileImage } = props.details;
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

const mapStateToProps = (state: RootStateType) => ({
  details: state.modal.details,
});
const SingleImageMagnified = connect(mapStateToProps, {})(ImageMagnified);
export default SingleImageMagnified;

/**
 * todo własciwie urls jest mocno wykluczjące, może by pobrać i sprawdzić urls o poziom wyżej
 * */
