import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

// 1. create a context
const CounterContext = createContext();

// 2. create a parent component

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count => count + 1);
  const handleDecrease = () => setCount(count => count - 1);

  return (
    <CounterContext.Provider value={{ count, handleIncrease, handleDecrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. create child components to help implement the compound component pattern

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { handleIncrease } = useContext(CounterContext);
  return <button onClick={handleIncrease}>{icon}</button>;
}
function Decrease({ icon }) {
  const { handleDecrease } = useContext(CounterContext);
  return <button onClick={handleDecrease}>{icon}</button>;
}

// 4. add child components as properties to the parent component

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
