import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import bannerImg from "../images/banner-img.jpg";
import "../styles/Banner.css";

export default function Banner() {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/explore");
  };
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="banner-text">
              <h1>Select Your New</h1>
              <h1>Perfect Style</h1>
              <p>
                Discover watches you've never seen before.Timezone offers the
                most unique and cool watches.
              </p>
              <button onClick={handleRoute} className="tzBtn">
                Shop Now
              </button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
