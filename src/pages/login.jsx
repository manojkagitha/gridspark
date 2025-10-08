import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic (add backend later)
    alert("Logged in (demo)!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic
    alert("Account created (demo)!");
  };

  return (
    <section className="section-padding max-w-sm mx-auto">
      <div className="card">
        <h1 className="text-2xl font-bold text-primary mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h1>
        <form onSubmit={isSignup ? handleSignup : handleLogin} className="flex flex-col gap-4">
          <input type="email" placeholder="Email" required className="p-2 border rounded" />
          <input type="password" placeholder="Password" required className="p-2 border rounded" />
          {isSignup && <input type="text" placeholder="Name" required className="p-2 border rounded" />}
          <button className="btn-primary w-full" type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          {isSignup ? (
            <span>Already have an account?{" "}
              <button className="text-primary underline" onClick={() => setIsSignup(false)}>Login</button>
            </span>
          ) : (
            <span>New user?{" "}
              <button className="text-primary underline" onClick={() => setIsSignup(true)}>Sign Up</button>
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
