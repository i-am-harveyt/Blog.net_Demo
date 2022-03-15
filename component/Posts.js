import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // get data from fatched result
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };
    getPosts();
  }, []);

  // fetch data from json-server
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };

  // delete post
  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      {posts.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          time={post.time}
          likes={post.likes}
          comment={post.comment}
          onDelete={deletePost}
        />
      ))}
    </>
  );
};

export default Posts;
