import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "types";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
