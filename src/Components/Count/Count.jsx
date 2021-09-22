import React from 'react'
import { useSelector } from 'react-redux'

export default function Count() {
    const filterList = useSelector(state => state.filterList)
    const todosList = useSelector(state => state.todosList)
    
    return (
        <div>
          {todosList.length-filterList.filter(task => task.completed).length } items left
        </div>
    )
}
