import * as React from "react";
import { connect } from "react-redux";
import { fetchBackgroundImage } from "reduxware/redux/thunks";
import { AppDispatch } from "types";

interface Props{
  fetchBackgroundImage:Function;
  children:any;
}

const SetBackground = (props:Props) => {
  const {fetchBackgroundImage, children} = props;
  React.useEffect(() => {
    fetchBackgroundImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

const mapDispatchToProps = (dispatch:AppDispatch) => ({
  fetchBackgroundImage: () => dispatch(fetchBackgroundImage()),
});

export default connect(null, mapDispatchToProps)(SetBackground);
