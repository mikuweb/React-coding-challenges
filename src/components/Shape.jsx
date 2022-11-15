export const Shape = ({ shape }) => {
  const shaps = ["〇", "△", "□"];

  const _shap = shaps[Math.floor(Math.random() * shaps.length)];
  return <div>{_shap}</div>;
};

// Write a component <Shape shape={shape}>
// that takes a "shape" prop which can be "circle", "triangle" or "square"
// and displays either of them.
