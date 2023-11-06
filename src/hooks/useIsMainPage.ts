import { useLocation } from "react-router";

export const useIsMainPage = () => {
    const location = useLocation();
    const path = location.pathname;
    return path === "/" ? true : false;
};

export default useIsMainPage;
