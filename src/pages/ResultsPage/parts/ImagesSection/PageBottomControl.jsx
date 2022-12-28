const pageBottomControl = props => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="viewport-block" ref={forwardedRef}>
      <div style={{ width: "400px", height: "200px" }} />
    </div>
  );
};

export default pageBottomControl;
