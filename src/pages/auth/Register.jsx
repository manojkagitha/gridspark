import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// To connect to Supabase, you would uncomment the line below
// import { supabase } from '../../supabaseClient';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // --- Basic Validation ---
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    // --- Supabase Sign-Up Logic (Example) ---
    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: email,
    //     password: password,
    //     options: {
    //       data: {
    //         full_name: fullName,
    //       }
    //     }
    //   });
    //   if (error) throw error;
    //   // On success, you might show a "Check your email to verify" message
    //   // or redirect them to the login page or dashboard.
    //   alert('Registration successful! Please check your email to verify your account.');
    //   navigate('/login');
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }

    // For demonstration without Supabase connected:
    setTimeout(() => {
        console.log("Registering with:", { fullName, email, password });
        alert("Registration form submitted! (No backend connected)");
        setLoading(false);
        navigate('/login');
    }, 1000);
  };

  return (
    <div className="bg-dark min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">Create Your Account</h2>
        <p className="text-center text-gray-400 mb-8">Join Gridspark to get started.</p>

        {error && <p className="bg-red-500 text-white text-center p-3 rounded mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password"className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword"className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 text-white focus:ring-accent focus:border-accent"
              required
            />
          </div>

          <button type="submit" className="w-full btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
