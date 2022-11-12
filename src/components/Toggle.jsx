import { useState } from "react";

export const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? children : null}
      <button onClick={onClickToggle}> {toggle ? "😋😋😋" : "Hungry？"}</button>
    </>
  );
};

// Write a component <Toggle>...</Toggle>
// that displays its children and a button next to it.
// When the button is clicked, hide the children.
// When it is clicked again, display them again.
