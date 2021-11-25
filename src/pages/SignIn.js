import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const location = useLocation();
  const history = useHistory();

  const { loading, signInUser } = useAuth();

  const handleRoute = () => {
    history.push("/signup");
  };

  //Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(email, password, location, history);
  };
  return (
    <>
      <Header />
      <PageHeading text="Sign In" />
      {loading ? (
        <Loader />
      ) : (
        <section id="signin" className="section-padding">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="auth-left">
                  <div className="auth-left-content">
                    <h3>New to our Shop?</h3>
                    <p>
                      Discover watches you've never seen before.Timezone offers
                      the most unique and cool watches.
                    </p>
                    <div className="auth-left-btn">
                      <button onClick={handleRoute}>Sign Up Now</button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="auth-right">
                  <h3>Welcome Back!</h3>
                  <h3>Please Sign In</h3>
                  <form onSubmit={handleSubmit} className="login-form mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button type="submit" className="btn auth-btn">
                            Sign in
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Footer />
    </>
  );
}
