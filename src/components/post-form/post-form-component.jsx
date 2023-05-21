import "./post-form-styles.css";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectUser } from "../../redux/selectors/posts-selector";
import { addPostStart } from "../../redux/posts-slice";

export const PostFormComponent = () => {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");

  const username = useSelector(selectUser);
  const dispatch = useDispatch();

  const postSubmitHandler = (e) => {
    e.preventDefault();
    const post = { username, title: titleText, content: contentText };
    dispatch(addPostStart(post));
    setContentText("");
    setTitleText("");
  };

  return (
    <div className="post-form-container">
      <form id="post-form" onSubmit={postSubmitHandler} className="post-form">
        <div className="post-form-group">
          <h1 className="post-form-title">What's on your mind?</h1>
        </div>
        <div className="post-form-group">
          <label className="post-form-label" htmlFor="title">
            Title
          </label>
          <input
            className="post-form-input"
            required
            id="title"
            type="text"
            placeholder="Hello world"
            maxLength="256"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
        </div>
        <div className="post-form-group">
          <label className="post-form-label" htmlFor="content">
            Content
          </label>
          <textarea
            className="post-form-input"
            required
            rows="4"
            id="content"
            type="text"
            placeholder="Content here"
            maxLength="4096"
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
          />
        </div>
        <button className="post-form-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
