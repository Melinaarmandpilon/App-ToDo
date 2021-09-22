import {
  ACTIVE_TODO,
  ADD_TODO,
  ALL_TODO,
  CLEAR_COMPLETED,
  COMPLETED_TODO,
  FILTER_COMPLETED,
  REMOVE_TODO,
} from "./type";

let count = 0;
export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: {
      descripcion: task,
      id: count++,
      completed: false,
    },
  };
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const completedTodo = (id) => {
  return {
    type: COMPLETED_TODO,
    payload: id,
  };
};

export const completed = (payload) => {
  return {
    type: FILTER_COMPLETED,
    payload
  };
};
export const allTodo = (payload) => {
  return {
    type: ALL_TODO,
    payload
  };
};
export const activeTodo = (payload) => {
  return {
    type: ACTIVE_TODO,
    payload
  };
};

export const clearCompleted = (payload) => {
  return {
    type: CLEAR_COMPLETED,
    payload
  };
};
// export const countActive = (payload) => {
//   return {
//     type: COUNT_ACTIVE,
//     payload
//   };
// };


// contador