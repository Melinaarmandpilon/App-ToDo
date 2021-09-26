import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../../actions/index";
import icon from "../../images/icon-cross.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Todos() {
  const filterList = useSelector((state) => state.filterList);

  const dispatch = useDispatch();

  return (
        <DragDropContext>
    <section className="todos">
      <div>
          <Droppable droppableId="filterList">
            {(provided) => (
              <ul
              {...provided.droppableProps} 
              ref={provided.innerRef}
              >
                {filterList?.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          className="todos_task"
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                        >
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
                              <button
                                onClick={() => dispatch(removeTodo(task.id))}>
                                <img src={icon} alt="delete" />
                              </button>
                            </div>
                        </li>
                      )}
                    </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
      </div>
    </section>
        </DragDropContext>
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
