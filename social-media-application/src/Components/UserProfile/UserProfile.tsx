import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Navigation from '../Navigation';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import StatusBar from './StatusBar/StatusBar';
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
