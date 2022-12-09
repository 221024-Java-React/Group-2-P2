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
      // const userId = 0; // TODO get user id
      const { data } = await axInst.get("/posts/all");
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
