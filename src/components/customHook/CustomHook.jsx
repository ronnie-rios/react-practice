import React, { useEffect, useState } from 'react';

export default function CustomHook() {
    const [joke, setJoke] = useState('')
    const fetchJoke = async () => {
        try {
            let response = await fetch('https://icanhazdadjoke.com/')
            let data = await response.json()
            console.log(joke);
            setJoke(data)
            console.log(data, 'data');
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchJoke()
    }, [])
  return (
    <div>
        <h3>joke</h3>
        <button onClick={fetchJoke}>click for a joke</button>
        <p>Joke: {joke}</p>
    </div>
  )
}
