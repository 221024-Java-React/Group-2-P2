import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import { axInst } from "../../Util/axInst";

import Navigation from "../Navigation/Navigation";
import StatusBar from "../UserProfile/StatusBar/StatusBar";
import PostContainer from "../UserProfile/Posts/PostContainer/PostContainer";
import Post from "../UserProfile/Posts/Post/Post";
import { IPost } from "../../Util/Interfaces/IPost";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const getAllPosts = async () => {
    try {
      const { data } = await axInst.get("/posts/all");
      setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!document.cookie.slice(8)) {
      navigate("/login");
    }

    getAllPosts();
  }, []);

  return (
    <>
      <Navigation />
      <StatusBar />
      <PostContainer>
        {posts.map((postData: IPost) => {
          return <Post key={postData.id} post={postData} />;
        })}
      </PostContainer>
    </>
  );
};

export default Home;
