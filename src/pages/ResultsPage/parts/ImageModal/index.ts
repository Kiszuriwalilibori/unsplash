// export { default } from "./ImageModal";

import { connect } from "react-redux";

import { RootState } from "types";
import { ImageModal } from "./ImageModal";

const mapStateToProps = (state: RootState) => ({
    isModalVisible: state.modal.isVisible,
});

export default connect(mapStateToProps, {})(ImageModal);
