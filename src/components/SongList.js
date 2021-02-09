import React from 'react'
import SongDisplay from './SongDisplay'

const SongList = ({ songs }) => {
    console.log(songs)

    const displaySongs = songs.map(song => {
        let name = song.track.name
        let album = song.track.album.name
        let artist = song.track.artists[0].name
        let imageURL = song.track.album.images[1].url
        return (
            <div>
                <SongDisplay
                    name={name}
                    album={album}
                    artist={artist}
                    imageURL={imageURL}
                />
            </div>
        )
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