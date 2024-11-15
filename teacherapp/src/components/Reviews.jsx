import React from "react";

const Reviews = ({ reviews }) => (
    <div className="reviews">
        <h3>Reviews</h3>
        {reviews.map((review, index) => (
            <div key={index}>
                <p><strong>{review.name}:</strong> {review.comment}</p>
                <p>{"?".repeat(review.rating)}</p>
            </div>
        ))}
    </div>
);

export default Reviews;
