import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [reviews, setReviews] = useState([]);

  const avgRating = reviews.reduce((p, c) => {
    return p + c.rating / reviews.length;
  }, 0);

  const [edit, setEdit] = useState({
    review: {},
    editMode: false,
  });

  // Delete Review

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const saveReview = (rating, review) => {
    const newRating = {
      id: crypto.randomUUID(),
      rating,
      review,
    };

    setReviews([newRating, ...reviews]);
  };

  const editReview = (oldReview) => {
    setEdit({
      review: oldReview,
      editMode: true,
    });
  };

  const updateReview = (oldId, newReview) => {
    setReviews(
      reviews.map((item) =>
        item.id === oldId
          ? { ...item, rating: newReview.rating, review: newReview.review }
          : item
      )
    );

    setEdit({
      review: {},
      editMode: false,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form saveReview={saveReview} edit={edit} updateReview={updateReview} />

        <span className="d-flex align-items-center justify-content-between">
          <p>Total Review : {reviews.length}</p>
          <p>Average Rating : {avgRating}</p>
        </span>

        <ListGroup
          reviews={reviews}
          deleteReview={deleteReview}
          editReview={editReview}
        />
      </div>
    </>
  );
};

export default App;
