import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [todoList, updateTodoList] = useState([]);

  // For handling loading state
  const [loading, updateLoading] = useState(true);

  // To grab form input
  const [input, setTodo] = useState("");


  // Grab data from our backend api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        updateTodoList(json);
        updateLoading(false);
      })
  }, [])

  // Function to add a new todo
  const AddTodo = () => {
    const newTodo = {
      completed: false,
      title: input,
      id: '028296r9326r9823',
      userId: 300
    }

    const newTodoList = [...todoList, newTodo];
    updateTodoList(newTodoList);

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }



  if (loading) return <div className="text-center vh-100 border m-auto">Loading...</div>



  return (
    <div className="text-center col-7 m-auto p-5">

      <div className="d-flex flex-column mb-5">

        <input
          onChange={(e) => setTodo(e.target.value)}
          className="form-control mb-2"
          type="text"
          placeholder="Add New todo"
        />

        <button onClick={AddTodo} className="btn btn-dark btn-sm py-2">Add new</button>
      </div>

      {todoList.map(todo => {
        return (
          <div key={todo.id} className="card border rounded-lg mb-3 p-2 shadow-sm">
            <p className="mb-0">{todo.title}</p>
          </div>
        );

      })}
    </div>
  );
}

export default App;
