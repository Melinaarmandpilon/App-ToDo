import React from 'react'
import { useSelector } from 'react-redux'

export default function Count() {
    const todosList = useSelector(state => state.todosList)
    
    return (
        <div className="button">
          {todosList.filter(t=>t.completed===false).length } items left
        </div>
    )
}
