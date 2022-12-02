import React from 'react';
import './ProfileBanner.css';

const ProfileBanner : React.FC<{profileName : string}> = ({profileName}) => {
  return (
    <div className='banner'>
      <img src='' alt='Profile Pic' />
      <h1>{profileName}</h1>
      <button>Update Info</button>
    </div>
  );
};

export default ProfileBanner;
