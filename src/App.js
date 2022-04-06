import './App.css';
import { useEffect, useState } from 'react';
import {getTodos, insertTodos} from '../src/api/todosService'
import Todo from './Todo';
import { Card } from 'react-bootstrap';
import TodoForm from './TodoForm';

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

  const addTodo = data => {
    return insertTodos(data)
    .then((res) => {
      console.log('Todo addes', res);
    })
  };


  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        {/* <TodoForm addTodo={addTodo} /> */}
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
