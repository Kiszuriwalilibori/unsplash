import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../reduxware/redux";

export const useDispatchAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export default useDispatchAction;
