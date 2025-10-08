import React, { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic here
    setMessage("Logged in! (demo, add backend later)");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Sign-up logic here
    setMessage("Account created! (demo, add backend later)");
  };

  return (
    <section className="section-padding min-h-screen flex flex-col items-center justify-center bg-light">
      <div className="card max-w-md w-full">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          {mode === "login" ? "Login to Gridspark Solutions" : "Sign Up for Gridspark Solutions"}
        </h1>
        {message && <div className="mb-4 text-center text-green-600">{message}</div>}
        <form onSubmit={mode === "login" ? handleLogin : handleSignup} className="flex flex-col gap-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="p-3 border rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="p-3 border rounded"
          />
          <button type="submit" className="btn-primary w-full">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-6">
          {mode === "login" ? (
            <>
              <span>New user?{" "}</span>
              <button
                onClick={() => setMode("signup")}
                className="text-primary underline font-semibold"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span>Already have an account?{" "}</span>
              <button
                onClick={() => setMode("login")}
                className="text-primary underline font-semibold"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
