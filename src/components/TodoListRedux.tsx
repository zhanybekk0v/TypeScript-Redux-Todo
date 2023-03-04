import React from "react";
import ITodo from "../interfaces";
import { useAppSelector } from "../redux/hooks/hooks";
import TodoItemRedux from "./TodoItemRedux";

const TodoListRedux = () => {

  const todos = useAppSelector(state => state.todos.list)
  console.log(todos)
  if (todos.length === 0) {
    return (
      <p
        className="center"
        style={{ color: "white", fontSize: "2rem", fontWeight: 700, border: '0.5px solid white', width: '250px', height: '50px', margin: '0 auto', marginTop: "200px" }}
      >
        {" "}
        Пока дел нет
      </p>
    );
  }

  return (
    <ul style={{marginTop:"10%"}}>
      {todos.map((todo) => (
        <TodoItemRedux 
        key={todo.id}
        {...todo}
         />
      ))}
    </ul>
  );
};

export default TodoListRedux;
