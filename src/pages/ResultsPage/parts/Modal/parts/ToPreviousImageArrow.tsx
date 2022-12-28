import * as React from "react";
interface Props {
  previous: string;
}

const ToPreviousImageArrow = (props: Props) => {
  return (
    <aside className="modalbody__aside left">
      <div className="modalbody__arrow-box">
        <svg data-id={props.previous} viewBox="0 0 32 32" className={props.previous ? "modalbody__arrow-svg visible" : "modalbody__arrow-svg"}>
          <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path>
        </svg>
      </div>
    </aside>
  );
};
export default ToPreviousImageArrow;
