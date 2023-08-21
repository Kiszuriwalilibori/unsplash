import { FetchImages } from "reduxware/redux/thunks/fetchImages";
import { FetchHints } from "reduxware/redux/thunks/fetchHints";

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

export interface ImageData {
    id: string;
    urls: { raw: string; full: string; regular: string; thumb: string; small: string; small_s3: string };
    tags: { title: string }[];
    alt_description?: string;
    description?: string;
    first_name: string;
    last_name: string;
    location: { city: string; country: string };
    user: {
        name?: string;
        first_name: string;
        last_name: string;
        twitter_username: string;
        profile_image: { small: string };
    };
}

export interface Hint {
    label: string;
    value: string;
}

export type Hints = string[];

export type Images = ImageData[];

export { RootStateType, AppDispatch, GetState } from "components/AppProvider";
export { FetchImages, FetchHints };
