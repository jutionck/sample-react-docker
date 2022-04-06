function Todo({ todo, index}) {
    return (
      <div
        className="todo"
      >
        <span style={{ textDecoration: todo.done ? "line-through" : "" }}> {todo.note}</span>
      </div>
    );
  }

  export default Todo;