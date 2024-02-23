import React, { useEffect, useState } from "react";

const Form = ({ saveReview, edit, updateReview }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.editMode) {
      updateReview(edit.review.id, { rating, review });
    } else {
      saveReview(rating, review);
    }

    setRating(1);
    setReview("");
  };

  useEffect(() => {
    setRating(edit.review.rating);
    setReview(edit.review.review);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
      <select
        type="text"
        className="form-control rounded-0 my-3"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <textarea
        className="form-control rounded-0 my-3"
        placeholder="Enter Your Review"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      ></textarea>
      <button className="btn btn-success rounded-0 w-100">Save</button>
    </form>
  );
};

export default Form;
