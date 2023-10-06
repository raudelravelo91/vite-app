// JSX: JavaScript XML this gets compiled to java script
// you can check on babeljs.io to see what it gets compiled to

import { useState } from 'react'
import './App.css'
import Message from './components/Message';
import Panel from './components/Panel';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar count={count}/>
      <Panel OnRemove={() => setCount(count-1)} OnAdd={() => setCount(count + 1)}/>
    </div>
  )
}

export default App;
