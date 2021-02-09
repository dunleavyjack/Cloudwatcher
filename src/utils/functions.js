import axios from 'axios';

export const getParamValues = (url) => {
    console.log(`hi + ${url}`)
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));
        if (params) {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${params.access_token}`;
        }
    } catch (error) {
        console.log('Error setting auth', error)
    }
}

export const spotifyGetRequest = async (url, params) => {
    setAuthHeader();
    const result = await axios.get(url, params);
    return result.data;
};

// Returns the very important array of song data
export const getUsersSavedTracks = async () => {
    const params = JSON.parse(localStorage.getItem('params'));
    const songData = await spotifyGetRequest("https://api.spotify.com/v1/me/tracks", params)
    console.log(songData.items)
    return songData.items

    // console.log(await spotifyGetRequest("https://api.spotify.com/v1/me/tracks", params))
    // return await spotifyGetRequest("https://api.spotify.com/v1/me/tracks", params)
}
