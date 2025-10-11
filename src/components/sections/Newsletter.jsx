import React from "react";

const Newsletter = () => (
  <section className="py-20 min-h-[300px] bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col justify-center text-white">
    <div className="max-w-md mx-auto text-center px-6 py-12 rounded-2xl border-2 border-accent/20 shadow-xl bg-black/30 backdrop-blur-md">
      <h2 className="text-2xl font-extrabold mb-2 text-accent">Stay updated!</h2>
      <p className="mb-4 text-gray-300">Get the latest news and offers from Gridspark.</p>
      <form>
        <input
          type="email"
          placeholder="Your email"
          className="mb-4 p-3 border border-gray-700 bg-gray-900/90 text-white rounded w-full focus:outline-none focus:border-accent"
        />
        <button type="submit" className="btn-primary w-full py-3 text-lg">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Newsletter;
