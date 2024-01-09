import * as React from "react";
import Modal from "@mui/material/Modal";

import ModalContent from "./ModalContent";

import { connect } from "react-redux";
import { RootState } from "types";

interface Props {
    isModalVisible: boolean;
}

function MyModal(props: Props) {
    const { isModalVisible } = props;
    return (
        <Modal open={isModalVisible} id="my-modal">
            <ModalContent />
        </Modal>
    );
}

const mapStateToProps = (state: RootState) => ({
    isModalVisible: state.modal.isVisible,
});

export default connect(mapStateToProps, {})(MyModal);
