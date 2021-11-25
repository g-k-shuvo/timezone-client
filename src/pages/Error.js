import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Error() {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/");
  };
  return (
    <>
      <Header />
      <section id="banner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="banner-text text-center">
                <h1>Opps! Page Not Found!</h1>
                <p>
                  Discover watches you've never seen before.Timezone offers the
                  most unique and cool watches.
                </p>
                <button onClick={handleRoute} className="tzBtn">
                  Go Home
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
