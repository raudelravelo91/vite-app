// JSX: JavaScript XML this gets compiled to java script
// you can check on babeljs.io to see what it gets compiled to

import { useState } from 'react'
import './App.css'
import Message from './components/Message';
import Panel from './components/Panel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Panel>
        <Message message='Raudel message test'/>
        </Panel>
    </div>
  )
}

export default App;
