import React, { useState } from 'react'
import NewSongForm from './NewSongForm';

const songData = [
    {
        id: 1,
        title: 'born to lose',
        artist: 'johnny thunders'
    },
    {
        id: 2,
        title: 'one way ticket',
        artist: 'the nerves'
    },
    {
        id: 3,
        title: 'intro',
        artist: 'glue'
    },
]

export const SongList = () => {
    const [songs, setSongs] = useState(songData);

    const addSong = (payload) => {
        console.log(payload);
        setSongs([...songs, { payload, id: Math.floor(Math.random()*(1-20)+1)}])
    }

  return (
    <div>
        <h4>song lists</h4>
        {songs.map((song) => (
            <div key={song.id}>
                <h4>title: {song.title}</h4>
                <h4>artist: {song.artist}</h4>
            </div>
        ))}
        <NewSongForm addSong={addSong}/>
    </div>
  )
}
