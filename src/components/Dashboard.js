import React from 'react';
import { getUsersSavedTracks, getSongAnalysis, getRecentlyPlayedTracks } from '../utils/functions';
import SongList from './SongList'
import DataList from './DataList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])
    const [playedSongs, setPlayedSongs] = useState([])

    const handleClick = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()  
        setLikedSongs(usersSavedTracksArray)
    }
    
    const handleSecondClick = async () => {
        const analysis = await getSongAnalysis('7p8CYARhjoN78QHsF5RZfV')
        console.log(playedSongs)
    }

    const handleThirdClick = async () => {
        const usersRecentlyPlayed = await getRecentlyPlayedTracks()
        // setPlayedSongs(usersRecentlyPlayed)
        setPlayedSongs(usersRecentlyPlayed)
    }

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => handleClick()}>Get Saved Songs</button>
            <button onClick={() => handleSecondClick()}>Get Analysis Test</button>
            <button onClick={() => handleThirdClick()}>Get Recently Played Tracks</button>
            <SongList songs={likedSongs} />
            <SongList songs={playedSongs} />
            <DataList songs={playedSongs} />
        </div>
    )
};

export default Dashboard;