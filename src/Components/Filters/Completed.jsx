import React from "react";
import { useDispatch } from "react-redux";
import {completed } from "../../actions/index";


export default function Completed() {
  const dispatch = useDispatch()

  return (
    <div>
      <button className="button"
         onClick={()=>dispatch(completed())}
      >
          Completed
      </button>
    </div>
  );
}
