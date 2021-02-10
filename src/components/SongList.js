import React from 'react'
import SongDisplay from './SongDisplay'

const SongList = ({ songs }) => {
    console.log(`songs: ${songs}`)

    const displaySongs = songs.map(song => {
        return <SongDisplay 
            key={song.track.id} 
            id={song.track.id} 
            name={song.track.name} 
            album={song.track.album.name} 
            artist={song.track.artists[0].name} 
            imageURL={song.track.album.images[1].url} 
        />  
    })
    return (
        <div>
            {displaySongs}
        </div>
    )
}

export default SongList