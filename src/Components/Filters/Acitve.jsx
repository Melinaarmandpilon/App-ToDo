import React from "react";
import { useDispatch } from "react-redux";
import { activeTodo } from "../../actions";

export default function Active() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="button" onClick={() => dispatch(activeTodo())}>Active</button>
    </div>
  );
}
