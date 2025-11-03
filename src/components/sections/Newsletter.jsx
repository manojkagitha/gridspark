import React, { useState } from "react";

// Accent color from your design system
const accentClass = "text-[var(--color-primary)]";

const Newsletter = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // Add a hidden field to identify newsletter submissions on Formspree dashboard
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
    <div
      className="
        max-w-md mx-auto text-center px-8 py-12 rounded-2xl
        border-2 border-[var(--color-primary)]/25
        shadow-2xl
        bg-[var(--color-card)]/70
        backdrop-blur-lg
        transition-colors duration-300
      "
    >
      <h2 className={`text-3xl font-extrabold mb-2 ${accentClass}`}>
        Join the Gridspark Vanguard
      </h2>
      <p className="mb-5 opacity-85 text-[var(--color-text)] text-lg">
        Be the first to receive bleeding-edge AI drops, private research, and future-of-tech invites.
        No spam—only the signal.
      </p>
      {success ? (
        <div className="p-7 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)] text-[var(--color-text)] shadow-md transition">
          Welcome to the AI Vanguard!<br />
          Watch your inbox for exclusive tech reveals, early access tools, and community missions.
        </div>
      ) : (
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            placeholder="you@future.ai"
            required
            autoComplete="email"
            className="
              p-3 border rounded w-full
              border-[var(--color-border)]
              bg-[var(--color-bg)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              focus:border-[var(--color-primary)]
              text-lg
              transition
            "
            disabled={loading}
          />
          <input type="hidden" name="form_for" value="newsletter" />
          <button
            type="submit"
            className="
              w-full py-3 text-lg rounded-lg font-bold tracking-wide uppercase
              bg-[var(--color-primary)] text-[var(--color-bg)]
              shadow-xl active:scale-95 hover:brightness-110 transition
              glow
            "
            disabled={loading}
          >
            {loading ? "Enrolling..." : "Join Now"}
          </button>
          <div className="text-xs mt-2 opacity-60">
            Zero spam. Only the future. Unsubscribe anytime.
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
