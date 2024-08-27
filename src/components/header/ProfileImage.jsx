import { useState } from 'react';

import profileImg from '../../assets/profile-img.svg'

const ProfileImage = () => {

    return (
        <div id="profile-img-container">
            <img src={profileImg} alt="Profile Image" className="" />                                 
        </div>
    );

};

export default ProfileImage;