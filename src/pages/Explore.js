import React from "react";
import AllWatches from "../components/AllWatches";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeading from "../components/PageHeading";

export default function Explore() {
  return (
    <>
      <Header />
      <PageHeading text="All Watches" />
      <AllWatches />
      <Footer />
    </>
  );
}
