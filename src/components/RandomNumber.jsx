export const RandomNumber = () => {
  const number = Math.floor(Math.random() * (10 - 1)) + 1;

  return <p>Today's luckey number is... " {number} "🌟</p>;
};
