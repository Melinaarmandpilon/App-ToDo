import React from 'react'
import { useDispatch } from "react-redux";
import {allTodo } from "../../actions/index";

export default function All() {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="button"
             onClick={()=>dispatch(allTodo())}
            >All</button>
            
        </div>
    )
}
