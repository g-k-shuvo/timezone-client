import React from "react";
import "../styles/Watch.css";
import { useHistory } from "react-router-dom";

export default function Watch({ watch }) {
  const history = useHistory();
  const handleRoute = () => {
    history.push(`/watches/${watch._id}`);
  };
  return (
    <div className="watch">
      <div className="watch-img">
        <img src={watch.image} alt="" />
      </div>
      <div className="addToCartBtn">
        <button onClick={handleRoute}>Details</button>
      </div>
      <div className="watch-details">
        <h5>{watch.name}</h5>
        <p>${watch.price}</p>
      </div>
    </div>
  );
}
