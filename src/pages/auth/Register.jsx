import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.gridsparksolutions.com";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    // Simple validation: only check length 6+
    if (!email || !fullName) {
      setError("Please enter your name and email.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);

    // Registration API
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Registration failed.");
      }

      alert("Registration successful! Please check your email to verify your account.");
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="w-full max-w-md bg-gray-900/90 p-8 rounded-lg shadow-2xl border border-accent/10">
        <h2 className="text-3xl font-extrabold text-accent text-center mb-6">
          Create Your Account
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Join Gridspark and unlock the future of AI-driven solutions.
        </p>
        {error && (
          <p className="bg-red-600 text-white text-center p-3 rounded mb-6">{error}</p>
        )}
        <form onSubmit={handleRegister} noValidate>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-800 rounded border border-gray-700 text-white focus:ring-accent focus:border-accent"
            required
            autoComplete="name"
            placeholder="Your full name"
          />
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-800 rounded border border-gray-700 text-white focus:ring-accent focus:border-accent"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 bg-gray-800 rounded border border-gray-700 text-white focus:ring-accent focus:border-accent"
            required
            autoComplete="new-password"
            placeholder="Create a password (min 6 chars)"
          />
          <button
            type="submit"
            className="w-full btn-primary py-3 text-lg"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
