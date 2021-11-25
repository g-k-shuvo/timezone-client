import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import MyOrders from "./MyOrders";
import "../styles/DashboardContainer.css";
import AddReview from "./AddReview";
import Pay from "./Pay";
import MakeAdmin from "./MakeAdmin";
import useAuth from "../hooks/useAuth";
import AddProduct from "./AddProduct";
import ManageAllOrders from "./ManageAllOrders";
import ManageProducts from "./ManageProducts";

export default function DashboardContainer() {
  const { admin } = useAuth();
  return (
    <div className="section-padding">
      <Container>
        <Row>
          <div className="dashboard-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="gy-5">
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    {admin ? (
                      <>
                        <Nav.Item>
                          <Nav.Link eventKey="first">Add A Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Make Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            Manage All Orders
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Manage Products</Nav.Link>
                        </Nav.Item>
                      </>
                    ) : (
                      <>
                        <Nav.Item>
                          <Nav.Link eventKey="first">My Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Add Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Pay</Nav.Link>
                        </Nav.Item>
                      </>
                    )}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {admin ? (
                      <>
                        <Tab.Pane eventKey="first">
                          <AddProduct />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <MakeAdmin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ManageAllOrders />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <ManageProducts />
                        </Tab.Pane>
                      </>
                    ) : (
                      <>
                        <Tab.Pane eventKey="first">
                          <MyOrders />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <AddReview />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Pay />
                        </Tab.Pane>
                      </>
                    )}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Row>
      </Container>
    </div>
  );
}
