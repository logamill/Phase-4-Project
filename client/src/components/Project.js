import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Project() {
    const [projectData, setProjectData] = useState([]);
    const { id } = useParams();
    console.log(id)

    const { name, medium, image, theme, description, price, reviews } = projectData

    function getProjectInfoFetch() {
        fetch(`/projects/${id}`)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then(data => {
            setProjectData(data)})
        .catch(error => {
            console.log(error)
        })
    };
  
    useEffect(() => {
        getProjectInfoFetch();
    },[])

    console.log(projectData)

if(projectData.length < 1) {
    return (
        <div className="App">Loading...</div>
    )
}else{
  return (
    <div className="project-page">
      <div className="this-project-info">
        <h2 className="user-name">{name}</h2>
        <h3 className="add-btn">Add new +</h3>
      </div>
      <div>
        <img className="each-project" src={image}></img>
        <div className="project-info">
          <div className="row">
            <h5>Name: {name}</h5>
            <h5>Medium: {medium}</h5>
          </div>
          <div className="row">
            <h5>Theme: {theme}</h5>
            <h5>Price: ${price}</h5>
          </div>
        </div>
        <div className="row">
          <h5>Description: {description}</h5>
        </div>
      </div>
      <div className="reviews">
            <h1>Reviews: </h1>
            {
            reviews.map((review) => {
                return (
                    <>
                    <h2>{review.name}:</h2>
                    <h2>{review.content}</h2>
                    </>
                )})
            }
        </div>
    </div>
  );
}}