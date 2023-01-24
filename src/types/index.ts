type Previous = string | null;
type Next = string | null;

export type PathKeys = "select" | "images" | "nopage";

export interface Result {
    data: any;
}
export interface Details {
    location: string;
    author: string;
    twitter: string;
    profileImage: string;
    urls: string;
    previous: Previous;
    next: Next;
}

export interface Hint {
    label: string;
    value: string;
}

export type Hints = string[];

export { RootStateType, AppDispatch, GetState } from "components/AppProvider";
