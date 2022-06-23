import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../sass/project.scss'

export default function Project( user ) {
    const [projectData, setProjectData] = useState([]);
    const [reviewShow, setReviewShow] = useState(false);
    const [allReviews, setAllReviews] = useState()
    const { id } = useParams();

    const { name, medium, image, theme, description, price } = projectData

    function getProjectInfoFetch() {
        fetch(`/projects/${id}`)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status);
            }
            return res.json();
        })
        .then(data => {
            setProjectData(data)
            setAllReviews(data.reviews)})
        .catch(error => {
            console.log(error)
        })
    };
  
    useEffect(() => {
        getProjectInfoFetch();
    },[])

    console.log(projectData)

    function handleAddReview() {
        setReviewShow((reviewShow) => !reviewShow)
    }

    const handleFormSubmit = async (e)  => {
        e.preventDefault();
        let configObj = {
            content: e.target.content.value,
            user_id: user.user.id,
            post_id: +id
        };
        console.log(configObj)

        let response = await fetch(`/review`, {
          method: `POST`,
          headers: {
          "content-type": "application/json"},
          body: JSON.stringify(configObj),
        });
        if (response.ok) {
          let review = await response.json();
          handleAddReview();;
        //   reviewsToDisplay.push(review)
          setAllReviews(allReviews => [...allReviews, review])
        } else {
          console.log(await response.json());
        }
      };
    console.log(reviewShow)

    function handleDelete(review_id) {
        fetch(`/review/${review_id}`, 
        {method: "DELETE"})
        let reviewsToDisplay = allReviews.filter((review) => 
            review.id !== review_id)
        setAllReviews(reviewsToDisplay)
    }

    function handleUpdateSubmit(e) {
        e.preventDefault()
        console.log(e)
        // fetch(`/review/${review_id}`, {

        // })
    }
if(projectData.length < 1) {
    return (
        <div className="App">Loading...</div>
    )
}else{
  return (
    <div className="project-page">
      <div className="this-project-info">
        <h2 className="user-name">{name}</h2>
      </div>
      <div className="project-container">
        <div className="image-div">
            <img className="each-project" src={image}></img>
        </div>
        <div className="project-info">
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
                <ul className="project-info-row">{description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare velit in justo vehicula rhoncus. Maecenas semper, quam in ultricies pharetra, metus tellus sodales elit, ut malesuada nunc eros vel lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tellus tortor, tempus in consequat nec, molestie nec dolor. Pellentesque laoreet nisl ac nisi imperdiet vestibulum. Donec varius eros vel urna lacinia, non pellentesque risus varius. Integer sit amet euismod neque. Vestibulum cursus placerat mauris id consectetur. Nam et nisi a est imperdiet accumsan. Etiam ut hendrerit elit. Sed venenatis nulla nisl, nec tincidunt tortor lobortis quis. Vivamus rhoncus, elit ut pretium dictum, mauris justo consectetur nulla, at elementum sem dui vel odio. Aliquam dapibus sed odio vestibulum porttitor. Cras eget tortor vel velit rhoncus dictum.</ul>  
        </div>
      </div>
      <div className="reviews">
            <h1 className="reviews-header">Reviews: </h1>
            {
            allReviews.map((review) => {
                return (
                    <div key={review.id} className="review-container">
                        <h2>{review.name}:</h2>
                        <ul className="project-info-row">{review.content}</ul>
                        {user.user.id === review.user_id ? 
                        <>
                            <h4 className="edit-delete" onClick={(e) => handleUpdateSubmit(e)}> Edit </h4> 
                            <h4 className="edit-delete" onClick={() => handleDelete(review.id)}>Delete</h4>
                        </>
                        : null}
                    </div>
                )})
            }
            <h4 className="add-review" onClick={handleAddReview}>Add new review +</h4>
            {
                reviewShow ? 
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
                : 
                null
            }
        </div>
    </div>
  );
}}