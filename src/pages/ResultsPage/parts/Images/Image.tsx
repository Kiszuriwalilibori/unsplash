import * as React from "react";

import { debounce } from "lodash";
import { connect, useSelector } from "react-redux";

import { Tag, ImageFigCaption } from "../styled";
import { AppDispatch, FetchImages, ShowMessage } from "types/index";
import { fetchImages } from "reduxware/redux/thunks";
import { selectIsOnline } from "reduxware/redux/selectors";
import { useMessage, useDispatchAction } from "hooks";
import { ImageContainer } from "./styled";
import { DEBOUNCE_DELAY } from "config";

interface Props {
    id: string;
    urls: string;
    description: string;
    user: string;
    tags: { title: string }[];
    loadHandler?: () => void;
    fetchImages: FetchImages;
}

const SIZES =
    "(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw";

const Image = (props: Props) => {
    const { id, user, description, urls, tags, loadHandler, fetchImages } = props;
    const refTags = React.useRef<HTMLDivElement>(null);
    const { setImageIdForModal, showModal } = useDispatchAction();
    const isOnline = useSelector(selectIsOnline);
    const showMessage = useMessage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = React.useCallback(
        debounce(() => {
            setImageIdForModal(id);
            showModal();
        }, DEBOUNCE_DELAY),
        [id]
    );

    const handleError = React.useCallback(() => loadHandler && loadHandler(), [loadHandler]);

    const handleLoad = React.useCallback(() => {
        refTags.current?.classList.add("visible");
        loadHandler && loadHandler();
    }, [loadHandler]);

    return (
        <figure className="images__item visible fade-in" data-user={`Author: ${user}`} data-description={description}>
            <ImageContainer data-user={`Author: ${user}`} data-description={description} onClick={handleClick}>
                <img
                    className="image"
                    alt={description || "An image"}
                    sizes={SIZES}
                    srcSet={urls}
                    itemProp="thumbnailUrl"
                    onLoad={handleLoad}
                    onError={handleError}
                ></img>
            </ImageContainer>
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
        </figure>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string, showMessage: ShowMessage) => dispatch(fetchImages(str, showMessage)),
});
export default connect(null, mapDispatchToProps)(Image);
