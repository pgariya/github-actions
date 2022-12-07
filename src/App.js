import './App.css';
import { useState } from 'react';

function App() {
  let [count,setcount] = useState(0);

  return (
    <div className="App">
        <h1> Counter App </h1>
      <h1>count:{count}</h1>
      <button onClick={() => setcount(count-1)}>PREV</button>
      <button onClick={() => setcount(count+1)}>NEXT</button>

    </div>
  );
}

export default App;
