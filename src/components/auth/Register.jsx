// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
// import { Link } from 'react-router-dom'; // ✅ Proper Link

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: 'spring', stiffness: 100 },
//   },
// };

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   return (
//     <div className="min-h-screen font-sans bg-white flex items-center justify-center py-20">
//       <motion.div
//         className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//       >
//         <img
//           src="/banner-1.jpg"
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/e2e8f0/4a5568?text=Image+Not+Found'; }}
//         />
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-1"></div>

//         <div className="relative z-10 p-6 sm:p-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-6 text-white"
//           >
//             <motion.div variants={itemVariants} className="text-center">
//               <h2 className="text-3xl md:text-4xl font-bold">Create an Account</h2>
//               <p className="text-sm text-gray-300 mt-2">Join us and start your journey today</p>
//             </motion.div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm mb-1 text-gray-300">Full Name</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     required
//                     className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
//                     placeholder="Enter Your Full Name"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm mb-1 text-gray-300">Email address</label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="email"
//                     required
//                     className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
//                     placeholder="Enter Your Email"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <label className="block text-sm mb-1 text-gray-300">Password</label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     required
//                     className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
//                     placeholder="Create a Password"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   >
//                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                   </button>
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <button type="submit" className="w-full cursor-pointer bg-orange-600 py-3 rounded-lg hover:bg-orange-700">
//                   Create My Account
//                 </button>
//               </motion.div>
//             </form>

//             <motion.p variants={itemVariants} className="text-center text-sm text-gray-400 pt-4">
//               Already have an account?{' '}
//               <Link to="/login" className="text-orange-500 hover:text-orange-400">
//                 Sign In
//               </Link>
//             </motion.p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Proper Link

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    // ✨ Added px-4 for horizontal padding on small screens
    <div className="min-h-screen font-sans bg-white flex items-center justify-center py-20 px-4">
      <motion.div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src="/banner-1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x800/e2e8f0/4a5568?text=Image+Not+Found'; }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-1"></div>

        <div className="relative z-10 p-6 sm:p-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-white"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Create an Account</h2>
              <p className="text-sm text-gray-300 mt-2">Join us and start your journey today</p>
            </motion.div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={itemVariants}>
                <label className="block text-sm mb-1 text-gray-300">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
                    placeholder="Enter Your Full Name"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm mb-1 text-gray-300">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
                    placeholder="Enter Your Email"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm mb-1 text-gray-300">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-600 text-white rounded-lg"
                    placeholder="Create a Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button type="submit" className="w-full cursor-pointer bg-orange-600 py-3 rounded-lg hover:bg-orange-700">
                  Create My Account
                </button>
              </motion.div>
            </form>

            <motion.p variants={itemVariants} className="text-center text-sm text-gray-400 pt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-500 hover:text-orange-400">
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
