import React, { useEffect } from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  return (
    <div className="text-center bg-primary">
      Hello from react
    </div>
  );
}

export default App;
