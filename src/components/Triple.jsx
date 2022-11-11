export const Triple = ({ children }) => {
  const result = [1, 2, 3].map(() => {
    return children;
  });

  return <div>{result}</div>;
};

//           [1,2,3].map(() => {return “Hey”})
// Same as : [1,2,3].map(() =>  “Hey”)

// Both will return [“Hey”,“Hey”,“Hey”]
