import { useEffect, useState } from "react";
import NewPostForm from "./NewPostForm";
import { useHistory } from "react-router-dom";
import UsersProjects from "./UsersProjects";
import EachPost from "./EachPost";

export default function PersonalPage({ user }) {
  const [posts, setPosts] = useState(user.posts);
  const [modal, setModal] = useState(false);

  const mapPosts = posts.map((el) => {
    return (
      <EachPost key={el.id} post={el} handleDeletePost={handleDeletePost} />
    );
  });

  const handleAddPost = (newPost) => {
    setModal(!modal);
    setPosts((posts) => [...posts, newPost]);
  };

  const handleCloseModal = (e) => {
    e.preventDefault(e);
    setModal(!modal);
  };

  function handleDeletePost(id) {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setPosts((posts) => posts.filter((post) => post.id !== id));
      }
    });
  }

  const handleClick = (e) => {
    e.preventDefault(e);
    setModal(!modal);
  };

  if (!user) return <span class="loader"></span>;

  return (
    <>
      <div>
        <div className="personal-page">
          <div className="personal-info">
            <h2 className="user-name">{user.name}.</h2>
            <btn className="add-btn" onClick={handleClick}>
              Add new +
            </btn>
          </div>
          <div>{!posts ? <span class="loader"></span> : mapPosts}</div>
        </div>
      </div>

      {modal ? (
        <NewPostForm
          onAddPost={handleAddPost}
          user={user}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </>
  );
}
