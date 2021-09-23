import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../../actions/index";
import icon from "../../images/icon-cross.svg";

export default function Todos() {
  const filterList = useSelector((state) => state.filterList);

  // const mapStateToProps = (state) => ({
  //   filterList: state.filterList
  // });
  const dispatch = useDispatch();

  return (
    <div className="todos">
      {filterList?.map((task) => (
        <div key={task.id}>
          <div className="todos__input-container">
            <div className="todos__input-container_check">
              <input
                type="checkbox"
                onClick={() => dispatch(completedTodo(task.id))}
              />
              <div>
                <label>{task.descripcion}</label>
              </div>
            </div>
            <button onClick={() => dispatch(removeTodo(task.id))}>
              <img src={icon} alt="delete" />
            </button>
          </div>
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
