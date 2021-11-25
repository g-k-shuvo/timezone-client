import React from "react";
import "../styles/PageHeading.css";

export default function PageHeading({ text }) {
  return (
    <div className="page-heading">
      <h1>{text}</h1>
    </div>
  );
}
