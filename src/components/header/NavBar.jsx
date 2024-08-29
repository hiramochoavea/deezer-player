import { useState } from 'react';

const NavBar = () => {

    return (
        <nav id="nav-bar-container">
            <a href="#" tabIndex="0" aria-label="Go to Home page">Home</a>
            <a href="#" tabIndex="0" aria-label="Go to Discover page" className="active" aria-current="page">Discover</a>
            <a href="#" tabIndex="0" aria-label="Go to Recents page">Recents</a>
            <a href="#" tabIndex="0" aria-label="Go to Library page">Library</a>  
        </nav>                                  
    );

};

export default NavBar;