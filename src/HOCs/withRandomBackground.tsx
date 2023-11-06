import * as React from "react";
import { connect } from "react-redux";
import { fetchBackgroundImage } from "reduxware/redux/thunks";
import { AppDispatch } from "types";

interface Props {
    fetchBackgroundImage: () => void;
    children: any;
}

const WithRandomBackground = (props: Props) => {
    const { fetchBackgroundImage, children } = props;
    React.useEffect(() => {
        fetchBackgroundImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchBackgroundImage: () => dispatch(fetchBackgroundImage()),
});

export default connect(null, mapDispatchToProps)(WithRandomBackground);
