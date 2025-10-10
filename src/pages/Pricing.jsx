import React from "react";

// --- UPDATED IMPORT ---
// Path now correctly points to the "sections" subfolder.
import PricingPlans from "../components/sections/PricingPlans";

const Pricing = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-12">Pricing Plans</h1>
    <PricingPlans />
  </section>
);

export default Pricing;
