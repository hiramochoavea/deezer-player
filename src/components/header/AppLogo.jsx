import { useState } from 'react';

import appLogo from '../../assets/logo.svg'

const AppLogo = () => {

    return (
        <div id="logo-container">
            <img src={appLogo} alt="App Logo" className="" />
        </div>
    );

};

export default AppLogo;