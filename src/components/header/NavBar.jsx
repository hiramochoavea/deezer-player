import { useState } from 'react';

const NavBar = () => {

    return (
        <nav id="nav-bar-container">
            <a href="#">Home</a>
            <a href="#" className="active">Discover</a>
            <a href="#">Recents</a>
            <a href="#">Library</a>  
        </nav>                                  
    );

};

export default NavBar;