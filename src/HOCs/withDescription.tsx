import * as React from "react";

const WithDescription = (Component: React.ComponentType, description: string) => {
  if (!description) return null;

  return (
    <>
      <Component />
      <span className="icon-button__text">{description}</span>
    </>
  );
};
export default WithDescription;
