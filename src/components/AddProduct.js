import React, { useState } from "react";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const data = { name, price, color, image };

  const validateImgUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  //Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateImgUrl(image)) {
      fetch("https://secure-sierra-53556.herokuapp.com/watches", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Product Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setName("");
            setPrice("");
            setColor("");
            setImage("");
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Provide A Valid Image URL",
      });
      setImage("");
      return;
    }
  };

  return (
    <div className="add-product">
      <div className="add-product-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Watch Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Watch Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Price <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Price"
                  name="name"
                  value={price}
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Color <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Color"
                  name="name"
                  value={color}
                  type="text"
                  onChange={(e) => setColor(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Image URL <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Image URL"
                  name="name"
                  value={image}
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-lg-12 mb-0">
              <div className="d-grid">
                <button type="submit" className="tzBtn">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
