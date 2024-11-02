import React from 'react';
import './LandingPage.css';
import spotifyLogo from './spotify-logo.png'; // Spotify logo image

const LandingPage = ({ onConnect }) => {
    return (
        <div className="landing-page">
            <div className="container">
                <h1 className="title">
                    <div>YOUR</div>
                    <div>SPOTIFY</div>
                    <div>OUTFIT</div>
                </h1>
                <p className="subtitle">Your Outfit, Inspired by Your Music Taste</p>
                <button className="connect-button" onClick={onConnect}>
                    <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
                    Connect Spotify
                </button>

                <a 
                    href="https://accounts.spotify.com/authorize?client_id=ceae01a497814f499f7aebd4830653cb&response_type=token&redirect_uri=http://localhost:3000&scope=user-read-private,user-read-email,playlist-modify-public&state=STATE&show_dialog=true"
                    className="connect-button"
                >
                    
                </a>
            </div>
        </div>
    );
};

export default LandingPage;