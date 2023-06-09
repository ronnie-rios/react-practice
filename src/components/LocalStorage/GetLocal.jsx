import { useState } from 'react'

const GetLocal = () => {
  const [storage, setStorage] = useState(() => {
    const storedArray = localStorage.getItem('myArray');
    return storedArray ? JSON.parse(storedArray) : [];
  });
  return (
    <div>GetLocal</div>
  )
}

export default GetLocal