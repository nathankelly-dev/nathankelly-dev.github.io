/* Must have an access token to use this app:
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=CLIENTID&client_secret=CLIENTSECRET"
*/

const getSpotifyData = () => {
    const input = document.getElementById("song-input").value;
    const regex = /spotify.com\/(track|album|artist|playlist|show)\/(\w+)/;
    const match = input.match(regex);
    const type = match[1];
    const id = match[2];

    const apiUrl = `https://api.spotify.com/v1/${type}s/${id}`;
  
    fetch(apiUrl, {
      headers: {
        "Authorization": "Bearer ACCESS_TOKEN"
      }
    })
    .then(response => response.json())
    .then(data => {
        let output;

        if (type == 'track') {
            const songName = data.name;
            const artistName = data.artists[0].name;
            const songDuration = data.duration_ms;
            const releaseDate = data.album.release_date;
            const songPopularity = data.popularity;
            const imgSrc = data.album.images[0].url;

            output = `
            <h2>${type.toUpperCase()}</h2>
            <p class="h4"><b>Name:</b> ${songName}</p>
            <p class="h4"><b>Artist:</b> ${artistName}</p>
            <p class="h4"><b>Duration:</b> ${songDuration}</p>
            <p class="h4"><b>Release Date:</b> ${releaseDate}</p>
            <p class="h4"><b>Popularity:</b> ${songPopularity}</p>
            <br>
            <br>
            <img src="${imgSrc}">
            `;
        }
        else if (type == 'album') {
            const albumName = data.name;
            const artistName = data.artists[0].name;
            const releaseDate = data.release_date;
            const totalTracks = data.total_tracks;
            const imgSrc = data.images[0].url;
            output = `
            <h2>${type.toUpperCase()}</h2>
            <p class="h4"><b>Name:</b> ${albumName}</p>
            <p class="h4"><b>Artist:</b> ${artistName}</p>
            <p class="h4"><b>Release Date:</b> ${releaseDate}</p>
            <p class="h4"><b>Number of tracks:</b> ${totalTracks}</p>
            <br>
            <br>
            <img src="${imgSrc}">
            `;
        }
        else if (type == 'artist') {
            const artistName = data.name;
            const artistGenre = data.genres;
            const artistFollowers = data.followers.total;
            const artistPopularity = data.popularity;
            const imgSrc = data.images[0].url;
            output = `
            <h2>${type.toUpperCase()}</h2>
            <p class="h4"><b>Name:</b> ${artistName}</p>
            <p class="h4"><b>Genres:</b> ${artistGenre}</p>
            <p class="h4"><b>Follower count:</b> ${artistFollowers}</p>
            <p class="h4"><b>Popularity:</b> ${artistPopularity}</p>
            <br>
            <br>
            <img src="${imgSrc}">
            `;
        }
        else if (type == 'playlist') {
          const playlistName = data.name;
          const playlistDescription = data.description;
          const playlistOwner = data.owner.display_name;
          const playlistTrackTotal = data.tracks.total;
          const playlistFollowerTotal = data.followers.total;
          const imgSrc = data.images[0].url;
          output = `
          <h2>${type.toUpperCase()}</h2>
          <p class="h4"><b>Name:</b> ${playlistName}</p>
          <p class="h4"><b>Description:</b> ${playlistDescription}</p>
          <p class="h4"><b>Playlist owner:</b> ${playlistOwner}</p>
          <p class="h4"><b>Number of tracks:</b> ${playlistTrackTotal}</p>
          <p class="h4"><b>Number of followers:</b> ${playlistFollowerTotal}</p>
          <br>
          <br>
          <img src="${imgSrc}">
          `;
        }
      document.getElementById("song-data").innerHTML = output;
    })
    .catch(error => document.getElementById("song-data").innerHTML = 'Please use a valid Shopify share link');
  }

  //https://open.spotify.com/track/0rId54pPe7UIc3QWLODDI5?si=658f7b8a24fa4934