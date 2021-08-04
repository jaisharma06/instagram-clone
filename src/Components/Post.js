import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={props.username} src=""/>
        <h3>{props.username}</h3>
      </div>
      <img
        className="post__image"
        src={props.imageUrl}
        alt=""
      />
      <h4 className="post__text">
        <strong>{props.username}</strong> {props.caption}
      </h4>
    </div>
  );
}

export default Post;
