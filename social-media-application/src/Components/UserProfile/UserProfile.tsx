import { useState, useEffect, useContext } from "react";

import { axInst } from "../../Util/axInst";

import Navigation from "../Navigation/Navigation";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import StatusBar from "./StatusBar/StatusBar";
import AboutMe from "./AboutMe/AboutMe";
import PostContainer from "./Posts/PostContainer/PostContainer";
import Post from "./Posts/Post/Post";
import { IPost } from "../../Util/Interfaces/IPost";
import { AuthContext } from "../../Context/AuthContext";
import "./UserProfile.css";

const UserProfile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { profileUser } = useContext(AuthContext);

  const getAllPosts = async () => {
    try {
      const { data } = await axInst.get("/posts/all/" + profileUser.id);
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
      <ProfileBanner />
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
