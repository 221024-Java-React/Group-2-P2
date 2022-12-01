import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Navigation from '../Navigation/Navigation';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import StatusBar from './StatusBar/StatusBar';
import './UserProfile.css';
import PostContainer from './Posts/PostContainer/PostContainer';
import Post from './Posts/Post/Post';
import { users, userid } from '../../Util/Users';
import { PostData, posts } from '../../Util/Posts';

const UserProfile = () => {

  const userPosts = posts.map((postData : PostData) => {
    return (postData.userid == userid) ? <Post key={postData.id} post={postData} /> : null;
  });

  return (
    <>
      <Navigation />
      <ProfileBanner profileName={users[userid].profileName} />
      <StatusBar />
      <AboutMe />
      <PostContainer>
        {userPosts}
      </PostContainer>
    </>
  );
};

export default UserProfile;
