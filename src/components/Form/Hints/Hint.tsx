import * as React from "react";
import { Hint } from "types";

interface Props {
  hint: string;
}

const _Hint = (props: Props) => {
  const { hint } = props;
  return hint ? (
    <div data-image_hint={hint} className="images-hint">
      {hint}
    </div>
  ) : null;
};
export default _Hint;
