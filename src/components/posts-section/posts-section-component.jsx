import "./posts-section-styles.css";
import { PostItem } from "../post-item/post-item-component";

import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/selectors/posts-selector";

export const PostsSectionComponent = () => {
  const posts = useSelector(selectPosts);

  return (
    <div className="posts-section">
      {posts &&
        posts.results.map((item) => {
          return <PostItem key={item.id} item={item} />;
        })}
      <div></div>
    </div>
  );
};
