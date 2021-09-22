import React from "react";
import { useDispatch } from "react-redux";
import {clearCompleted } from "../../actions/index";


export default function Completed() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className="button"
         onClick={()=>dispatch(clearCompleted())}
      >
          Clear Completed
      </button>
    </div>
  );
}
