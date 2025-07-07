import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-2 px-4"
      style={{ backgroundImage: "url('/banner-1.jpg')" }}
    >
      <div className="w-full max-w-md p-8 rounded-xl shadow-xl backdrop-blur-md bg-white/70 border border-white/40 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-2">Login to your account</h2>
        <p className="text-sm text-center text-gray-700 mb-6">Enter your email and password to continue</p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black placeholder-gray-600 rounded-md text-sm focus:ring-orange-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black placeholder-gray-600 rounded-md text-sm pr-10 focus:ring-orange-500 focus:outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-orange-600 mr-2" />
              Remember me
            </label>
            <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6 space-y-2 text-sm text-gray-700">
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900">Sign In With OTP</button>
          <p>Protected by Google Privacy</p>
          <p>
            <a href="#" className="text-orange-600 hover:underline">Policy & Terms</a> apply.
          </p>
          <p>
            New user? <Link to="/register" className="text-orange-600 hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
