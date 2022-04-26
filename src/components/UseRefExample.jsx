import React, { useRef } from 'react'

function UseRefExample() {
  const inputRef =useRef()
  const pRef = useRef()
  
  const onSubmit = (e) => {
      e.preventDefault()
      console.log(inputRef.current.value);
      pRef.current.innerText = 'goodbye'
  }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name"> name</label>
            <input 
            type="text"
            ref={inputRef} 
            id='name' 
            className="form-control mb-2" />
            <button type='submit' className='btn btn-primary'>submit</button>
        </form>
        <p ref={pRef}>hello</p>
    </div>
  )
}

export default UseRefExample