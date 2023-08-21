import * as React from "react";

interface Props {
    ariaLabel: string;
    children: React.ReactNode;
}
function WithButtonAndWrapperForIcon(props: Props) {
    const { ariaLabel, children } = props;
    return (
        <div className="icon-wrapper">
            <button className="icon-button" aria-label={ariaLabel}>
                {children}
            </button>
        </div>
    );
}
export default WithButtonAndWrapperForIcon;

/**
 * todo taka naprawdę to nie HOC
 */
