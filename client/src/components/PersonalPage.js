import { useEffect, useState } from "react";
import NewPostForm from "./NewPostForm";
import { useHistory } from "react-router-dom";

export default function PersonalPage({ user }) {
  const [posts, setPosts] = useState([]);
  console.log(user);

  function handleAddPost(newPost) {
    setPosts((posts) => [...posts, newPost]);
  }

  // function handleClick() {
  //   history.push("/new");
  // }

  return (
    <div className="personal-page">
      <div className="personal-info">
        <h2 className="user-name">Some Cool Name</h2>
        <h3 className="add-btn">Add new +</h3>
      </div>
      <div>
        <img className="each-project" src="http://picsum.photos/1"></img>
        <div className="project-info">
          <div className="row">
            <h5>Name: </h5>
            <h5>Medium: </h5>
          </div>
          <div className="row">
            <h5>Theme: </h5>
            <h5>Price: </h5>
          </div>
        </div>
        <div className="row">
          <h5>Description: </h5>
        </div>
      </div>

      <NewPostForm onAddPost={handleAddPost} user={user} />
    </div>
  );
}
