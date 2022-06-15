import React, { useState } from 'react'
import ToDo  from './ToDo'

function UseRef3() {
  const [showToDo, setShowToDo] = useState(true)


    return (
    <div>
        {showToDo && <ToDo />}
        <button className="btn btn-primary" 
            onClick={() => setShowToDo(!showToDo)}>
            Toggle Todo
            </button>
    </div>
  )
}

export default UseRef3