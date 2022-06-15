import React, { useState } from 'react'
import Card from '../UI/Card'

export default function AddUser() {
    const [userData, setUserdata] = useState()

    const changeHandler = (e) => {
        //name of the input
        const name = e.target.name
        //default value from the dom
        const value = e.target.value;
        //set to the setter, spread both into an obj with name and value
        setUserdata(userData => ({ ...userData, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (userData.username.trim().length === 0 || userData.animal.trim().length === 0) {
            return
        }
        console.log(userData);
        setUserdata()
    }
    
    return (
    <div>
        <Card>
        <h3>state mini prac</h3>
        <form onSubmit={submitHandler}>
            <label htmlFor='username'>Username</label>
            <input 
                type='text' 
                name='username' 
                placeholder='enter your username'
                onChange={changeHandler}
            />
            <label htmlFor='favorite-animal'>Favroite animal</label>
            <input 
                type='text' 
                name='animal' 
                placeholder='enter your favorite animal'
                onChange={changeHandler}     
            />
            <button type='submit'>save your info</button>
        </form>
        </Card>
    </div>
  )
}
