import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>username</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="post" />

      <p className="post__text">
        <strong>{username}</strong> {caption}
      </p>
    </div>
  );
}

export default Post;
