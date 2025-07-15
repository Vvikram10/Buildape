// import React, { useState } from 'react';

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
//       style={{
//         backgroundImage: "url('/banner-1.jpg')"
//       }}
//     >
//       <div className="w-full max-w-lg p-10 rounded-2xl shadow-xl backdrop-blur-md bg-white/70 border border-white/30 text-gray-900">
//         <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
//         <p className="text-sm text-center text-gray-700 mb-6">Get started on your fitness journey</p>

//         <form className="space-y-5">
//           <div className="flex space-x-4">
//             {/* First Name */}
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-1" htmlFor="firstname">First Name</label>
//               <input
//                 type="text"
//                 id="firstname"
//                 className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="John"
//                 required
//               />
//             </div>

//             {/* Last Name */}
//             <div className="w-1/2">
//               <label className="block text-sm font-medium mb-1" htmlFor="lastname">Last Name</label>
//               <input
//                 type="text"
//                 id="lastname"
//                 className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Doe"
//                 required
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className="w-full px-4 py-3 border border-gray-300 bg-white/90 text-black rounded-md text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
//           >
//             Create My Account
//           </button>
//         </form>

//         {/* Login Link */}
//         <div className="text-center mt-6 text-sm text-gray-700">
//           Already have an account?{' '}
//           <a href="/login" className="text-orange-600 hover:underline">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

// This is a placeholder for a Link component, e.g., from react-router-dom
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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    // Main container to center the form on a plain background
    <div className="min-h-screen font-sans bg-white flex items-center justify-center py-20">
      <motion.div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Background Image for the form */}
        <img
          src="/banner-1.jpg"
          alt="Mountain background"
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
            {/* Header section */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Create an Account
              </h2>
              <p className="text-sm text-gray-300 mt-2" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Join us and start your journey today
              </p>
            </motion.div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="register-name">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    id="register-name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition duration-300"
                    placeholder="Enter Your Full Name"
                  />
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="register-email">Email address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type="email"
                    id="register-email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition duration-300"
                    placeholder="Enter Your Email"
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-gray-300" htmlFor="register-password">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="register-password"
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition duration-300"
                    placeholder="Create a Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
                >
                  Create My Account
                </button>
              </motion.div>
            </form>

            {/* Login link */}
            <motion.p variants={itemVariants} className="text-center text-sm text-gray-400 pt-4">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200">
                Sign In
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
