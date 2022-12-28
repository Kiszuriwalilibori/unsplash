import * as React from "react";
import Modal from '@mui/material/Modal';
import { connect } from "react-redux";

import { RootStateType } from "types";
import ImageMagnified from "./ImageMagnified";

interface Props {
  isModalVisible: boolean;
}

function MyModal(props: Props) {
  const { isModalVisible } = props;
  return (
    <div>
      <Modal open={isModalVisible} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" id="my-modal">
        <ImageMagnified />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state: RootStateType) => ({
  isModalVisible: state.modal.isVisible,
});

export default connect(mapStateToProps, {})(MyModal);
