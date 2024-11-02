import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoadingScreen from './LoadingScreen';
import ResultsPage from './ResultsPage';
import './App.css'; // Optional: Import your global styles if you have any

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [genre, setGenre] = useState('');

    const handleConnect = () => {
        setIsLoading(true);
        // Simulate an API call to connect to Spotify
        setTimeout(() => {
            // Mock data for genre
            setGenre('Goth'); // Example genre
            setIsLoading(false);
        }, 9000); // Simulate loading time (9 seconds)
    };
    function getAccessTokenFromURL() {
        var accessToken = null;
        var hash = window.location.hash.substring(1);
        var params = hash.split('&');
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            if (param[0] === 'access_token') {
                accessToken = param[1];
                break;
            }
        }
        return accessToken;
    }
    // Check if the URL contains an access token
    window.addEventListener("load", function() {
        var accessToken = getAccessTokenFromURL();
        if (accessToken) {
            // If access token is present, store it in sessionStorage
            sessionStorage.setItem('accessToken', accessToken);
            // Redirect to the main page or perform other actions
            window.location.href = "http://localhost:3000";
        }
    });

    return (
        <div className="App">
            {isLoading ? (
                <LoadingScreen />
            ) : genre ? (
                <ResultsPage genre={genre} />
            ) : (
                <LandingPage onConnect={handleConnect} />
            )}
        </div>
    );
}

export default App;