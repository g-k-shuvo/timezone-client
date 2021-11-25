import React from "react";
import { Table } from "react-bootstrap";
import useAllOrders from "../hooks/useManageAllOrders";
import Loader from "./Loader";

export default function ManageAllOrders() {
  const { loading, allOrders, removeOrder, updateStatus } = useAllOrders();
  return (
    <div className="manage-all-orders">
      {loading ? (
        <Loader />
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.watch}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="tzActionBtn tzEdit"
                    onClick={() => {
                      updateStatus(order._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="tzActionBtn tzDelete"
                    onClick={() => {
                      removeOrder(order._id);
                    }}
                  >
                    Delete
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
