import * as React from "react";

import { shallowEqual } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { SubjectStyle } from "./styled";

const Subject = () => {
    const subject = useTypedSelector(state => state.images.subject, shallowEqual);
    return <SubjectStyle>{subject}</SubjectStyle>;
};

export default Subject;
