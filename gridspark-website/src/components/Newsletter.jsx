import React from "react";

const Newsletter = () => (
  <section className="section-padding bg-light">
    <div className="max-w-md mx-auto card text-center">
      <h2 className="text-xl font-bold mb-2 text-primary">Stay updated!</h2>
      <p className="mb-4 text-gray-600">Get the latest news and offers from Gridspark.</p>
      <form>
        <input type="email" placeholder="Your email" className="mb-2 p-2 border rounded w-full" />
        <button type="submit" className="btn-secondary w-full">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Newsletter;
