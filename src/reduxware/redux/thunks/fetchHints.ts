import { clearHints, getHints, hideHintsMsg, showError } from "reduxware/redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { INPUT_LENGTH_THRESHOLD } from "config";
import { AppDispatch, GetState, RootState } from "types";

interface AutocompleteItem {
    query: string;
    priority: number;
}

interface AutocompleteResponse {
    ok: boolean;
    data?: {
        fuzzy?: AutocompleteItem[];
        autocomplete?: AutocompleteItem[];
        did_you_mean?: AutocompleteItem[];
    };
    error?: {
        code: string;
        message: string;
    };
}

export function fetchHints(pattern: string): ThunkAction<void, RootState, undefined, AnyAction> {
    return (dispatch: AppDispatch, getState: GetState) => {
        if (pattern && pattern.length > INPUT_LENGTH_THRESHOLD) {
            fetch(`https://cook-book-inky.vercel.app/api/autocomplete?query=${encodeURIComponent(pattern)}`)
                .then(response => response.json() as Promise<AutocompleteResponse>)
                .then(json => {
                    if (!json.ok) {
                        dispatch(showError(json.error?.message ?? "Unknown error during fetching hints"));
                        return;
                    }

                    const hints = json.data?.autocomplete?.map(item => item.query) ?? [];
                    dispatch(getHints(hints));
                })
                .catch(err => {
                    let message: string;

                    if (err instanceof Error) {
                        message = err.message;
                    } else {
                        message = "Unknown error occured when fetching hints";
                    }

                    dispatch(showError(message));
                });
        } else {
            if (getState().hints.hints.length) {
                dispatch(clearHints());
            }

            dispatch(hideHintsMsg());
        }
    };
}

export type FetchHints = (pattern: string) => void;
