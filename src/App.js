import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useEffect, useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <Counter valor={counter}/>
    </div>
  );
}

export default App;
