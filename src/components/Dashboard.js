import React from 'react';
import { getUsersSavedTracks, getSongAnalysis } from '../utils/functions';
import SongList from './SongList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])

    const handleClick = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()  
        setLikedSongs(usersSavedTracksArray)
    }
    
    const handleSecondClick = async () => {
        const analysis = await getSongAnalysis('7p8CYARhjoN78QHsF5RZfV')
    }

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => handleClick()}>Get Saved Songs</button>
            <button onClick={() => handleSecondClick()}>Get Analysis Test</button>
            <SongList songs={likedSongs}/>
        </div>
    )
};

export default Dashboard;