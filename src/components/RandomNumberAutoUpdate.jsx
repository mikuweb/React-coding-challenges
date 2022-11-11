import { useEffect, useState } from "react";

export const RandomNumberAutoUpdate = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setInterval(fn, 1000);
  }, []);

  const fn = function () {
    const number = Math.floor(Math.random() * (10 - 1)) + 1;
    setRandomNumber(number);
  };

  return <p>Random number every 3 second: " {randomNumber} "⌛</p>;
};
