import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.webp";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="section-padding">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-brand">
              <img src={logo} alt="" />
              <p>
                Discover watches you've never seen before.Timezone offers the
                most unique and cool watches.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-links">
              <ul>
                <li>
                  <p>Get Coupon</p>
                </li>
                <li>
                  <p>Contact US</p>
                </li>
                <li>
                  <p>About US</p>
                </li>
                <li>
                  <p>Offers & Discounts</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-links">
              <ul>
                <li>
                  <p>FAQs</p>
                </li>
                <li>
                  <p>Tears & Conditions</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
                <li>
                  <p>Report A Problem</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
