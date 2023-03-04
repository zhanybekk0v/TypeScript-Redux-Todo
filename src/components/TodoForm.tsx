import { TextField } from "@mui/material";
import React, { useRef } from "react";
import { serialize } from "v8";
import '../index.css'

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyUpHandle = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="container">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        style={{ color: "white", fontSize:'25px', borderRight:'1px solid white',borderLeft:'1px solid white', textAlign:'center' }}
        onKeyUp={keyUpHandle}
      />  
      <label style={{fontSize:'30px', color:'white', textAlign:"center", marginTop:'100px'}} htmlFor="title" >
    Список всех дел...
      </label>
    </div>
  );
};

export default TodoForm;
