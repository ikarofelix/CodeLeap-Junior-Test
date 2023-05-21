import "./post-item-styles.css";
import EditOption from "../../assets/post-options/edit-icon.svg";
import DeleteOption from "../../assets/post-options/delete-icon.svg";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors/posts-selector";

import { useDispatch } from "react-redux";

import { editModal, deleteModal } from "../../redux/posts-slice";

export const PostItem = ({ item }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const formatTime = (creationDate) => {
    let currentDate = new Date();
    let difference = currentDate - new Date(creationDate);

    let intervals = {
      year: 365 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
      second: 1000,
    };

    for (let key in intervals) {
      if (difference >= intervals[key]) {
        let value = Math.floor(difference / intervals[key]);
        return value + " " + key + (value > 1 ? "s" : "") + " ago";
      }
    }
    return "Just now";
  };

  const { username, title, content, created_datetime } = item;

  const deletePostHandler = (item) => {
    dispatch(deleteModal(item));
  };

  const editPostHandler = (item) => {
    dispatch(editModal(item));
  };

  return (
    <div className="post-item">
      <div className="post-item-header">
        <h1 className="post-item-title">{title}</h1>
        {username === user && (
          <div className="post-item-options">
            <img
              onClick={() => deletePostHandler(item)}
              className="option post-item-options-icon"
              src={DeleteOption}
              alt="Delete icon"
              title="Delete item"
            />
            <img
              onClick={() => editPostHandler(item)}
              className="option post-item-options-icon"
              src={EditOption}
              alt="Edit icon"
              title="Edit item"
            />
          </div>
        )}
      </div>
      <div className="post-item-footer">
        <div className="post-item-info">
          <span className="post-item-info-text">@{username}</span>
          <span>{formatTime(created_datetime)}</span>
        </div>
        <div className="post-item-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
