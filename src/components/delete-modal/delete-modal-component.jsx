import "./delete-modal-styles.css";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDeleteModal } from "../../redux/selectors/posts-selector";
import { deleteModal } from "../../redux/posts-slice";

import { deletePostStart } from "../../redux/posts-slice";

export const DeleteModalComponent = () => {
  const dispatch = useDispatch();

  const postToBeDeleted = useSelector(selectDeleteModal);

  const closeDeleteModal = () => {
    dispatch(deleteModal(null));
  };

  // Handling the delete modal
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        dispatch(deleteModal(null));
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.documentElement.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const deletePost = () => {
    dispatch(deletePostStart(postToBeDeleted));
    closeDeleteModal();
  };

  return (
    <div className="modal-container absolute-middle">
      <div className="modal delete-modal absolute-middle">
        <div>
          <h1 className="modal-title delete-title">Are you sure you want to delete this item?</h1>
        </div>
        <div className="delete-modal-buttons-container">
          <button onClick={closeDeleteModal} className="cancel delete-button">
            Cancel
          </button>
          <button onClick={deletePost} className="delete delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
