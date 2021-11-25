import React from "react";
import { Table } from "react-bootstrap";
import useMyOrders from "../hooks/useMyOrders";
import Loader from "./Loader";

export default function MyOrders() {
  const { loading, myOrders, removeOrder } = useMyOrders();
  return (
    <div className="my-orders">
      {loading ? (
        <Loader />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.watch}</td>
                <td>${order.price}</td>

                <td>
                  <button
                    onClick={() => {
                      removeOrder(order._id);
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
