import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../../actions/index";
import icon from "../../images/icon-cross.svg";

export default function Todos(props) {
  const filterList = useSelector((state) => state.filterList);
  const dispatch = useDispatch();

  return (
    <section className="todos">
      {filterList?.map((task) => (
        <div className="todos_task" draggable="true">
          <div className="addtodo_check">
            <input
              type="checkbox"
              id={task.id}
              onClick={() => dispatch(completedTodo(task.id))}
              checked={task.completed === true ? true : false}
            />
            <label>{task.descripcion}</label>
          </div>
          <div className="todos_delete">
            <button onClick={() => dispatch(removeTodo(task.id))}>
              <img src={icon} alt="delete" />
            </button>
          </div>
        </div>
      ))};
    </section>
  );
}

//----------UTILIZANDO CONNECT------------------------

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

// const mapStateToProps = (state) => ({
//   filterList: state.filterList
// });

// export default connect(mapStateToProps, { removeTodo })(
//   Todos
// );
