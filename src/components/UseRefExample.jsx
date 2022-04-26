import React from 'react'

function UseRefExample() {
  return (
    <div>
        <form>
            <label htmlFor="name"> name</label>
            <input type="text" id='name' className="form-control mb-2" />
            <button type='submit' className='btn btn-primary'>submit</button>
        </form>
    </div>
  )
}

export default UseRefExample