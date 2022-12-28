import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootStateType } from "types";
export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
