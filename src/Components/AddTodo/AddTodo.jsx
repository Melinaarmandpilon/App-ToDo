import React, { useState } from "react";
import { addTodo } from "../../actions";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  

  function handleChange(e) {
    // console.log("e.target.value", e.target.value);
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task) {
      dispatch(addTodo(task));
      setTask("");
    }
  }

  return (

    <form className="todo" onSubmit={handleSubmit}>
      <div className="todo__check">
        <input type="checkbox" aria-checked disabled />
      </div>
      <div className="todo__input-container">
        <input
          className="todo__input-container todo-input"  
          type="text"
          value={task}
          placeholder="Create a new todo"
          onChange={handleChange}
          
        />
      </div>
    </form>
  );
}

// export const AddTodo = ({addTodo}) => {
//     const [task, setTask] = useState("")

//     function handleChange (e) {
//         console.log("e.target.value",e.target.value)
//         setTask(e.target.value)
//     }

//     function handleSubmit (e){
//         e.preventDefault();
//         if (task) {
//             addTodo(task);
//             setTask("")
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} >
//             <input
//             type="text"
//             value={task}
//             placeholder="Create a new todo"
//             onChange={handleChange}
//             />
//             {/* <button type='submit'>
// 				Submit
// 			</button> */}

//         </form>
//     )
// }

// export default connect(null, {addTodo})(AddTodo)