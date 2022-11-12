import { useEffect, useState } from "react";

export const RandomNumberAutoUpdate = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const fn = function () {
    const number = Math.floor(Math.random() * (10 - 1)) + 1;
    setRandomNumber(number);
  };

  useEffect(() => {
    const interval = setInterval(fn, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Random number every second: " {randomNumber} "⌛</p>;
};
