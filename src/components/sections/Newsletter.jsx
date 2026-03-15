import React, { useState } from "react";

const Newsletter = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("form_for", "newsletter");

    try {
      const response = await fetch("https://formspree.io/f/mwpwzlng", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Something went wrong. Try again or contact us directly.");
      }
    } catch (error) {
      alert("Unable to submit. Try later or email us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel max-w-md mx-auto text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">
        Stay Updated
      </h2>
      <p className="mb-6 sm:mb-8 text-gray-400 text-sm sm:text-base">
        Get the latest AI insights and product updates delivered to your inbox.
      </p>
      {success ? (
        <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 shadow-sm transition">
          <div className="font-semibold mb-1">Thanks for subscribing!</div>
          <div className="text-sm">We'll keep you updated with our latest news.</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-3 sm:gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="
              px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg w-full
              border-[var(--color-border)]
              bg-[var(--color-bg)]
              text-white
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              focus:border-transparent
              text-sm sm:text-base
              transition touch-manipulation
            "
            disabled={loading}
          />
          <input type="hidden" name="form_for" value="newsletter" />
          <button
            type="submit"
            className="
              w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-semibold
              btn-primary touch-manipulation active:scale-95
            "
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
          <div className="text-xs text-gray-500">
            Unsubscribe anytime. No spam, we promise.
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
