import { useState, useContext } from 'react'
import PracticeContext from './context/contextpracticeII';
import Login from './Login';

export default function ContextForm() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const contextPrac = useContext(PracticeContext)
    const formHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        contextPrac.onLogin(form)
    }

  return (
    <>
        <form onChange={formHandler} onSubmit={formSubmit}>
            <input 
                type='text'
                name='username'
            />
            <label></label>
            <input 
                type='text'
                name='password'
            />
            <button>submit!</button>
        </form>
        {contextPrac.loggedIn && <Login />}
    </>
  )
}
