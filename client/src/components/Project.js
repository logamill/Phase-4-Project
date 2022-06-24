import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import "../sass/project.scss";

export default function Project(user) {
  const [projectData, setProjectData] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [reviewShow, setReviewShow] = useState(false);
  const { id } = useParams();

  const { name, medium, image, theme, description, price, reviews } =
    projectData;

  function getProjectInfoFetch() {
    fetch(`/projects/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setProjectData(data);
        setAllReviews(data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddReview() {
    setReviewShow((reviewShow) => !reviewShow);
  }

  if (projectData.length < 1) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <div>
        <div className="this-project-info">
          <h2 className="name-container">{name}</h2>
        </div>
        <div className="project-container">
          <div className="image-div">
            <img className="project-image" src={image}></img>
          </div>
          <div className="info-container">
            <div>
              <div className="project-sep">
                <h1>Name: </h1>
                <span className="project-info-row">{name}</span>
                <h1>Medium: </h1>
                <span className="project-info-row">{medium}</span>
              </div>
              <div className="project-sep">
                <h1>Theme: </h1>
                <span className="project-info-row">{theme}</span>
                <h1>Price: </h1>
                <span className="project-info-row">${price}</span>
              </div>
            </div>
            <div className="info-container">
              <div>
                <div className="project-sep">
                  <h1>Name: </h1>
                  <span className="project-info-row">{name}</span>
                  <h1>Medium: </h1>
                  <span className="project-info-row">{medium}</span>
                </div>
                <div className="project-sep">
                  <h1>Theme: </h1>
                  <span className="project-info-row">{theme}</span>
                  <h1>Price: </h1>
                  <span className="project-info-row">${price}</span>
                </div>
              </div>
              <h1>Description: </h1>
              <ul className="project-info-row">
                {description} Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent ornare velit in justo vehicula rhoncus. Maecenas
                semper, quam in ultricies pharetra, metus tellus sodales elit,
                ut malesuada nunc eros vel lacus. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Sed tellus tortor, tempus in
                consequat nec, molestie nec dolor. Pellentesque laoreet nisl ac
                nisi imperdiet vestibulum. Donec varius eros vel urna lacinia,
                non pellentesque risus varius. Integer sit amet euismod neque.
                Vestibulum cursus placerat mauris id consectetur. Nam et nisi a
                est imperdiet accumsan. Etiam ut hendrerit elit. Sed venenatis
                nulla nisl, nec tincidunt tortor lobortis quis. Vivamus rhoncus,
                elit ut pretium dictum, mauris justo consectetur nulla, at
                elementum sem dui vel odio. Aliquam dapibus sed odio vestibulum
                porttitor. Cras eget tortor vel velit rhoncus dictum.
              </ul>
            </div>
          </div>
          <Review
            user={user}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
          />
          {reviewShow ? (
            <div className="add-review-container">
              <form id="add-review-form" onSubmit={handleFormSubmit}>
                <p>Enter review: </p>
                <textarea
                  rows="5"
                  cols="50"
                  name="content"
                  type="content"
                  placeholder="What do you think of this piece?"
                />
                <button className="add-review-btn" type="submit">
                  +
                </button>
              </form>
            </div>
          ) : null}
          <h4 className="add-review" onClick={handleAddReview}>
            Add new review +
          </h4>
        </div>
        <Review
          user={user}
          allReviews={allReviews}
          setAllReviews={setAllReviews}
        />
        <h4 className="add-review" onClick={handleAddReview}>
          Add new review +
        </h4>
        {reviewShow ? (
          <div>
            <form id="add-review-form" onSubmit={handleFormSubmit}>
              <p>Enter review: </p>
              <input
                name="content"
                type="content"
                placeholder="What do you think of this piece?"
              />
              <button type="submit">Add review</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
