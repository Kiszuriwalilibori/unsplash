import * as React from "react";
interface Props {
  next: string;
}

const ToNextImageArrow = (props: Props) => {
  return (
    <aside className="modalbody__aside right">
      <div className="modalbody__arrow-box">
        <svg data-id={props.next} viewBox="0 0 32 32" className={props.next ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"}>
          <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
        </svg>
      </div>
    </aside>
  );
};
export default ToNextImageArrow;
