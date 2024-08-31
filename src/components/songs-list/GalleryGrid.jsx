import { useState, useEffect, useRef } from 'react';
import MusicCard from './MusicCard';
import { useSongsContext } from '../../context/SongsContext';

const GalleryGrid = () => {

    const { searchResults, searchTitle, setIsMusicPlayerOpen } = useSongsContext();

    const galleryGridRef = useRef(null);
 
    useEffect(() => {
        const handleClickOutside = (event) => {
            const musicPlayerContainer = document.getElementById('music-player-container');

            if ( !galleryGridRef?.current?.contains(event.target) &&
                 !musicPlayerContainer?.contains(event.target)
            ) {
                // Close music player when the user clicks outside of gallery grid (except on music player).
                setIsMusicPlayerOpen(false);
            }        
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => {
        document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div id="gallery-grid-container" ref={galleryGridRef}>
            {searchResults?.length > 0 ? (
                searchResults?.map((result, index) => (
                    <MusicCard
                        key={result.id || index}
                        songId={result.id}
                        songTitle={result.title}
                        artistName={result.artist.name}
                        labelText={result.album.title}
                        albumCover={result.album.cover_big}
                    />
                    ))
                ) : (
                searchTitle && (<p className="no-results">No results found for this search.</p>)
            )}
        </div>                                                                                    
    );

};

export default GalleryGrid;