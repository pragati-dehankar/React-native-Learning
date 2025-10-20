import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  counter: 0,
  increment: (byValue) => {},
  decrement: (byValue) => {},
  reset:()=>{}
});

export const useCounter=()=>useContext(CounterContext)

{
  /* <CounterProvider></CounterProvider> */
}

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increment = (byValue) => {
    if (byValue) {
      setCounter((prev) => prev + byValue);
    } else {
      setCounter((prev) => prev + 1);
    }
  };
  const decrement = (byValue) => {
    if (byValue) {
      setCounter((prev) => prev - byValue);
    } else {
      setCounter((prev) => prev - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <CounterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
export { CounterContext };
