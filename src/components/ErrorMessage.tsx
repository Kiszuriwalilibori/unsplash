import * as React from "react";

import { Alert, Snackbar } from "@mui/material";
import { withStyles } from "@mui/styles";
import { connect } from "react-redux";
import { RootStateType } from "./AppProvider";
import useDispatchAction from "hooks/useDispatchAction";

const StyledAlert = withStyles({
  root: {
    background: "#F5C200",
    color: "black",
    border: "1px solid #EE760A",
    fontWeight: "bold",
    margin: "40px auto",
    maxWidth: "300px",
    boxShadow: "inset 0 0 5px #EE760A",
  },
})(Alert);

interface Props {
  isOpen: boolean;
  message: string;
}

const Message = (props: Props) => {
  const { isOpen, message } = props;
  const { clearError } = useDispatchAction();
  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={clearError}>
      <StyledAlert severity="success" variant="filled">
        Ojejku, błąd:
        <br />
        {message}
        <br />
      </StyledAlert>
    </Snackbar>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  isOpen: state.images.error.value,
  message: state.images.error.code,
});

const ErrorMessage = connect(mapStateToProps, {})(Message);
export default ErrorMessage;
