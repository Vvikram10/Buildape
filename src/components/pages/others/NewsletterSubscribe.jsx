// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const NewsletterSubscribe = () => {
//   const componentRef = useRef(null);
//   const titleRef = useRef(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: componentRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none none',
//           scrub: true,
//         },
//       });

//       tl.from(titleRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power3.out',
//       }).from(
//         formRef.current,
//         {
//           y: 30,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power3.out',
//         },
//         '-=0.5'
//       );
//     }, componentRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={componentRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center justify-center">
//       <div className="max-w-2xl w-full mx-auto">
//         <div className="text-center space-y-6">
//           <h4
//             ref={titleRef}
//             className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
//           >
//             Stay Updated with Our Newsletter!
//           </h4>
//           <p className="text-lg text-gray-600">
//             Get the latest news and updates delivered to your inbox
//           </p>

//           <form
//             ref={formRef}
//             className="mt-8 flex flex-col sm:flex-row gap-3 p-1 rounded-lg bg-white border-2 border-gray-200 shadow-md"
//             action="#"
//             method="post"
//           >
//             <input
//               type="email"
//               name="email"
//               className="flex-grow px-5 py-3 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               placeholder="Your email address"
//               required
//             />
//             <button
//               type="submit"
//               name="btn_email_submit"
//               className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md transition-colors duration-200 shadow-sm hover:bg-gray-200 hover:text-orange-500 hover:shadow-lg"
//             >
//               Subscribe
//             </button>
//           </form>
//           <p className="text-sm text-gray-500 mt-2">
//             We'll never share your email. Unsubscribe anytime.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsletterSubscribe;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const NewsletterSubscribe = () => {
  const componentRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        formRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: componentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            className="relative w-full text-center"
          >
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight inline-block">
              {"Stay Updated with Our Newsletter!".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="relative inline-block"
                  initial={{ color: "#000000" }}
                  animate={{
                    color: ["#000000", "#f97316", "#000000"]
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: "Stay Updated with Our Newsletter!".length * 0.1 + 1
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h4>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600"
          >
            Get the latest news and updates delivered to your inbox
          </motion.p>

          <form
            ref={formRef}
            className="mt-8 flex flex-col sm:flex-row gap-3 p-1 rounded-lg bg-white border-2 border-gray-200 shadow-md"
            action="#"
            method="post"
          >
            <input
              type="email"
              name="email"
              className="flex-grow px-5 py-3 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              name="btn_email_submit"
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md transition-colors duration-200 shadow-sm hover:bg-gray-200 hover:text-orange-500 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-2">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;