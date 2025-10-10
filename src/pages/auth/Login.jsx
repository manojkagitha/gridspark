import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(); // Managed by phone-number-input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // --- Secure, configurable API base URL ---
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://135.235.136.94:3000/api";

  // --- Form submission handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    const isLogin = mode === "login";
    const endpoint = `${API_BASE_URL}/${isLogin ? "login" : "register"}`;
    const body = isLogin
      ? { email, password }
      : { firstName, lastName, email, password, phone };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred");
      }

      const data = await response.json();
      setMessage(data.message);

      if (isLogin) {
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setTimeout(() => setMode("login"), 1500);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-dark min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">
          {mode === "login" ? "Login to Gridspark" : "Create Your Account"}
        </h1>
        {/* Error and success messages */}
        {error && <div className="mb-4 text-center bg-red-500 text-white p-3 rounded">{error}</div>}
        {message && <div className="mb-4 text-center bg-green-500 text-white p-3 rounded">{message}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {mode === "signup" && (
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-1/2 p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
                autoComplete="given-name"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-1/2 p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
                autoComplete="family-name"
              />
            </div>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
            autoComplete="email"
          />

          {mode === "signup" && (
            <PhoneInput
              placeholder="Phone Number (Optional)"
              value={phone}
              onChange={setPhone}
              className="phone-input-container"
              international
              defaultCountry="US"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />

          <button type="submit" className="w-full btn-primary" disabled={loading}>
            {loading ? "Processing..." : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400">
          {mode === "login" ? (
            <>
              <span>New to Gridspark? </span>
              <button onClick={() => setMode("signup")} className="font-medium text-accent hover:underline">
                Create an account
              </button>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <button onClick={() => setMode("login")} className="font-medium text-accent hover:underline">
                Log In
              </button>
            </>
          )}
        </div>
      </div>

      {/* Inline styling for phone input */}
      <style>{`
        .phone-input-container input {
          background-color: #374151; /* bg-gray-700 */
          border: 1px solid #4B5563; /* border-gray-600 */
          color: white;
          padding: 0.75rem;
          border-radius: 0.375rem;
          width: 100%;
        }
        .phone-input-container .PhoneInputCountry {
          background-color: #374151;
          border: 1px solid #4B5563;
          border-radius: 0.375rem 0 0 0.375rem;
        }
      `}</style>
    </section>
  );
};

export default Login;
