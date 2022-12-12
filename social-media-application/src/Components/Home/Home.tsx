import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import { axInst } from "../../Util/axInst";

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from "../Navigation/Navigation";
import StatusBar from "../UserProfile/StatusBar/StatusBar";
import PostContainer from "../UserProfile/Posts/PostContainer/PostContainer";
import Post from "../UserProfile/Posts/Post/Post";
import { IPost } from "../../Util/Interfaces/IPost";
import OnlineUsers from "../OnlineUsers/OnlineUsers";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { userID, isLoggedIn } = useContext(AuthContext);
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

    isLoggedIn();

    if (!userID) {
      navigate("/login");
    }

    getAllPosts();
  }, []);

  return (
    <>
      <Navigation />
      <StatusBar />
        <div className="row mt-2">
            <div className="col-10">
                <PostContainer>
                    {posts.map((postData: IPost) => {
                    return <Post key={postData.id} post={postData} />;
                    })}
                </PostContainer>
            </div>
        <div className="col-2">
            <OnlineUsers />
        </div>
        </div>
    </>
  );
};

export default Home;
