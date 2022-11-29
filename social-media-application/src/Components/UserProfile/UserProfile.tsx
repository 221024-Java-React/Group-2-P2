import React from 'react';
import AboutMe from './AboutMe';
import Navigation from '../Navigation';
import ProfileBanner from './ProfileBanner';
import StatusBar from './StatusBar';
import './UserProfile.css';
import PostContainer from './PostContainer';

const UserProfile = () => {
  return (
    <>
      <Navigation />
      <ProfileBanner />
      <StatusBar />
      <AboutMe />
      <PostContainer />
    </>
  );
};

export default UserProfile;
