import React from "react";

export default function NewPostForm({ onAddPost, user }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData(document.querySelector(`#new-post-form`));
    form.append("user_id", user.id);
    let response = await fetch(`/posts`, {
      method: `POST`,
      body: form,
    });
    let newPost = await response.json();

    onAddPost(newPost);
  };

  return (
    <div className="login modal-container">
      <form className="form" id="new-post-form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Title"
            id="title"
            name="name"
          />
          <label for="title" class="form__label">
            Title
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Image URL"
            id="image-url"
            name="image"
          />
          <label for="image-url" class="form__label">
            Image URL
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Theme"
            id="theme"
            name="theme"
          />
          <label for="theme" class="form__label">
            Theme
          </label>
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Medium"
            id="medium"
            name="medium"
          />
          <label for="medium" class="form__label">
            Medium
          </label>
        </div>

        <div className="form__group">
          <input
            type="number"
            className="form__input"
            placeholder="Price"
            id="price"
            name="price"
          />
          <label for="price" class="form__label">
            Price
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Description"
            id="description"
            name="description"
          />
          <label for="description" class="form__label">
            Description
          </label>
        </div>

        <div className="form__group">
          <button className="form__btn-text">Add &rarr;</button>
        </div>
      </form>
    </div>
  );
}
