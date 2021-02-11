import React from 'react';
import { getUsersSavedTracks, getSongAnalysis, getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
import SongList from './SongList'
import DataList from './DataList'
import { useState } from 'react';


const Dashboard = () =>  {    
    const [likedSongs, setLikedSongs] = useState([])
    const [playedSongs, setPlayedSongs] = useState([])
    const [playedSongsData, setPlayedSongsData] = useState([])

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
        setPlayedSongs(usersRecentlyPlayed)
    }
    
    const handleFourthClick = async () => {
        const theSongData = await getSongAnalysisArray(playedSongs)
        console.log(theSongData)
        setPlayedSongsData(theSongData)
    }

        // const songsData = await Promise.all(playedSongs.map( async (song) => {
        //     getSongAnalysis(song.track.id)
        // }))
        // setPlayedSongsData(songsData)

    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => handleClick()}>Get Saved Songs</button>
            <button onClick={() => handleSecondClick()}>Get Analysis Test</button>
            <button onClick={() => handleThirdClick()}>Get Recently Played Tracks</button>
            <button onClick={() => handleFourthClick()}>Get Recently Played Tracks Data</button>
            <DataList songsData={playedSongsData} recentlyPlayed={playedSongsData} />
            <SongList songs={likedSongs} />
            <SongList songs={playedSongs} />

        </div>
    )
};

export default Dashboard;