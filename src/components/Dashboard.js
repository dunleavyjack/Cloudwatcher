import React from 'react';
import { getUsersSavedTracks } from '../utils/functions';
import SongList from './SongList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])

    const handleClick = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()  
        setLikedSongs(usersSavedTracksArray)
    }
    
    // const showUsersSavedTracks = async () => {
    //     const usersSavedTracksArray = await getUsersSavedTracks()        
    //     usersSavedTracksArray.map(savedTrack => {
    //         console.log(likedSongs)
    //         console.log(savedTrack.track.name)
    //         setLikedSongs([...likedSongs, savedTrack])
    //     })
    // }

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => handleClick()}>Get Saved Songs</button>
            <SongList songs={likedSongs}/>
        </div>
    )
};

export default Dashboard;