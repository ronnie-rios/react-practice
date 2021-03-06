import React, { useState, useRef, useEffect } from 'react'

function ToDo() {
    const [loading, setLoading] = useState(true)

    const [todo, setTodo] = useState({})
    const isMounted = useRef(true)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            if(isMounted.current) {
               setTimeout(() => {
                setTodo(data)
                setLoading(false)
            }, 3000) 
            }
            
        })
        return () =>{
            isMounted.current = false
        }
    }, [isMounted])

    return (
    <div>
        {loading ? <h3>loading</h3> : <h1>{todo.title}</h1>}
    </div>
  )
}

export default ToDo