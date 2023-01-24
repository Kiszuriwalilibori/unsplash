import * as React from "react";

import { debounce } from "lodash";

import useDispatchAction from "hooks/useDispatchAction";
interface Props {
    id: string;
    urls: string;
    description: string;
    user: string;
    tags: { title: string }[];
}

const Image = (props: Props) => {
    const { id, user, description, urls, tags } = props;
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
                loading="lazy"
                className="fotos__image"
                alt={description}
                sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
                srcSet={urls}
                itemProp="thumbnailUrl"
                onLoad={() => {
                    refTags.current?.classList.add("active");
                }}
                onClick={activateModal}
            ></img>
            <figcaption className="container-for-tags" ref={refTags}>
                {tags.map((item, index) => (
                    <span className="fotos__tag" key={index} data-image_hint={item.title}>
                        {" " + item.title || ""}
                    </span>
                ))}
            </figcaption>
        </figure>
    );
};

export default Image;
