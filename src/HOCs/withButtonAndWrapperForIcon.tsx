import * as React from "react";

function WithButtonAndWrapperForIcon(props: any) {
  return (
    <div className="icon-wrapper">
      <button className="icon-button" aria-label={props.ariaLabel}>
        {props.children}
      </button>
    </div>
  );
}
export default WithButtonAndWrapperForIcon;

/**
 * todo taka naprawdę to nie HOC
 */
