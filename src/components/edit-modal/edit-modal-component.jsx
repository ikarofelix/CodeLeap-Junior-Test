import "./edit-modal-styles.css";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectEditModal } from "../../redux/selectors/posts-selector";

import { editModal } from "../../redux/posts-slice";
import { editPostStart } from "../../redux/posts-slice";

export const EditModalComponent = () => {
  const [contentText, setContentText] = useState("");
  const [titleText, setTitleText] = useState("");
  const dispatch = useDispatch();

  const closeEditModal = () => dispatch(editModal(null));

  const { content, id, title } = useSelector(selectEditModal);

  // Handling the edit modal
  useEffect(() => {
    setContentText(content);
    setTitleText(title);

    document.documentElement.style.overflow = "hidden";
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        dispatch(editModal(null));
      }
    };
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.documentElement.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const submitEdit = (e) => {
    e.preventDefault();
    const item = { contentText, id, titleText };
    dispatch(editPostStart(item));
    closeEditModal();
  };

  return (
    <div className="modal-container absolute-middle">
      <div className="modal absolute-middle">
        <form id="edit-form" onSubmit={submitEdit} className="edit-form">
          <div className="edit-form-group">
            <h1 className="modal-title">Edit Item</h1>
          </div>
          <div className="edit-form-group">
            <label className="edit-form-label" htmlFor="title">
              Title
            </label>
            <input
              className="edit-form-input"
              required
              id="title"
              type="text"
              placeholder="Hello world"
              maxLength="256"
              value={titleText}
              onChange={(e) => setTitleText(e.target.value)}
            />
          </div>
          <div className="edit-form-group">
            <label className="edit-form-label" htmlFor="content">
              Content
            </label>
            <textarea
              className="edit-form-input"
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
          <div className="edit-form-buttons-container">
            <button onClick={closeEditModal} className="cancel edit-form-button">
              Cancel
            </button>
            <button className="save edit-form-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
