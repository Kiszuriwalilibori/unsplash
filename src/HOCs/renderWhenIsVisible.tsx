import * as React from "react";
interface isVisible {
  isVisible?: boolean;
}
function renderWhenIsVisible<T>(Component: React.ComponentType<T | Omit<T & isVisible, keyof isVisible>>) {
  return function (props: T & isVisible) {
    const { isVisible = true, ...newProps } = props;
    return isVisible ? <Component {...newProps} /> : null;
  };
}

export default renderWhenIsVisible;
