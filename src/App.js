import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>count app </h1>
      <h5>{count}</h5>
      <button className="button" onClick={increment}>
        add{" "}
      </button>

      <button className="button1" onClick={decrement}>
        minus
      </button>
    </div>
    
  );
}

export default App;
