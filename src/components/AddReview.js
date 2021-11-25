import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

export default function AddReview() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("1");
  const { user } = useAuth();
  const username = user.displayName;
  const userImg = user.photoURL;

  const data = { username, userImg, feedback, rating };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://secure-sierra-53556.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Review Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setFeedback("");
          setRating("1");
        }
      });
  };

  return (
    <div className="add-review">
      <div className="review-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Your Feedback <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Write Your Feedback Here"
                  name="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Rating <span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 mb-0">
              <div className="d-grid">
                <button type="submit" className="tzBtn">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
