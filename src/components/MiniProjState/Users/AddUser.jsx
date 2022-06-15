import React, { useState } from 'react'

export default function AddUser() {
    const [userData, setUserdata] = useState()

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserdata(userData => ({ ...userData, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }
    
    return (
    <div>
        <h3>state mini prac</h3>
        <form onSubmit={submitHandler}>
            <label htmlFor='username'>Username</label>
            <input 
                type='text' 
                name='username' 
                placeholder='enter your username'
                onChange={changeHandler}
                value='name'
            />
            <label htmlFor='favorite-animal'>Favroite animal</label>
            <input 
                type='text' 
                name='animal' 
                placeholder='enter your favorite animal'
                onChange={changeHandler}
                value='animal'
            />
            <button type='submit'>save your info</button>
        </form>
    </div>
  )
}
