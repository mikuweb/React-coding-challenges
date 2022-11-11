export const Triple = () => {
  const heys = ["Hey!", "Heey!!", "Heeey!!!"];

  return (
    <div>
      {heys.map((hey, i) => (
        <div key={i}>{hey}</div>
      ))}
    </div>
  );
};
