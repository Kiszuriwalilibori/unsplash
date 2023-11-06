import { useEffect } from "react";
import useMessage from "./useMessage";
import useDispatchAction from "./useDispatchAction";

export const useHandleConnectionStatus = () => {
    const showMessage = useMessage();
    const { setIsOnline } = useDispatchAction();
    useEffect(() => {
        const handleStatusChange = () => {
            navigator.onLine && showMessage.success("Your internet connection is restored");
            navigator.onLine && setIsOnline(true);

            !navigator.onLine && setIsOnline(false);
            !navigator.onLine &&
                showMessage.error("You have lost internet connection. Some features may be unavailable now.");
        };
        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);

        return () => {
            window.removeEventListener("offline", handleStatusChange);
            window.removeEventListener("online", handleStatusChange);
        };
    }, [showMessage]);
};
export default useHandleConnectionStatus;
