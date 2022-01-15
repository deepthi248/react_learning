import './App.css';
import { useState } from 'react';
import A from './Components/Context_API/A';
import { consumer, Provider, provider, userContext } from './Components/Context_API/UserContext';
import D from './Components/Context_API/D';
import B from './Components/Context_API/B';
import Counter from './Components/useReducer/Counter';
import Counter_Object from './Components/useReducer/Counter_Object';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Counter_Object />
    </div>
  )
}

export default App;


/*

context_API

 const [message, setMessage] = useState('');
return (
  <div className="App">
    <input type="text"
      value={message}
      onChange={event => setMessage(event.target.value)} />
    <Provider value={message}>
      <D />
    </Provider>
    <B />
  </div >
);

*/

