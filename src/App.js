import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  const handleIncrease = (event) => {
    setCount(count+1);
  };
  const handleDecrease = (event) => {
    setCount(count-1);
  };
  const handleReset = (event) => {
    setCount(0);
  };
return (
  <div className="App">
  <button onClick={ handleIncrease}>Increase</button>
  <button onClick={handleDecrease}>Decrease</button>
  <button onClick={handleReset}>Reset to Zero</button>
  {count}
  </div>
);
}


export default App;
