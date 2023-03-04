import React, { useEffect, useState } from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import ITodo from "../../interfaces";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { addTodo } from "../../redux/store/todoSlice";
import TodoFormRedux from "../TodoFormRedux";
import TodoListRedux from "../TodoListRedux";

const TodoPage: React.FunctionComponent = () => {
  const API = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  
async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>(API)
      setTodo(res.data)
    } catch (error) {
      alert(error) 
    }
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    if (title == "") {
      window.confirm("заполните поле!");
    }else{
      title = ""
    }
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteHandler = (id: number) => {
    const shoudRemove = window.confirm("Вы уверены, что хотите удалить дело?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo(text));
      setText('')
    }
  }

  return (
    <>
    {/* <div style={{display:"flex", justifyContent:'space-between'}}> */}
      <div>

      <TodoForm onAdd={addHandler}  />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={deleteHandler}
        />
        </div>
        {/* Код работает и внизу только на Redux Toolkit сделано */}
        {/* <div>
          <TodoFormRedux value={text} updateText={setText} handlerAction={handleAction} />
          <TodoListRedux />
        </div> */}
        {/* </div> */}
    </>
  );
};

export default TodoPage;
