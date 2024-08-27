import { useState } from 'react';
import AppLogo from './AppLogo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import ProfileImage from './ProfileImage';

const Header = () => {

    return (
        <header id="header-container">
            <AppLogo />
            <SearchBar />
            <NavBar />
            <ProfileImage />
        </header>
    );

};

export default Header;