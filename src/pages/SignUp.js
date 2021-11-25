import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import useAuth from "../hooks/useAuth";
import "../styles/AuthStyles.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { loading, signUpUser } = useAuth();
  const history = useHistory();

  const validateImgUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const handleRoute = () => {
    history.push("/signin");
  };

  //Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateImgUrl(imageUrl)) {
      await signUpUser(email, password, name, imageUrl, history);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Provide A Valid Image URL",
      });
      setImageUrl("");
      return;
    }
  };

  return (
    <>
      <Header />
      <PageHeading text="Sign Up" />
      {loading ? (
        <Loader />
      ) : (
        <section id="signup" className="section-padding">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="auth-left">
                  <div className="auth-left-content">
                    <h3>Already Have An Account?</h3>
                    <p>
                      Discover watches you've never seen before.Timezone offers
                      the most unique and cool watches.
                    </p>
                    <div className="auth-left-btn">
                      <button onClick={handleRoute}>Sign In Now</button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="auth-right">
                  <h3>Welcome!</h3>
                  <h3>Please Sign Up</h3>
                  <form onSubmit={handleSubmit} className="login-form mt-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="username"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Image Url <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Image Url"
                            value={imageUrl}
                            onChange={(e) => {
                              setImageUrl(e.target.value);
                            }}
                            name="imageurl"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
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
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="d-grid">
                          <button type="submit" className="btn auth-btn">
                            Register
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
