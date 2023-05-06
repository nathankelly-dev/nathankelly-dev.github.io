const clientId = '1ca8f3eff90b41038085cfc40033aa8f';
const redirectUri = 'http://127.0.0.1:4000/spotify-api-test';
const scopes = ['user-read-private', 'playlist-read-private', 'playlist-modify-public', 'playlist-modify-private'];
const state = 'some-random-state';
const clientSecret = 'YOUR_CLIENT_SECRET';

// Check if access token already exists in local storage
const accessToken = localStorage.getItem('spotify_access_token');

// Release Radar
const releaseRadarID = '37i9dQZEVXbvNL5ENMCdXs';
fetch(`https://api.spotify.com/v1/playlists/${releaseRadarID}`, {
    headers: {
        'Authorization': 'Bearer ' + accessToken
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});

// Release Music
const releaseMusicID = '0kRoSVtidHPUKTj55WMxhG?si=1c068afccd5d414e';
fetch(`https://api.spotify.com/v1/playlists/${releaseMusicID}`, {
    headers: {
        'Authorization': 'Bearer ' + accessToken
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
    
    for (let i = 0; i < data.tracks.items.length; i++) {
        console.log(data.tracks.items[i].track.name);
    }
})
.catch(error => {
    console.error('Error:', error);
});