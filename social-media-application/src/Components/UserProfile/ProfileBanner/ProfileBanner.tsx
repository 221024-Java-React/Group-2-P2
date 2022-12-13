import { FC, useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

import MarkPic from "../../../Assets/MarkPic.jpg";
import "./ProfileBanner.css";

const ProfileBanner = () => {
  const { profileUser } = useContext(AuthContext);
  console.log(profileUser);

  return (
    <div className="banner">
      <div className="banner-info">
        <img src={MarkPic} alt="Profile Pic" />
        <h1>{profileUser.profileName}</h1>
      </div>
      {/* <button>Update Info</button> */}
    </div>
  );
};

export default ProfileBanner;
