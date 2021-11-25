import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import useWatch from "../hooks/useWatch";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "../styles/WatchDetails.css";
import Swal from "sweetalert2";

export default function WatchDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const { watch } = useWatch(id);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://secure-sierra-53556.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Watch Purchased Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(`/dashboard`);
        }
      });
  };

  return (
    <section id="watchDetails" className="section-padding">
      <Container>
        <Row>
          <Col md={6}>
            <div className="watch-details">
              <div className="detail-image">
                <img src={watch.image} alt="" />
              </div>
              <div className="detail-content">
                <h2>{watch.name}</h2>
                <h4>
                  Variant: <span>{watch.color}</span>
                </h4>
                <h4>Price: ${watch.price}</h4>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="watch-purchase">
              <h1>Purchase This Watch</h1>
              <div className="purchase-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Watch"
                    defaultValue={watch.name}
                    readOnly
                    {...register("watch", { required: true })}
                  />
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Price"
                    readOnly
                    defaultValue={watch.price}
                    {...register("price", { required: true })}
                  />
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Name"
                    defaultValue={user.displayName}
                    {...register("name", { required: true })}
                  />
                  <input
                    autoComplete="off"
                    type="email"
                    placeholder="Email"
                    defaultValue={user.email}
                    {...register("email", { required: true })}
                  />
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Phone"
                    {...register("phone", { required: true, maxLength: 11 })}
                  />
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />

                  <select hidden defaultValue="pending" {...register("status")}>
                    <option value="shipped">Shipped</option>
                    <option value="pending">Pending</option>
                  </select>

                  <input type="submit" value="Purchase" />
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
