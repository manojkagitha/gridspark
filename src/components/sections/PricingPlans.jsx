import React from "react";

const plans = [
  {
    title: "Starter",
    price: "$499/mo",
    features: [
      "5 Projects",
      "Basic Support",
      "10GB Storage",
      "Email Reports",
      "Monthly Analytics"
    ]
  },
  {
    title: "Professional",
    price: "$999/mo",
    highlight: true,
    features: [
      "20 Projects",
      "Priority Support",
      "100GB Storage",
      "Phone & Email Reports",
      "Weekly Analytics",
      "API Access"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Projects",
      "Dedicated Manager",
      "Unlimited Storage",
      "24/7 Support",
      "Custom Integration",
      "SLA Guaranteed"
    ]
  }
];

const PricingPlans = ({ preview }) => (
  <div className={preview ? "grid md:grid-cols-3 gap-8 my-12" : "grid md:grid-cols-3 gap-8"}>
    {plans.map(plan => (
      <div
        key={plan.title}
        className={`card flex flex-col items-center text-center ${
          plan.highlight ? "border-2 border-primary scale-105 shadow-xl" : ""
        }`}
      >
        <h3 className={`font-bold mb-2 text-xl ${plan.highlight ? "text-primary" : ""}`}>{plan.title}</h3>
        <div className="text-3xl font-extrabold mb-2">{plan.price}</div>
        <ul className="mb-4">
          {plan.features.map(f => (
            <li key={f} className="text-gray-600 mb-1">✔️ {f}</li>
          ))}
        </ul>
        <button
          className={`btn-primary w-full ${plan.highlight ? "bg-primary" : "bg-secondary"}`}
          onClick={() => window.location.href='/contact'}
        >
          {plan.highlight ? "Get Started" : "Contact Us"}
        </button>
      </div>
    ))}
  </div>
);

export default PricingPlans;
