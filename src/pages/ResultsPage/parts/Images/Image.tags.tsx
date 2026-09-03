import * as React from "react";

import { useSelector } from "react-redux";

import { Tag, ImageFigCaption } from "../styled";

import { FetchImages } from "types/index";

import { selectIsOnline } from "reduxware/redux/selectors";

import { useMessage } from "hooks";

interface Props {
    tags: { title: string }[];
    fetchImages: FetchImages;
}

const ImageTags = ({ tags, fetchImages }: Props) => {
    const refTags = React.useRef<HTMLDivElement>(null);
    const isOnline = useSelector(selectIsOnline);
    const showMessage = useMessage();

    return (
        <ImageFigCaption ref={refTags}>
            {tags.map((item, index) => (
                <Tag
                    disabled={!isOnline}
                    tabIndex={0}
                    key={index}
                    onClick={() => {
                        fetchImages(item.title, showMessage);
                    }}
                >
                    {" " + item.title || ""}
                </Tag>
            ))}
        </ImageFigCaption>
    );
};

export default ImageTags;
