import React from "react";

const ListItem = ({ review, deleteReview, editReview }) => {
  return (
    <li className="list-group-item rounded-0 shadow-sm">
      <h1 className="display-5">Rating : {review.rating}</h1>
      <h1 className="display-6">Review : {review.review}</h1>

      <span className="float-end my-2">
        <button
          className="btn btn-sm btn-warning rounded-0"
          onClick={() => editReview(review)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => deleteReview(review.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
