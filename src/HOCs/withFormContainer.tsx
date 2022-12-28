import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const FormContainer = (props: Props) => {
  return <div className="fotos__wrapper--form">{props.children}</div>;
};

function withFormContainer<T>(Component: React.ComponentType) {
  return function (props: React.PropsWithChildren<T>) {
    return (
      <FormContainer>
        <Component {...props} />
      </FormContainer>
    );
  };
}

export default withFormContainer;
