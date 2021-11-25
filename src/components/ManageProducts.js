import React from "react";
import { Table } from "react-bootstrap";
import useManageProducts from "../hooks/useManageProducts";
import Loader from "./Loader";

export default function ManageProducts() {
  const { loading, allProducts, removeProduct } = useManageProducts();
  return (
    <div className="manage-products">
      {loading ? (
        <Loader />
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
                <td>
                  <button
                    className="tzActionBtn tzDelete"
                    onClick={() => {
                      removeProduct(product._id);
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
