import React, { useState } from "react";
import { dummyPosts } from "../data";
import PostItem from "../components/PostItem";

const CategoryPosts = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container author-posts-container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postId={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};
export default CategoryPosts;
