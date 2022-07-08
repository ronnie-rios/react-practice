import React, { useState } from 'react'

const items = [
    {
        name: 'momo',
        id: 1
    },
    {
        name: 'biscuit',
        id: 2
    },
    {
        name: 'ajax',
        id: 3
    },
]

export default function ArrMethods() {
    const [cats, setCats] = useState(items)
    const deleteHandler = (e) => {
        if (e.target.value === items.id) {
            setCats(cats.filter(cat => cat.id))
        }
    }
  return (
    <div>
        <h2>utilize diff array methods</h2>
        <h4>view all cats</h4>
        {cats.map(cat => 
            <div>
                <p>{cat.name}</p>
                <button value={cat.id} onClick={deleteHandler}>delete</button>
            </div>
        )}
        
    </div>
  )
}
