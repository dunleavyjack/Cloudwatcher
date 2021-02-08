import React from 'react';
import { getUsersSavedTracks } from '../utils/functions';
import SongDisplay from './SongDisplay'

// const showUsersSavedTracks = async () => {
//     const usersSavedTracksArray = await getUsersSavedTracks()
//     usersSavedTracksArray.map(savedTrack => {
//         let name = savedTrack.track.name
//         let album = savedTrack.track.album.name 
//         let artist = savedTrack.track.artists[0].name
//         let imageURL = savedTrack.track.album.images[1].url
//         return <SongDisplay name={name} album={album} artist={artist} imageURL={imageURL} />
//     })
//     // return displayedTracks 
// }


const Dashboard = () =>  {    
    const showUsersSavedTracks = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()
        usersSavedTracksArray.map(savedTrack => {
            let name = savedTrack.track.name
            let album = savedTrack.track.album.name 
            let artist = savedTrack.track.artists[0].name
            let imageURL = savedTrack.track.album.images[1].url
            return <SongDisplay name={name} album={album} artist={artist} imageURL={imageURL} />
        })
    }
    
    
    
    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => showUsersSavedTracks()}>Get Saved Songs</button>
            <p>{showUsersSavedTracks()}</p>
        </div>
    )
};

export default Dashboard;