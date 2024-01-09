import * as React from "react";

export function useInitialFocus<
    T extends
        | HTMLButtonElement
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | HTMLAnchorElement
        | HTMLAreaElement
>() {
    const initialFocus = React.useRef<T>(null);
    React.useEffect(() => {
        initialFocus.current && initialFocus.current.focus();
    });
    return initialFocus;
}
export default useInitialFocus;
