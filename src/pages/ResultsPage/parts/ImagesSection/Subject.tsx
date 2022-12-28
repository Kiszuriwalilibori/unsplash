import * as React from "react";

import { connect } from "react-redux";
import { RootStateType } from "components/AppProvider";

interface Props {
  subject: string;
}

const Subject = (props: Props) => (
  <div className="images__header">
    <h2 className="images__subject">{props.subject}</h2>{" "}
  </div>
);

const mapStateToProps = (state: RootStateType) => ({
  subject: state.images.subject,
});

export default connect(mapStateToProps, null)(Subject);
