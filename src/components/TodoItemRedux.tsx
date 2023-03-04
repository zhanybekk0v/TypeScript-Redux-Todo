import React from 'react'
import { useAppDispatch } from '../redux/hooks/hooks';
import { removeTodo, toggleComlete } from '../redux/store/todoSlice';

interface TodoItemReduxProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItemRedux:React.FC<TodoItemReduxProps> = ({id, title, completed}) => {
  const dispatch = useAppDispatch()

  return (
    <div style={{width:"70%", height:'50px', backgroundColor:"white", margin:"0 auto", marginTop:"10%"}}>
       <li  >
            <label style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
              <div>
              <input type="checkbox" className='checkbox-customs' checked={completed} onChange={() => dispatch(toggleComlete(id))}  />
              </div>
            <div>
              <h6 style={{ color: 'black' }}>{title}</h6>
            </div>
            <div>

              <i 
                className="material-icons red-text"
                onClick={() => dispatch(removeTodo(id))}
                >
                delete
              </i>
                </div>
            </label>
          </li>
    </div>
  )
}

export default TodoItemRedux