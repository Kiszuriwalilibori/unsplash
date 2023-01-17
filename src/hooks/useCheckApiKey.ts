import { useRef } from "react";
import useDispatchAction from "./useDispatchAction";

export const useCheckApiKey = () => {
    const { showError } = useDispatchAction();

    const isAPIKeyAvailable = useRef(false);

    if (!process.env.REACT_APP_ACCESS_KEY) {
        showError( "No API key found in the application");
    } else {
        isAPIKeyAvailable.current = true;
    }
    return isAPIKeyAvailable.current;
};

export default useCheckApiKey;
