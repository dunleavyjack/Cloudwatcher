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

export const getUser = async () => {
    const params = JSON.parse(localStorage.getItem('params'));
    console.log(await spotifyGetRequest("https://api.spotify.com/v1/me", params))
}

// export const getUser = async (access_token) => {
//     try {
//         const params = JSON.parse(localStorage.getItem('params'));
//         if (params) {
//             await axios.get("https://api.spotify.com/v1/me", {
//                 header: {
//                     "Authorization": "Bearer" + params.access_token
//                 }
//             }).then(response => {  
//                 console.log(response);
//             }).catch(err => {
//                 console.log(err)
//             });
//         }
//     } catch(error) {
//         console.log(error)
//     }
// }