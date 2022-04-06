import './App.css';
import { useEffect, useState } from 'react';
import {getTodos} from '../src/api/todosService'
import Todo from './Todo';
import { Button, Card, Form } from 'react-bootstrap';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    getTodos().then((response) => {
      console.log(response.data.data);
      setTodos(response.data.data)
    })
    .catch((e) => {
      console.log(e);
    })
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
