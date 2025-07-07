import React, { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/banner-1.jpg')"
      }}
    >
      <div className="w-full max-w-lg p-10 rounded-2xl shadow-xl backdrop-blur-md bg-white/70 border border-white/30 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-sm text-center text-gray-700 mb-6">Get started on your fitness journey</p>

        <form className="space-y-5">
          <div className="flex space-x-4">
            {/* First Name */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John"
                required
              />
            </div>

            {/* Last Name */}
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            Create My Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
