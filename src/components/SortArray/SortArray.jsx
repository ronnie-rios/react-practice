import React, { useState } from 'react';

const data = [
    { name: 'momo', category: 'sleeping', age: 6 },
    { name: 'ajax', category: 'yodeling', age: 7 },
    { name: 'biscuit', category: 'aggressive', age: 5 }
]

export default function SortArray() {
    const [sort, setSort] = useState(false)
    const newArray = [...data]
    const obj2 = [...newArray]
    newArray.sort((first, second) => first.age - second.age)


  return (
    <div>
        <h2>sorting through an array</h2>
        {!sort && data.map(item =>
            <ul>
                <li>{item.name}, {item.category}, {item.age}</li>
            </ul>    
        )}
        <button onClick={setSort}>sort by age</button>
        {sort && newArray.map(item => 
            <ul>
                <li>{item.name}, {item.category}, {item.age}</li>
            </ul>   
        )}
    </div>
  )
}
