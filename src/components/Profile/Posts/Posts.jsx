import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={style.Content}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Send</button>
            {
                props.posts.map((post) => <Post
                    src="https://ouch-cdn2.icons8.com/dN8JDATHmIs1eFeBciBoxs0pmPye2sOPffYer5NSoFc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIx/L2VjMGY3ZjIxLTlh/NWItNDVjNS1iMmJl/LTM2MDBkYmFiMmNh/Mi5zdmc.png"
                    alt="img" text={post.text}/>)
            }
        </div>
    );
}

export default Posts;