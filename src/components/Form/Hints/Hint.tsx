import * as React from "react";
import { Hint } from "./model";

interface Props {
  hint: Hint;
}

const _Hint = (props: Props) => {
  const { hint } = props;
  return hint && hint.label && hint.value ? (
    <div data-image_hint={hint.value} className="images-hint">
      {hint.label}
    </div>
  ) : null;
};
export default _Hint;
