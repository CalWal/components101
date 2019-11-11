import React from "react";
import ReactDOM from "react-dom";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Posted on {props.time}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
