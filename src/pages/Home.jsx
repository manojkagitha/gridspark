import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import PricingPlans from "../components/PricingPlans";
import Newsletter from "../components/Newsletter";

const Home = () => (
  <div>
    <Hero />
    <Features />
    <PricingPlans preview />
    <Newsletter />
  </div>
);

export default Home;
