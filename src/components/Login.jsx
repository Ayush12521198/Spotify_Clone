import React from 'react';
import styled from "styled-components";

export default function Login(){
    const handleClick=async()=>{
const clientId="bc199f47899d4811b5922b68d02b790f";
const redirectUrl="http:://localhost:3000/";
const apiUrl="https://accounts.spotify.com/authorize";
const scope=[
   "user-read-email",
   "user-read-private",
   "user-modify-playback-state",
"user-read-playback-state",
"user-read-currently-playing",
"user-read-recently-played",
"user-top-read",
];
window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
  " "
)}&response_type=token&show_daialog=true`;
    };
      return  (
      <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="spotify"/>
        <button onClick={handleClick}>Connnect Spotify</button>
      </Container>
      );
}
const Container =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
background-color:#1db954;
gap:5rem;
img{
height:20vh;
}
button{
    padding:1rem 5rem;
    border-radius:5rem;
    color:#49f585;
    border:none;
    background-color:black;
    font-size:1.4rem;
cursor:pointer;
}
`;