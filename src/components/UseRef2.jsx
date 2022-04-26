import React, { useState, useEffect, useRef } from 'react'

function UseRef2() {
    const [name, setName] = useState('')
    //useref can have default value first render
    const renders = useRef(1)
    const prevName = useRef('')
    
    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name

    }, [name])

    return (
    <div>
        <h1>Renders: {renders.current}</h1>
            <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="form-control mb-3" />
        <h1>Prev Name: {prevName.current}</h1>
    </div>
  )
}

export default UseRef2