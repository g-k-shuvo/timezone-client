import React, { useState } from "react";
import Swal from "sweetalert2";

export default function MakeAdmin() {
  const [email, setEmail] = useState("");

  const user = { email };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://secure-sierra-53556.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Admin Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmail("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Add Existing User Email",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmail("");
        }
      });
  };
  return (
    <div className="make-admin">
      <div className="admin-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 mb-0">
              <div className="d-grid">
                <button type="submit" className="tzBtn">
                  Make Admin
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
