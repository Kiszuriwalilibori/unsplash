import { FetchImages } from "reduxware/redux/thunks/fetchImages";
import { FetchHints } from "reduxware/redux/thunks/fetchHints";
import { ErrorState } from "reduxware/reducers/errorReducer";
import { ModalState } from "reduxware/reducers/modalReducer";
import { HintsState } from "reduxware/reducers/hintsReducer";
import { ShowMessage } from "hooks/useMessage";

type PathKeys = "SEARCH" | "RESULTS" | "NOPAGE";

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
        location: string;
    };
}
export interface Hint {
    label: string;
    value: string;
}

export type Hints = string[];
export type Images = ImageData[];

interface ImagesState {
    count: number;
    lastFetchedPage: number;
    subject: string;
    collectionLength: number;
    backgroundImage: Object;
    imgs: Images;
}

export { RootState, AppDispatch, GetState } from "components/AppProvider";
export { ErrorState, FetchHints, FetchImages, HintsState, ImagesState, ModalState, PathKeys, ShowMessage };
