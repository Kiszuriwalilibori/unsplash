import { useLocation } from "react-router";
import PATHS from "routes";

export const useIsResultsPage = () => {
    const location = useLocation();
    const path = location.pathname;
    return path === PATHS.RESULTS ? true : false;
};

export default useIsResultsPage;
