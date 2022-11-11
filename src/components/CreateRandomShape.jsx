import "../styles.css";
import { useState } from "react";

export const CreateRandomShape = () => {
  const [shape, setShape] = useState("〇");
  const shapes = ["◇", "〇", "＼", "＋"];
  const _shape = shapes[Math.floor(Math.random() * shapes.length)];

  return (
    <div className={"container__random-shape"}>
      <button onClick={() => setShape(_shape)}>Random Shape</button>
      <p>{shape}</p>
    </div>
  );
};
