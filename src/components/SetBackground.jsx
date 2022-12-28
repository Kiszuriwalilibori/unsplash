import * as React from "react";
import { connect } from "react-redux";
import { fetchBackgroundImage } from "reduxware/redux/imagesReducer";

const SetBackground = ({ fetchBackgroundImage, children }) => {
  React.useEffect(() => {
    fetchBackgroundImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

const mapDispatchToProps = dispatch => ({
  fetchBackgroundImage: () => dispatch(fetchBackgroundImage()),
});

export default connect(null, mapDispatchToProps)(SetBackground);
