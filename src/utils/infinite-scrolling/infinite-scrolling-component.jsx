import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectNextPage } from "../../redux/selectors/posts-selector";

export const InfiniteScrolling = () => {
  const dispatch = useDispatch();
  const nextPage = useSelector(selectNextPage);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      nextPage && loadMorePosts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage]);

  const loadMorePosts = async () => {
    try {
      dispatch({ type: "posts/infiniteRolling", payload: nextPage });
    } catch (error) {
      throw new Error(error);
    }
  };
};
