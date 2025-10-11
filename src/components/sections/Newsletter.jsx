import React from "react";

// Accent color from your design reference
const accentClass = "text-[#FFB53A]";

const Newsletter = () => (
  <div className="max-w-md mx-auto text-center px-8 py-12 rounded-2xl border-2 border-[#FFB53A]/20 shadow-2xl bg-black/40 backdrop-blur-lg">
    <h2 className={`text-3xl font-extrabold mb-2 ${accentClass}`}>Subscribe to Gridspark Newsletter</h2>
    <p className="mb-5 text-gray-300 text-lg">Get AI breakthroughs, industry trends, and expert insights delivered to your inbox—no spam, just innovation.</p>
    <form>
      <input
        type="email"
        placeholder="Your email address"
        className="mb-4 p-3 border border-gray-700 bg-gray-900/90 text-white rounded w-full focus:outline-none focus:border-[#FFB53A]"
      />
      <button
        type="submit"
        className="w-full py-3 text-lg rounded bg-[#FFB53A] text-black font-bold shadow hover:bg-yellow-400 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export default Newsletter;
