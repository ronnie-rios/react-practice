import React, { useState } from 'react'

export default function EventHandling() {
    const [title, setTitle] = useState('default title')
    const [userData, setUserdata] = useState({
        name: '',
        email: '',
        amount: ''
    })
    const changeTitle = () => {
        setTitle('Momo')
    }

    const formHandler = (e) => {
        setUserdata({
            //spread the data through the obj
            ...userData,
            name: e.target.value
        })
    }

    return (
    <div>
        <h1>{title}</h1>
        <ul>
            <li><button onClick={changeTitle}>change me</button></li>
            <li><button onClick={changeTitle}>song</button></li>
            <li><button onClick={changeTitle}>quote</button></li>
        </ul>
        <div>
            <form>
                <input type="text" name='name'/>
                <input type="text" name='name'/>
                <input type="text" name='name'/>
            </form>
        </div>
    </div>
  )
}
