import React, { useRef } from 'react'

interface TodoFormReduxProps {
 value: string;
 updateText: (str: string) => void;
 handlerAction: () => void
}

const TodoFormRedux: React.FC<TodoFormReduxProps> = ({value, updateText, handlerAction}) => {
  // const ref = useRef<HTMLInputElement>(null)
  // const keyUpHandle = (event: React.KeyboardEvent) => {
  //   if (event.key === "Enter") {
  //     props.onAdd(ref.current!.value);
  //     ref.current!.value = "";
  //   }
  // };
  return (
    <div>
      <div className="container">
        <input
          // ref={ref}
          type="text"
          id="title"
          placeholder="Введите название дела"
          style={{ color: "white", fontSize: '25px', borderRight: '1px solid white', borderLeft: '1px solid white', textAlign: 'center' }}
          // onKeyUp={keyUpHandle}
          onChange={(e) => updateText(e.target.value) }
        />
        {/* <label style={{ fontSize: '30px', color: 'white', textAlign: "center", marginTop: '100px' }} htmlFor="title" >
          Список всех дел...
        </label> */}
        <button style={{padding:"20px 100px", border:"1px solid white", background:'transparent', color:'white', fontSize: '19px' , marginTop:'20px'}}
        onClick={handlerAction}
        >Добавить дело</button>
      </div>
    </div>
  )
}

export default TodoFormRedux