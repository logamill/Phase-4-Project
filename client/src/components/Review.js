import React, { useState } from 'react';


function Review( props ) {

    const { user } = props

    function handleDelete(review_id) {
        fetch(`/review/${review_id}`, 
        {method: "DELETE"})
        let reviewsToDisplay = props.allReviews.filter((review) => 
            review.id !== review_id)
        props.setAllReviews(reviewsToDisplay)
    }

    function handleUpdateSubmit(e) {
        e.preventDefault()
        console.log(e)
        // fetch(`/review/${review_id}`, {

        // })
    }

    console.log(props.allReviews)

    return (
        
        <div className="reviews">
            <h1 className="reviews-header">Reviews: </h1>
            {
            props.allReviews.map((review) => {
                return (
                    <div key={review.id} className="review-container">
                        <h2>{review.name}: </h2>
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
        </div>
    )
};
export default Review;