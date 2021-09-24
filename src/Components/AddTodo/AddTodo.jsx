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
    <section className="addtodo">
      <form className="addtodo_form" onSubmit={handleSubmit}>
        <div className="addtodo_check">
          <input 
          // className="addtodo_input"
          type="checkbox"
          disabled />
        </div>
        <input
          className="addtodo__input-container"
          type="text"
          value={task}
          placeholder="Create a new todo"
          onChange={handleChange}
        />
      </form>
    </section>
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
