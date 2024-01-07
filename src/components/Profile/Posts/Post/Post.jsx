import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={style.Content}>
            <img src={props.src} alt={props.alt}/>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;