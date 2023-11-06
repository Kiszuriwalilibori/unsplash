import React from "react";

interface Props {
    text: string;
}

export const HiddenH1 = (props: Props) => {
    const { text } = props;
    return <h1 className="sr-only">{text}</h1>;
};

export default React.memo(HiddenH1);
