import React from 'react';

import { Container } from 'react-bootstrap';
// imports container component. 

// AUTH_URL defines the response_type, the redirect_uri and the scopes for authentication requests.
// client_id is public and does not pose a security risk by being in front end.
// Streaming scope allows application see see what user is currently listening to.
// User-read-email and User-read-private are requird scopes to access Spotify user information.
// user-library-read determines if a song is in the user library.
// user-library-modify allows uuser to add and remove songs from library.
// user-read-playback-state allows client to see if user is currently playing a song and what song it is.
// user-modify-playback-state allows user to play, pause, skip and repeat current track.
const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a097fe731b9c4be48ab93d3d005a07d0&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';


// Login function 
// Renders a button which redirects users to spotify to authenticate login.
export default function Login() {
    return <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh "}}>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
    </Container>
}