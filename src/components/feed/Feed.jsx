import React from "react";
import "./feed.css"
import Shared from "../shared/Shared";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Shared />
                {Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}

            </div>
        </div>
    )
}

export default Feed;