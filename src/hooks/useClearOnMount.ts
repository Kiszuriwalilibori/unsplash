import { useEffect } from "react";
import useDispatchAction from "./useDispatchAction";
export const useClearOnMount = () => {
    const { hideModal } = useDispatchAction();

    useEffect(() => {
        hideModal();
    }, []);
};
