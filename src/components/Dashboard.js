import React from 'react';
import { getUsersSavedTracks } from '../utils/functions';
import SongDisplay from './SongDisplay'
import SongList from './SongList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])
    const [displayedSongs, setDisplayedSongs] = useState([])

    const showUsersSavedTracks = async () => {
        const usersSavedTracksArray = await getUsersSavedTracks()        
        usersSavedTracksArray.map(savedTrack => {
            console.log(likedSongs)
            setLikedSongs([...likedSongs, savedTrack])
        })
    }

    const displayAllSongs = () => {
        showUsersSavedTracks()
        setDisplayedSongs([...displayedSongs, likedSongs])
    }

    return(
        <div>
            <p>Dashboard</p>
            <button onClick={() => displayAllSongs()}>Get Saved Songs</button>
            <SongList songs={likedSongs}/>
        </div>
    )
};

export default Dashboard;