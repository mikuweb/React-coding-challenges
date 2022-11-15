export const Shape = ({ shape }) => {
  const shaps = [
    <img style={{ width: "30px", height: "30px" }} src="/img/circle.png" />,
    <img style={{ width: "30px", height: "30px" }} src="/img/square.png" />,
    <img style={{ width: "30px", height: "30px" }} src="/img/triangle.png" />
  ];

  const _shap = shaps[Math.floor(Math.random() * shaps.length)];
  return <div>{_shap}</div>;
};

// Write a component <Shape shape={shape}>
// that takes a "shape" prop which can be "circle", "triangle" or "square"
// and displays either of them.
