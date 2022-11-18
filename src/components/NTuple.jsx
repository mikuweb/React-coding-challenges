export const NTuple = ({ children, amount }) => {
 const result = [...Array.from(Array(amount).keys())].map(() => {
  return  children;
 });
 
 return <div>{result}</div>;

};

// Write a component <NTuple amount={amount}>...</NTuple>
// that takes its children and displays them "amount" times.

// Note: Reuse your code from before.
// Instead of an array with 3 entries,
// learn how to create a new array with "amount" entries.
