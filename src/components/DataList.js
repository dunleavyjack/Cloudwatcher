import React from 'react'
import DataDisplay from './DataDisplay'

const DataList = ({ songs }) => {
    console.log(songs)
    const displaySongs = songs.map(song => {
        return <DataDisplay 
            acousticness={song.acousticness}
            danceability={song.danceability} 
            duration_ms={song.duration_ms} 
            energy={song.energy}
            id={song.id}
            instrumentalness={song.instrumentalness}
            key={song.key}
            liveness={song.liveness}
            loudness={song.loudness}
            mode={song.mode} 
            speechiness={song.speechiness}
            tempo={song.tempo}
            time_signature={song.time_signature}
            track_href={song.track_href} 
            type={song.type}
            uri={song.uri}
            valence={song.valence}
        />
    });
    return (
        <div>
            {displaySongs}
        </div>
    )
};

export default DataList