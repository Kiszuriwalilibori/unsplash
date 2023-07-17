import * as React from "react";

import { debounce } from "lodash";

import useDispatchAction from "hooks/useDispatchAction";
import { AppDispatch } from "types/index";
import { fetchImages } from "reduxware/redux/thunks";
import { connect } from "react-redux";

interface Props {
    id: string;
    urls: string;
    description: string;
    user: string;
    tags: { title: string }[];
    loadHandler?: Function;
    fetchImages: Function;
}

const Image = (props: Props) => {
    const { id, user, description, urls, tags, loadHandler, fetchImages } = props;
    const refTags = React.useRef<HTMLDivElement>(null);
    const { setImageIdForModal, showModal } = useDispatchAction();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const activateModal = React.useCallback(
        debounce(() => {
            setImageIdForModal(id);
            showModal();
        }, 100),
        [id]
    );
    return (
        <figure className="fotos__box visible fade-in" data-user={`Author: ${user}`} data-description={description}>
            <img
                className="fotos__image"
                alt={description}
                sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
                srcSet={urls}
                itemProp="thumbnailUrl"
                onLoad={() => {
                    refTags.current?.classList.add("active");
                    loadHandler && loadHandler();
                }}
                onError={() => loadHandler && loadHandler()}
                onClick={activateModal}
            ></img>
            <figcaption className="container-for-tags" ref={refTags}>
                {tags.map((item, index) => (
                    <span
                        className="fotos__tag"
                        key={index}
                        data-image_hint={item.title}
                        onClick={() => {
                            fetchImages(item.title);
                        }}
                    >
                        {" " + item.title || ""}
                    </span>
                ))}
            </figcaption>
        </figure>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string) => dispatch(fetchImages(str)),
});
export default connect(null, mapDispatchToProps)(Image);
// export default Image;
