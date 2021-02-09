import React from 'react'
import SongDisplay from './SongDisplay'

const SongList = ({ songs }) => {
    console.log(`songs: ${songs}`)

    const displaySongs = songs.map(song => {
        return <SongDisplay key={song.track.id} name={song.track.name} album={song.track.album.name} artist={song.track.artists[0].name} imageURL={song.track.album.images[1].url} />  
    })
    return (
        <div>
            {displaySongs}
        </div>
    )
}

//     const showUsersSavedTracks = async () => {
//         const usersSavedTracksArray = await getUsersSavedTracks()
//         usersSavedTracksArray.map(savedTrack => {
//             let name = savedTrack.track.name
//             let album = savedTrack.track.album.name 
//             let artist = savedTrack.track.artists[0].name
//             let imageURL = savedTrack.track.album.images[1].url
//             return <SongDisplay name={name} album={album} artist={artist} imageURL={imageURL} />
//         });
//     }



//     return (
//         <div>
//             <p>Song List</p>
//             <SongDisplay name={"name"} album={'album'} artist={'artist'} imageURL={'imageURL'}/>
//             <button onClick={() => showUsersSavedTracks()}>Songs</button>
//         </div>
//     )
// }

export default SongList