import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
const Posts = () => {
    return(
        <div className={style.Content}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Send</button>
            <Post />
        </div>
    );
}

export default Posts;