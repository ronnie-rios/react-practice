import React, { useState } from 'react'

export default function EventHandling() {
    const [title, setTitle] = useState('default title')

    const changeTitle = () => {
        setTitle('Momo')
    }
    return (
    <div>
        <h1>{title}</h1>
        <ul>
            <li><button onClick={changeTitle}>change me</button></li>
            <li><button onClick={changeTitle}>song</button></li>
            <li><button onClick={changeTitle}>quote</button></li>
        </ul>
    </div>
  )
}
