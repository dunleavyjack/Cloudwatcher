import React from 'react'

const SongDisplay = ({name, album, artist, imageURL}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{album}</p>
            <p>{artist}</p>
            <p>{imageURL}</p>
        </div>
    )
}

export default SongDisplay