import React from "react";
import ITodo from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};
const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return (
      <p
        className="center"
        style={{ color: "white", fontSize: "2rem", fontWeight: 700, border: '0.5px solid white', width: '250px', height: '50px', margin: '0 auto', marginTop: "50px" }}
      >
        {" "}
        Пока дел нет
      </p>
    );
  }

  return (
    <ul style={{marginTop:"10%"}}>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          console.log(todo)
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input type="checkbox" onChange={onToggle.bind(null, todo.id)} />
              <span style={{ color: 'black' }}>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
