import React from "react";

export default function PersonalPage() {
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
    </div>
  );
}
