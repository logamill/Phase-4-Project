import React, { useState } from 'react';
import '../sass/review.scss';


function Review( props ) {
    const [reviewEdit, setReviewEdit] = useState('')
    const [editing, setEditing] = useState(false)
    const [individualReview, setIndividualReview] = useState()

    const { user } = props

    function handleDelete(review_id) {
        fetch(`/review/${review_id}`, 
        {method: "DELETE"})
        let reviewsToDisplay = props.allReviews.filter((review) => 
            review.id !== review_id)
        props.setAllReviews(reviewsToDisplay)
    }

    // function to handle review edit 
    function handleUpdateSubmit(review) {
        setEditing(!editing)
        setReviewEdit(review.content)
        setIndividualReview(review.id)
    }

    // state to hold edited text
    function handleEditReview(e) {
        e.preventDefault();
        setReviewEdit(e.target.value)
    }

    const handleEditPatch = async (e, id) => {
        e.preventDefault();
        let form = new FormData(document.querySelector(`#review-content-form`));
        let newContent = e.target.content.value;

        let response = await fetch(`/reviews/${id}`, {
            method: `PATCH`,
            body: form,
          });
      
          if (response.ok) {
            let contentResponse = await response.json();
            let updatedReviews = props.allReviews.filter((review) => 
                    review.id !== id ? true : false
                )
            console.log(updatedReviews)
            setReviewEdit(contentResponse.content)
            props.setAllReviews([...updatedReviews, contentResponse])
            setEditing(!editing)
            console.log(`allReview ${props.allReviews}`)
          } else {
            response.json().then((err) => console.log(err.errors));
          }
        };


    return (
        
        <div className="reviews">
            <h1 className="reviews-header">Reviews: </h1>
            {
            props.allReviews.map((review) => {
                return (
                    <div key={review.id} className="review-container">
                        <div className='user-avatar'>
                            <img className="avatar" src={review.image_url}></img>
                            <h2 className='review-name'>{review.name}: </h2>
                        </div>
                        { editing  && user.user.id === review.user_id && review.id === individualReview ? 
                        <form id='review-content-form' onSubmit={(e) => handleEditPatch(e, review.id)}>
                            <textarea
                                name="content"
                                rows="5"
                                cols="80"
                                value={reviewEdit}
                                onChange={handleEditReview}
                                />
                            <button className='edit-submit' type='submit'>Submit</button>
                        </form>
                        : 
                        <span className="review-content-row">{review.content}</span>
                        }
                        {user.user.id === review.user_id ? 
                        <>
                            <h4 className="edit-delete" onClick={() => handleUpdateSubmit(review)}> Edit </h4> 
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