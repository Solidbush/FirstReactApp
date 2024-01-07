import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
const Posts = () => {
    return(
        <div className={style.Content}>
            <p>My posts</p>
            <textarea></textarea>
            <button>Send</button>
            <Post src="https://ouch-cdn2.icons8.com/dN8JDATHmIs1eFeBciBoxs0pmPye2sOPffYer5NSoFc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIx/L2VjMGY3ZjIxLTlh/NWItNDVjNS1iMmJl/LTM2MDBkYmFiMmNh/Mi5zdmc.png" alt="img" text="Why nobody loves noobs?"/>
            <Post src="https://ouch-cdn2.icons8.com/dN8JDATHmIs1eFeBciBoxs0pmPye2sOPffYer5NSoFc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIx/L2VjMGY3ZjIxLTlh/NWItNDVjNS1iMmJl/LTM2MDBkYmFiMmNh/Mi5zdmc.png" alt="img" text="Hello my dear friends!"/>
            <Post src="https://ouch-cdn2.icons8.com/dN8JDATHmIs1eFeBciBoxs0pmPye2sOPffYer5NSoFc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIx/L2VjMGY3ZjIxLTlh/NWItNDVjNS1iMmJl/LTM2MDBkYmFiMmNh/Mi5zdmc.png" alt="img" text="Let's do more posts)"/>
        </div>
    );
}

export default Posts;