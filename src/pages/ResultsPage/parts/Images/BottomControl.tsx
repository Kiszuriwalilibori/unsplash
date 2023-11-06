import React from "react";
import { type InjectedViewportProps } from "react-in-viewport";

const BottomControl = (props: InjectedViewportProps<HTMLDivElement>) => {
    const { forwardedRef } = props;

    return <div ref={forwardedRef}></div>;
};

export default BottomControl;
