import "./posts-page-styles.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { PostFormComponent } from "../../components/post-form/post-form-component";
import { PostsSectionComponent } from "../../components/posts-section/posts-section-component";

import { useSelector } from "react-redux";
import { selectEditModal, selectDeleteModal } from "../../redux/selectors/posts-selector";

import { PostsPageHeaderComponent } from "../../components/posts-page-header/posts-page-header-component";
import { EditModalComponent } from "../../components/edit-modal/edit-modal-component";
import { DeleteModalComponent } from "../../components/delete-modal/delete-modal-component";
import { ScrollToTopComponent } from "../../components/scroll-to-top/scroll-to-top-component";

import { fetchPostsStart } from "../../redux/posts-slice";

import { InfiniteScrolling } from "../../utils/infinite-scrolling/infinite-scrolling-component";

export const PostsPage = () => {
  InfiniteScrolling();
  const editModal = useSelector(selectEditModal);
  const deleteModal = useSelector(selectDeleteModal);

  const [scrollToTop, setScrollToTop] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsStart());

    const handleScroll = () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop === 0) {
        setScrollToTop(false);
      }
      if (scrollTop > 500) {
        setScrollToTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PostsPageHeaderComponent />
      <div className="posts-page">
        <PostFormComponent />
        <PostsSectionComponent />
        {editModal && <EditModalComponent />}
        {deleteModal && <DeleteModalComponent />}
      </div>
      {scrollToTop && <ScrollToTopComponent />}
    </>
  );
};
