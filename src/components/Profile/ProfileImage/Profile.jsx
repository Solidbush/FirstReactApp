import React from "react";
import profileStyle from "./Profile.module.css";
import ProfileContent from "../ProfileContent/ProfileContent";
import Posts from "../Posts/Posts";

const Profile = (props) => {
    return (
        <div className={profileStyle.content}>
            <div className={profileStyle.profileImage}>
                <img src="https://img.freepik.com/free-photo/gloomy-landscape-of-mountain-lake_1398-2294.jpg?size=626&ext=jpg" alt="Profile image"/>
            </div>
            <ProfileContent />
            <Posts posts={props.posts}/>
        </div>
    );
}

export default Profile;