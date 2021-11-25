import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import useReviews from "../hooks/useReviews";
import Loader from "./Loader";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import SectionHeading from "./SectionHeading";
import "../styles/Review.css";

export default function Reviews() {
  const { loading, reviews } = useReviews();
  return (
    <section id="reviews" className="section-padding">
      <SectionHeading text="What Our Client Says" />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className="gy-5">
            <Col>
              <Carousel>
                {reviews.map((review) => (
                  <Carousel.Item key={review._id}>
                    <div className="review-content">
                      <div className="review-image">
                        <img src={review.userImg} alt="" />
                      </div>
                      <div className="review-text">
                        <h4>{review.username}</h4>
                        <h5>
                          {review.rating === "5" && (
                            <>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </>
                          )}
                          {review.rating === "4" && (
                            <>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiOutlineStar />
                            </>
                          )}
                          {review.rating === "3" && (
                            <>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                            </>
                          )}
                          {review.rating === "2" && (
                            <>
                              <AiFillStar />
                              <AiFillStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                            </>
                          )}
                          {review.rating === "1" && (
                            <>
                              <AiFillStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                              <AiOutlineStar />
                            </>
                          )}
                        </h5>
                        <p>
                          <span>"</span>
                          {review.feedback}
                          <span>"</span>
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}
