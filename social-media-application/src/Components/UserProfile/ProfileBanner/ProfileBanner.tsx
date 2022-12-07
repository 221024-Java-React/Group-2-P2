import React from 'react';

import MarkPic from '../../../Assets/MarkPic.jpg';
import './ProfileBanner.css';

const ProfileBanner: React.FC<{ profileName: string }> = ({ profileName }) => {
  return (
    <div className='banner'>
      <div className='banner-info'>
        <img src={MarkPic} alt='Profile Pic' />
        <h1>{profileName || 'Mark Satin'}</h1>
      </div>
      <button>Update Info</button>
    </div>
  );
};

export default ProfileBanner;
