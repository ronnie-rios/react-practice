import { useState } from 'react'

const NewSongForm = ({ addSong}) => {
    const [formData, setFormData]= useState({
        artist: '',
        title: ''
    })
    const formHandler=(e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prevState) => {  
            return {...prevState, [name]: value}
        }) 
    };
    const formSubmit = (e) => {
        e.preventDefault();
        addSong(formData);
    }
  return (
    <form onSubmit={formSubmit} onChange={formHandler}>
        <label>song name</label>
        <input type='text'name='title'/>
        <label>artist</label>
        <input type='text' name='artist'/>
        <button>submit</button>
    </form>
  )
}

export default NewSongForm