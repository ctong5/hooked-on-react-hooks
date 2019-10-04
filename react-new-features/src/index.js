import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
  // use state returns array of [currentStateValue, function to update state]
  // const array = useState(10);
  const [count, setCount] = useState(10); // destructured
  const increment = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
