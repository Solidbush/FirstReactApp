import React from "react";
import style from "./Post.module.css";

const Post = () => {
    return(
        <div className={style.Content}>
            <img src="https://ouch-cdn2.icons8.com/dN8JDATHmIs1eFeBciBoxs0pmPye2sOPffYer5NSoFc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTIx/L2VjMGY3ZjIxLTlh/NWItNDVjNS1iMmJl/LTM2MDBkYmFiMmNh/Mi5zdmc.png" alt="img"/>
            <p>Hey, why nobody love me?</p>
        </div>
    );
}

export default Post;