import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger
 
  return (

    <div>
      <ProfileInfo />
      <div>
        <MyPostsContainer store={props.store} />
      </div>
    </div>


  )
}




export default Profile;