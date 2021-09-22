import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../../actions/index";
import icon from "../../images/icon-cross.svg";
// import styles from "./Todos.module.css"

export default function Todos() {
  const filterList = useSelector((state) => state.filterList);
  
  // const mapStateToProps = (state) => ({
  //   filterList: state.filterList
  // });
  const dispatch = useDispatch();
  // console.log("todos",todos)
  return (
    <div className="todos">
      {filterList?.map((task) => (
        <div key={task.id} className="todos__input-container">
          <div className="todos_check">
          <input
            type="checkbox"
            onClick={() => dispatch(completedTodo(task.id))}
          />
          <label className="todos__description">{task.descripcion}</label>
          </div>
          <button onClick={() => dispatch(removeTodo(task.id))}>
            <img src={icon} alt="delete" />
          </button>
        </div>
      ))}
    </div>
  );
}

// export const Todos = ({ filterList,removeTodo }) => {

//   // console.log("todos",todos)
//   return (
//     <div >
//       { filterList?.map((t) => (
//         <div key={t.id}>
//           <input type="checkbox"/>
//           <label > {t.descripcion}</label>
//           <button
//           onClick={() => removeTodo(t.id)}>X</button>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default connect(mapStateToProps, { removeTodo })(
//   Todos
// );
