import * as React from "react";
import uuid from "react-uuid";

import useMessage, { ShowMessage } from "hooks/useMessage";

import PATHS from "routes";
import { fetchImages } from "reduxware/redux/thunks";
import { AppDispatch, FetchImages } from "types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
    ary: string[];
    fetchImages: FetchImages;
}

const Trending = React.memo((props: Props) => {
    const { ary, fetchImages } = props;
    const showMessage = useMessage();
    const navigate = useNavigate();

    const handleClick = (item: string) => {
        navigate(PATHS.RESULTS);
        fetchImages(item, showMessage);
    };
    return (
        <div className="trending">
            <strong>Trending: </strong>
            <ul className="trending__list">
                {ary.map((item, index, arr) => (
                    <li
                        role="button"
                        tabIndex={0}
                        className={
                            index === 0 ? "trending__item" : "trending__item trending__item--with-preceding-comma"
                        }
                        key={uuid()}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchImages: (str: string, showMessage: ShowMessage) => dispatch(fetchImages(str, showMessage)),
});

export default connect(null, mapDispatchToProps)(Trending);
