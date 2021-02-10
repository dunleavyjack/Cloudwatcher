import React from 'react'

const SongDisplay = ({name, id, album, artist, imageURL}) => {
    return (
        <div>
            <img src={imageURL} />
            <p>{name}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}

export default SongDisplay