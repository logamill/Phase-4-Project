import React from "react";
import { Paper } from "@material-ui/core";

export default function EachPost({ post, handleDeletePost }) {
  const { id, description, image, medium, name, price, theme } = post;

  const handleDelete = () => {};

  return (
    <div className="project-info">
      <img className="each-project" src={image}></img>
      <div className="row">
        <h5 className="key-name">
          Name: <span className="values">{name}</span>
        </h5>
        <h5 className="key-name">
          Medium: <span className="values">{medium}</span>
        </h5>
      </div>
      <div className="row">
        <h5 className="key-name">
          Theme: <span className="values">{theme}</span>
        </h5>

        <h5 className="key-name">
          Price: <span className="values">{price}</span>
        </h5>
      </div>

      <h5 className="key-name">Description:</h5>
      <p className="description"> {description}</p>

      <div className="form__group delete-btn">
        <button onClick={() => handleDeletePost(id)} className="form__btn-text">
          Delete
        </button>
      </div>
    </div>
  );
}
