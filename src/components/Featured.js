import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import useWatches from "../hooks/useWatches";
import Loader from "./Loader";
import Watch from "./Watch";

export default function Featured() {
  const { loading, watches } = useWatches();
  const sliced_watches = watches.slice(0, 6);
  return (
    <section id="featured" className="section-padding">
      <SectionHeading text="Featured Watches" />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className="gy-5">
            {sliced_watches.map((watch) => (
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
