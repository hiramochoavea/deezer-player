import { useState } from "react";
import { songsContext } from "./SongsContext";


export const SongsProvider = ({ children }) => {

    const [searchTitle, setSearchTitle] = useState(undefined);
    const [searchResults, setSearchResults] = useState(null);
    const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);    
    const [playingTrack, setPlayingTrack] = useState({});

    const onPlayingTrack = (songId) => {
        const foundSong = searchResults.find( (song) => song.id === songId );
        setPlayingTrack( foundSong );
    };

    return (
        <songsContext.Provider
            value={{
                searchTitle, setSearchTitle, searchResults,
                setSearchResults, isMusicPlayerOpen, setIsMusicPlayerOpen,
                playingTrack, setPlayingTrack, onPlayingTrack
            }}
        >
            {children}
        </songsContext.Provider>
    );

};