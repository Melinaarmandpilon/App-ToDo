import {
  ACTIVE_TODO,
  ADD_TODO,
  ALL_TODO,
  CLEAR_COMPLETED,
  COMPLETED_TODO,
  FILTER_COMPLETED,
  REMOVE_TODO,
} from "../actions/type";

const initialState = {
  todosList: [],
  filterList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log("action.payload reducer tipo add", action.payload);
      return {
        ...state,
        todosList: [...state.todosList, action.payload],
        filterList: [...state.todosList, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todosList: state.todosList.filter((t) => t.id !== action.payload),
        filterList: state.filterList.filter((t) => t.id !== action.payload),
      };

    case COMPLETED_TODO:
      console.log("action.payload en COMPLETED_TODO", action.payload);
      return {
        ...state,
        todosList: state.todosList.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
        filterList: state.todosList.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case ALL_TODO:
      return {
        ...state,
        filterList: state.todosList,
      };
      
    case FILTER_COMPLETED:
      return {
        ...state,
        filterList: state.todosList.filter((t) => t.completed === true),
      };

    case ACTIVE_TODO:
      return {
        ...state,
        filterList: state.todosList.filter((t) => t.completed === false),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todosList: state.todosList.filter((t) => t.completed=== false),
        filterList: state.filterList.filter((t) => t.completed=== false),
      };
    // case COUNT_ACTIVE:
    //   return {
    //     ...state,
    //     filterList: state.todosList.length,
    //   };

    default:
      return state;
  }
}
export default reducer;
