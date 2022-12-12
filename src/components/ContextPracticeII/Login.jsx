import React from 'react'
import { useContext } from 'react'
import PracticeContext from './context/contextpracticeII'

export default function Login() {
    const context = useContext(PracticeContext);

    const logoutFunc = () => {
        context.onLogout()
    }
  return (
    <div>loggedin
        <button onClick={logoutFunc}>logout</button>
    </div>
  )
}
