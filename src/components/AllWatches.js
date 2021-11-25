import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "./Loader";
import useWatches from "../hooks/useWatches";
import Watch from "./Watch";

export default function AllWatches() {
  const { loading, watches } = useWatches();

  return (
    <section id="all-watches" className="section-padding">
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className="gy-5">
            {watches.map((watch) => (
              <Col lg={4} key={watch._id}>
                <Watch watch={watch} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}
