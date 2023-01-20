import * as React from "react";

import { debounce } from "lodash";
import { connect } from "react-redux";

import { fetchDetails } from "reduxware/redux/thunks";
import { AppDispatch } from "types";
interface Props {
    prop: {
        id: string;
        urls: string;
        description: string;
        user: string;
        tags: { title: string }[];
    };
    fetchDetails: Function;
}

const Image = (props: Props) => {
    const { id, user, description, urls, tags } = props.prop;
    const { fetchDetails } = props;
    const refTags = React.useRef<HTMLDivElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const showModal = React.useCallback(
        debounce(() => {
            fetchDetails(id);
        }, 100),
        [id]
    );
    return (
        <figure className="fotos__box visible fade-in" data-user={`Author: ${user}`} data-description={description}>
            <img
                // data-id={id}
                loading="lazy"
                className="fotos__image"
                alt={description}
                sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
                srcSet={urls}
                itemProp="thumbnailUrl"
                onLoad={() => {
                    refTags.current?.classList.add("active");
                }}
                onClick={showModal}
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchDetails: (str: string) => dispatch(fetchDetails(str)),
});

export default connect(null, mapDispatchToProps)(Image);
