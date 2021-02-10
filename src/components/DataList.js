import React from 'react'
import DataDisplay from './DataDisplay'

const DataList = ({ songs }) => {
    console.log(songs)
    const displaySongs = songs.map(song => {
        return <DataDisplay 
            acousticness={song.acousticness}
            // danceability: 
            // duration_ms: 
            // energy: 
            // id: 
            // instrumentalness: 
            // key: 
            // liveness: 
            // loudness: 
            // mode: 
            // speechiness:
            // tempo:
            // time_signature: 
            // track_href: 
            // type: 
            // uri: 
            // valence: 
        />
    });
    return (
        <div>
            {displaySongs}
        </div>
    )
};

export default DataList