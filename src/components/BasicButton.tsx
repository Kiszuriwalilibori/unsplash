import React, { forwardRef, Ref } from "react";
import { renderWhenIsVisible } from "hocs";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function BasicButton(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
    const { children, className = "", type = "button", ...rest } = props;

    return (
        <button className={className} ref={ref} type={type} {...rest}>
            {children}
        </button>
    );
}

export default renderWhenIsVisible(forwardRef(BasicButton));
