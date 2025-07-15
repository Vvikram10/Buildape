// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center py-2 px-4"
//       style={{ backgroundImage: "url('/banner-1.jpg')" }}
//     >
//       <div className="w-full max-w-md p-8 rounded-xl shadow-xl backdrop-blur-md bg-white/70 border border-white/40 text-gray-900">
//         <h2 className="text-3xl font-bold text-center mb-2">Login to your account</h2>
//         <p className="text-sm text-center text-gray-700 mb-6">Enter your email and password to continue</p>

//         <form className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               required
//               className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black placeholder-gray-600 rounded-md text-sm focus:ring-orange-500 focus:outline-none"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black placeholder-gray-600 rounded-md text-sm pr-10 focus:ring-orange-500 focus:outline-none"
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 focus:outline-none"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           {/* Remember + Forgot */}
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center">
//               <input type="checkbox" className="h-4 w-4 text-orange-600 mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="text-center mt-6 space-y-2 text-sm text-gray-700">
//           <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900">Sign In With OTP</button>
//           <p>Protected by Google Privacy</p>
//           <p>
//             <a href="#" className="text-orange-600 hover:underline">Policy & Terms</a> apply.
//           </p>
//           <p>
//             New user? <Link to="/register" className="text-orange-600 hover:underline">Create account</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

// This is a placeholder for the Link component from react-router-dom
// In a real app, you would use: import { Link } from 'react-router-dom';
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

// Framer Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    // Main container for the whole page
    <div className="min-h-screen font-sans bg-white  flex items-center justify-center py-20">
      <motion.div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Background Image for the form */}
        <img
          src="/banner-1.jpg"
          alt="Abstract background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/e2e8f0/4a5568?text=Image+Not+Found'; }}
        />
        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        {/* Form content container */}
        <div className="relative z-10 p-6 sm:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-white"
          >
            {/* Header section with reveal animation */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Welcome Back
              </h2>
              <p className="text-sm text-gray-300 mt-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Login to access your account
              </p>
            </motion.div>

            {/* Form */}
            <form className="space-y-4">
              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="email">Email address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition duration-300"
                    placeholder="Enter Your Email"
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition duration-300"
                    placeholder="Enter Your Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={showPassword ? 'eye-off' : 'eye'}
                        initial={{ opacity: 0, rotate: -30 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 30 }}
                        transition={{ duration: 0.2 }}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </motion.div>
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>

              {/* Remember me & Forgot password */}
              <motion.div variants={itemVariants} className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-700 text-orange-600 focus:ring-orange-500 mr-2" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200">Forgot password?</a>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
                >
                  Sign In
                </button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400 rounded-md">Or continue with</span>
                </div>
            </motion.div>

            {/* Social/OTP Login */}
            <motion.div variants={itemVariants}>
                 <button
                  type="button"
                  className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
                >
                  Sign In With OTP
                </button>
            </motion.div>

            {/* Sign up link */}
            <motion.p variants={itemVariants} className="text-center text-sm text-gray-400">
              New to our platform?{' '}
              <Link to="/register" className="font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200">
                Create an account
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

