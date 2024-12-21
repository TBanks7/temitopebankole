import React, { useState, useEffect } from 'react';
import getNowPlayingItem from '../../pages/api/spotify';
// import SpotifyWebApi from 'spotify-web-api-js';



const ListeningNow = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});

    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            console.log(results)
            setResult(results[0]);
            setLoading(false);
        });
    });


    // useEffect(() => {
    //     // Authenticate with Spotify API
    //     spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

    //     // Fetch the currently playing track
    //     spotifyApi.getMyCurrentPlayingTrack()
    //         .then(response => {
    //             setCurrentTrack(response.body.item);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching current track:', error);
    //         });
    // }, [spotifyApi]);

    // if (!currentTrack) {
    //     return <div>Loading...</div>;
    // }


    return (
        <div className="spotify-player">
            <img src={result.albumImageUrl} alt={`${result.title} album art`} />
            <div>
                <h3>{result.title}</h3>
                <p>{result.artist}</p>
                {/* <p>Playing for {currentTrack.progress_ms / 1000} seconds</p> */}
            </div>
        </div>
    )
}

export default ListeningNow
