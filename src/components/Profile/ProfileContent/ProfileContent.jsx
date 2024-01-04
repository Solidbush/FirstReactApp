import React from "react";
import profileStyle from "./ProfileContent.module.css";

const ProfileContent = () => {
    return(
        <div className={profileStyle.ProfileContent}>
            <div className={profileStyle.profilePhoto}>
                <img src="https://img.freepik.com/free-photo/cute-dog-wearing-glasses_23-2148917262.jpg?size=626&ext=jpg" alt="Profile photo"/>
            </div>
            <div className={profileStyle.MainInfo}>
                <div className={profileStyle.name}>
                    <p><b>Alex Gavrilov</b></p>
                </div>
                <div className={profileStyle.info}>
                    <p>Date of Birth: 27 February</p>
                    <p>City: Saint-Petersburg</p>
                    <p>Education: ITMO University</p>
                    <p>Web Site: <a href="https://solidbush.github.io/WebProgramming/Labs/index.html" target="_blank">https://solidbush.github.io/WebProgramming/Labs/index.html</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileContent;