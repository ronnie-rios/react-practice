import React from 'react'
import FormExamp2 from './FormExamp2'

export default function PassStateUp() {
    const saveFormData = (enteredData) => {
        const data = {
            ...enteredData
        }
        console.log(data);
    }
  return (
    <div>
        <h2>lifting state</h2>
        <FormExamp2 onFormdata={saveFormData}/>
    </div>
  )
}
