import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // --- CONNECT TO YOUR NEW BACKEND API ---
    // IMPORTANT: Replace with your Azure VM's Public IP address
    const API_URL = 'http://135.235.136.94:3000/api/register';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // This handles errors from the server, like "Email already exists."
        throw new Error(data.error || 'Registration failed.');
      }

      // On success, show an alert and redirect to the login page
      alert('Registration successful! You can now log in.');
      navigate('/login');

    } catch (error) {
      // This catches network errors or errors thrown from the response
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">Create Your Account</h2>
        <p className="text-center text-gray-400 mb-8">Join Gridspark to get started.</p>

        {error && <p className="bg-red-500 text-white text-center p-3 rounded mb-4">{error}</p>}

        <form onSubmit={handleRegister}>
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
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
