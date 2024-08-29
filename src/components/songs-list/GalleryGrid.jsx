import { useState, useEffect } from 'react';
import MusicCard from './MusicCard';

const GalleryGrid = () => {

    const [musicCards, setMusicCards] = useState([]);

    useEffect(() => {
        const cards = [];

        for (let i = 0; i < 8; i++) {
            cards.push(<MusicCard key={i} />);
        }
        
        setMusicCards(cards);
    }, []);

    return (
        <div id="gallery-grid-container">
            {musicCards}
        </div>                                                                                    
    );

};

export default GalleryGrid;