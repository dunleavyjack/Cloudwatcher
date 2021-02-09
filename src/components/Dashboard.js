import React from 'react';
import { getUsersSavedTracks } from '../utils/functions';
import SongDisplay from './SongDisplay'
import SongList from './SongList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])

    const showUsersSavedTracks = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()        
        usersSavedTracksArray.map(savedTrack => {
            setLikedSongs([...likedSongs, savedTrack])
        })

        
        // const theSongs = usersSavedTracksArray.map(savedTrack => {
        //     let name = savedTrack.track.name
        //     let album = savedTrack.track.album.name 
        //     let artist = savedTrack.track.artists[0].name
        //     let imageURL = savedTrack.track.album.images[1].url
        //     console.log(`${name}, ${album}, ${artist}, ${imageURL}`)
        // });
        // setLikedSongs([...likedSongs, theSongs])
    }

    // const showUsersSavedTracks = async () => {
    //     const usersSavedTracksArray = await getUsersSavedTracks()        
    //     const theSongs = usersSavedTracksArray.map(savedTrack => {
    //         let name = savedTrack.track.name
    //         let album = savedTrack.track.album.name 
    //         let artist = savedTrack.track.artists[0].name
    //         let imageURL = savedTrack.track.album.images[1].url
    //         console.log(`${name}, ${album}, ${artist}, ${imageURL}`)
    //     });
    //     console.log(`did this work ${theSongs}`);
    //     setLikedSongs(theSongs);
    // }
    
    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => showUsersSavedTracks()}>Get Saved Songs</button>
            <SongList songs={likedSongs}/>
        </div>
    )
};

export default Dashboard;