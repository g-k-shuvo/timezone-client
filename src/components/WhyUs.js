import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import whyUs from "../images/why-us.webp";
import "../styles/WhyUs.css";

export default function WhyUs() {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/explore");
  };
  return (
    <div id="whyUs" className="section-padding">
      <Container>
        <Row>
          <Col md={6}>
            <div className="why-text">
              <div className="why-text-content">
                <h1>Watch of Choice</h1>
                <p>
                  A watch is a portable timepiece intended to be carried or worn
                  by a person. It is designed to keep a consistent movement
                  despite the motions caused by the person's activities.
                </p>
                <button onClick={handleRoute} className="tzBtn">
                  Shop Now
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="why-img">
              <img src={whyUs} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
