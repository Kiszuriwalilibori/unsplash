import * as React from "react";

import { shallowEqual} from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";

const Subject = () => {
  const subject = useTypedSelector(state=>state.images.subject, shallowEqual);
  return(
  <div className="images__header">
    <h2 className="images__subject">{subject}</h2>{" "}
  </div>)
};

export default Subject;