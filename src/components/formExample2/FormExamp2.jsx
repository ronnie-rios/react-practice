import React, { useState } from 'react'

function FormExamp2 (props) {
    const [form, setForm] = useState()

    const formHandler = (e) => {
        e.preventDefault()
        const name= e.target.name
        const value = e.target.value
        setForm((prevState) => {  
            return {...prevState, [name]: value}
        }) 
    }
    const formSubmit = (e) => {
        e.preventDefault();
        
        props.onFormdata(form)
    }
    return (
        <div>
            <h3>form example with one handler</h3>
            <form onChange={formHandler} onSubmit={formSubmit}>
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