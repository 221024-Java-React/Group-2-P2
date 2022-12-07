import { useState, useEffect } from "react";

import { axInst } from "../../Util/axInst";

import Navigation from "../Navigation/Navigation";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import StatusBar from "./StatusBar/StatusBar";
import AboutMe from "./AboutMe/AboutMe";
import PostContainer from "./Posts/PostContainer/PostContainer";
import Post from "./Posts/Post/Post";
import { IPost } from "../../Util/Interfaces/IPost";
import "./UserProfile.css";

const UserProfile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getAllPosts = async () => {
    try {
      /// NEED FILTERED POSTS ROUTE
      const { data } = await axInst.get("");
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Navigation />
      <ProfileBanner profileName={""} />
      <StatusBar />
      <AboutMe about={""} />
      <PostContainer>
        {posts.map((postData: IPost) => {
          return <Post key={postData.id} post={postData} />;
        })}
      </PostContainer>
    </>
  );
};

export default UserProfile;
