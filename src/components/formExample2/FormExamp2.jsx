import React, { useState } from 'react'

function FormExamp2() {
    const [form, setForm] = useState()

    const formHandler = (e) => {
        e.preventDefault()
        const name= e.target.name
        const value = e.target.value
        setForm({...form, [name]: value})
    }
    console.log(form);
    return (
        <div>
            <h3>form example with one handler</h3>
            <form onChange={formHandler}>
                <input 
                    type="text"
                    name='name'
                    placeholder='name'
                 />
                <input 
                    type="text"
                    name='email'
                    placeholder='email'
                 />
                <button>submit</button>
            </form>
            {form && <div>
                <h3>name: {form.name}</h3>
                <h3>email: {form.email}</h3>
            </div> }
        </div>
    )
}

export default FormExamp2