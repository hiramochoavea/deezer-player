import { useState } from 'react';

import './styles/sass/index.scss';
import Header from './components/header/Header';
import SongsList from './components/songs-list/SongsList';


const DeezerPlayer = () => {
    return (
        <div id="deezer-container">
            <Header />
            <SongsList />
        </div>
    );
};

export default DeezerPlayer;