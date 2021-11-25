import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Featured />
      <Reviews />
      <WhyUs />
      <Footer />
    </>
  );
}
