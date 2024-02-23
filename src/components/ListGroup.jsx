import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ reviews, deleteReview, editReview }) => {
  return (
    <ul className="list-group my-3">
      {reviews.map((review) => (
        <ListItem
          key={review.id}
          review={review}
          deleteReview={deleteReview}
          editReview={editReview}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
