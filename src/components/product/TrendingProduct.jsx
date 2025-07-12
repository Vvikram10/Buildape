// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-router-dom";

// const TrendingProduct = () => {
//   const componentRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(false);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   const products = [
//     {
//       id: "chicago",
//       name: "Batch 27",
//       variant: "Chicago",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-1.png",
//     },
//     {
//       id: "game-royal",
//       name: "Diesel",
//       variant: "Game Royal",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-2.png",
//     },
//     {
//       id: "pine-green",
//       name: "IsoGold",
//       variant: "Pine Green",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-3.png",
//     },
//     {
//       id: "court-purple",
//       name: "RYS",
//       variant: "Court Purple",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-4.png",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//         setIsAtStart(scrollLeft === 0);
//         setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       handleScroll();
//       container.scrollLeft =
//         (container.scrollWidth - container.clientWidth) / 2;
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".product-card");

//       cards.forEach((card) => {
//         const infoPanel = card.querySelector(".product-info-panel");

//         // Set initial state for the info panel
//         gsap.set(infoPanel, { y: "100%", autoAlpha: 0 });

//         card.addEventListener("mouseenter", () => {
//           gsap.to(infoPanel, {
//             y: 0,
//             autoAlpha: 1,
//             duration: 0.4,
//             ease: "power2.out",
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(infoPanel, {
//             y: "100%",
//             autoAlpha: 0,
//             duration: 0.3,
//             ease: "power2.in",
//           });
//         });
//       });
//     }, componentRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={componentRef}
//       className="min-h-screen bg-white text-black flex flex-col overflow-hidden relative"
//     >
//       <header className="text-center py-12 px-4">
//         <h2 className="py-2 md:text-5xl  tracking-tight text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
//           Trending Now
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           Discover this week's hottest picks
//         </p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//         )}

//         <div
//           ref={containerRef}
//           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
//               >
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="absolute inset-0 z-30 pointer-events-none"
//                 ></Link>

//                 <div className="product-bg absolute inset-0 bg-gray-100"></div>

//                 <div className="relative h-full flex items-center justify-center p-6">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-image h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
//                   />
//                 </div>

//                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200">
//                   <div className="relative">
//                     <h3 className="product-name text-xl font-bold">
//                       {product.name}
//                     </h3>
//                     <p className="product-variant text-sm text-gray-600 mb-2">
//                       {product.variant}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="product-price text-orange-500 font-bold">
//                         {product.price}
//                       </span>
//                       <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 z-40">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <style jsx="true" global="true">{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const TrendingProduct = () => {
//   const componentRef = useRef(null);
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(false);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   const products = [
//     {
//       id: "chicago",
//       name: "Batch 27",
//       variant: "Chicago",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-1.png",
//     },
//     {
//       id: "game-royal",
//       name: "Diesel",
//       variant: "Game Royal",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-2.png",
//     },
//     {
//       id: "pine-green",
//       name: "IsoGold",
//       variant: "Pine Green",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-3.png",
//     },
//     {
//       id: "court-purple",
//       name: "RYS",
//       variant: "Court Purple",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-4.png",
//     },
//   ];

//   useEffect(() => {
//     // Custom scramble function
//     const scrambleText = (element, newText, duration = 1) => {
//       const chars = "!<>-_\\/[]{}—=+*^?#________";
//       const originalText = element.textContent;
//       const totalLength = Math.max(originalText.length, newText.length);
//       let frame = 0;
//       const totalFrames = Math.ceil(duration * 60); // 60fps

//       const animate = () => {
//         let output = "";
//         for (let i = 0; i < totalLength; i++) {
//           if (i < newText.length) {
//             if (frame >= totalFrames) {
//               output += newText[i];
//             } else {
//               const progress = Math.min(1, frame / totalFrames);
//               if (Math.random() < progress) {
//                 output += newText[i];
//               } else {
//                 output += chars[Math.floor(Math.random() * chars.length)];
//               }
//             }
//           }
//         }
//         element.textContent = output;

//         if (frame < totalFrames) {
//           frame++;
//           requestAnimationFrame(animate);
//         }
//       };

//       animate();
//     };

//     // Scramble text animation setup
//     const headerText = headerRef.current.querySelector('h2');
//     const originalText = headerText.textContent;

//     // Set initial scrambled state
//     gsap.set(headerText, { opacity: 0 });

//     // Create scroll trigger for animation
//     ScrollTrigger.create({
//       trigger: componentRef.current,
//       start: "top center",
//       onEnter: () => {
//         // First make the text visible
//         gsap.to(headerText, { opacity: 1, duration: 0.5 });
//         // Then run the scramble animation
//         scrambleText(headerText, originalText, 1.5);
//       },
//       once: true // Only play once
//     });

//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//         setIsAtStart(scrollLeft === 0);
//         setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       handleScroll();
//       container.scrollLeft =
//         (container.scrollWidth - container.clientWidth) / 2;
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", handleScroll);
//       }
//       ScrollTrigger.getAll().forEach(instance => instance.kill());
//     };
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".product-card");

//       cards.forEach((card) => {
//         const infoPanel = card.querySelector(".product-info-panel");

//         // Set initial state for the info panel
//         gsap.set(infoPanel, { y: "100%", autoAlpha: 0 });

//         card.addEventListener("mouseenter", () => {
//           gsap.to(infoPanel, {
//             y: 0,
//             autoAlpha: 1,
//             duration: 0.4,
//             ease: "power2.out",
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(infoPanel, {
//             y: "100%",
//             autoAlpha: 0,
//             duration: 0.3,
//             ease: "power2.in",
//           });
//         });
//       });
//     }, componentRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={componentRef}
//       className="min-h-screen bg-white text-black flex flex-col overflow-hidden relative"
//     >
//       <header ref={headerRef} className="text-center py-12 px-4">
//         <h2 className="py-2 md:text-5xl tracking-tight text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
//           Trending Now
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           Discover this week's hottest picks
//         </p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//         )}

//         <div
//           ref={containerRef}
//           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
//               >
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="absolute inset-0 z-30 pointer-events-none"
//                 ></Link>

//                 <div className="product-bg absolute inset-0 bg-gray-100"></div>

//                 <div className="relative h-full flex items-center justify-center p-6">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-image h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
//                   />
//                 </div>

//                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200">
//                   <div className="relative">
//                     <h3 className="product-name text-xl font-bold">
//                       {product.name}
//                     </h3>
//                     <p className="product-variant text-sm text-gray-600 mb-2">
//                       {product.variant}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="product-price text-orange-500 font-bold">
//                         {product.price}
//                       </span>
//                       <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 z-40">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <style jsx="true" global="true">{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const TrendingProduct = () => {
//   const containerRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(false);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   const products = [
//     {
//       id: "chicago",
//       name: "Batch 27",
//       variant: "Chicago",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-1.png",
//     },
//     {
//       id: "game-royal",
//       name: "Diesel",
//       variant: "Game Royal",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-2.png",
//     },
//     {
//       id: "pine-green",
//       name: "IsoGold",
//       variant: "Pine Green",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-3.png",
//     },
//     {
//       id: "court-purple",
//       name: "RYS",
//       variant: "Court Purple",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-4.png",
//     },
//   ];

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col overflow-hidden relative">
//       <header className="text-center py-12 px-4">
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.2 }}
//           className="relative inline-block"
//         >
//           <div className="text-4xl md:text-5xl font-bold tracking-tight">
//             {"Trending Now".split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="relative inline-block"
//                 initial={{ color: "#000000" }}
//                 animate={{
//                   color: ["#000000", "#f97316", "#000000"],
//                 }}
//                 transition={{
//                   delay: i * 0.1,
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatDelay: "Trending Now".length * 0.1 + 1,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
 
//         <motion.p
//           initial={{ opacity: 0, filter: "blur(5px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="text-lg text-gray-600 py-1"
//         >
//           Discover this week's hottest picks
//         </motion.p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//         )}

//         <div
//           ref={containerRef}
//           onScroll={handleScroll}
//           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
//               >
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="absolute inset-0 z-30 pointer-events-none"
//                 ></Link>

//                 <div className="product-bg absolute inset-0 bg-gray-100"></div>

//                 <div className="relative h-full flex items-center justify-center p-6">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-image h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
//                   />
//                 </div>

//                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
//                   <div className="relative">
//                     <h3 className="product-name text-xl font-bold">
//                       {product.name}
//                     </h3>
//                     <p className="product-variant text-sm text-gray-600 mb-2">
//                       {product.variant}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="product-price text-orange-500 font-bold">
//                         {product.price}
//                       </span>
//                       <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 z-40">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <style jsx="true" global="true">{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

// import React, { useRef, useState, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TrendingProduct = () => {
//   const containerRef = useRef(null);
//   const pRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(false);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   const products = [
//     // ... aapka product array jaisa tha waisa hi rahega
//     {
//       id: "chicago",
//       name: "Batch 27",
//       variant: "Chicago",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-1.png",
//     },
//     {
//       id: "game-royal",
//       name: "Diesel",
//       variant: "Game Royal",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-2.png",
//     },
//     {
//       id: "pine-green",
//       name: "IsoGold",
//       variant: "Pine Green",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-3.png",
//     },
//     {
//       id: "court-purple",
//       name: "RYS",
//       variant: "Court Purple",
//       description: "Limitless Pharma Pure Whey Isolate 5Lb",
//       price: "$100",
//       image: "/product-4.png",
//     },
//   ];

//   useLayoutEffect(() => {
//     const el = pRef.current;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         // Yahan badlaav kiya gaya hai
//         start: "top 80%", // Animation tab start ho jab element neeche se 80% screen par aa jaye
//         end: "top 50%",   // Animation tab poora ho jab element screen ke center (50%) par pahunch jaye
//         scrub: 1,         // Thoda smooth scrub effect
//       },
//     });

//     tl.fromTo(
//       el,
//       {
//         opacity: 0,
//         filter: "blur(10px)",
//         y: 50,
//       },
//       {
//         opacity: 1,
//         filter: "blur(0px)",
//         y: 0,
//         duration: 1,
//         ease: "power2.out", // Thoda sa easing effect
//       }
//     );

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col overflow-hidden relative">
//       <header className="text-center py-12 px-4">
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.2 }}
//           className="relative inline-block"
//         >
//           <div className="text-4xl md:text-5xl font-bold tracking-tight">
//             {"Trending Now".split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="relative inline-block"
//                 initial={{ color: "#000000" }}
//                 animate={{
//                   color: ["#000000", "#f97316", "#000000"],
//                 }}
//                 transition={{
//                   delay: i * 0.1,
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatDelay: "Trending Now".length * 0.1 + 1,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         <p
//           ref={pRef}
//           className="text-lg text-gray-600 py-1"
//         >
//           Discover this week's hottest picks
//         </p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//         )}

//         <div
//           ref={containerRef}
//           onScroll={handleScroll}
//           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
//               >
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="absolute inset-0 z-30 pointer-events-none"
//                 ></Link>

//                 <div className="product-bg absolute inset-0 bg-gray-100"></div>

//                 <div className="relative h-full flex items-center justify-center p-6">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="product-image h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
//                   />
//                 </div>

//                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
//                   <div className="relative">
//                     <h3 className="product-name text-xl font-bold">
//                       {product.name}
//                     </h3>
//                     <p className="product-variant text-sm text-gray-600 mb-2">
//                       {product.variant}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="product-price text-orange-500 font-bold">
//                         {product.price}
//                       </span>
//                       <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 z-40">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <style jsx="true" global="true">{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

// import React, { useRef, useLayoutEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TrendingProduct = () => {
//   const containerRef = useRef(null);
//   const pRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(true);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   const products = [
//     {
//       id: "chicago",
//       name: "Batch 27",
//       variant: "Chicago",
//       price: "$100",
//       image: "/product-1.png",
//     },
//     {
//       id: "game-royal",
//       name: "Diesel",
//       variant: "Game Royal",
//       price: "$100",
//       image: "/product-2.png",
//     },
//     {
//       id: "pine-green",
//       name: "IsoGold",
//       variant: "Pine Green",
//       price: "$100",
//       image: "/product-3.png",
//     },
//     {
//       id: "court-purple",
//       name: "RYS",
//       variant: "Court Purple",
//       price: "$100",
//       image: "/product-4.png",
//     },
//     {
//       id: "another-product",
//       name: "New Whey",
//       variant: "Vanilla",
//       price: "$100",
//       image: "/product-1.png",
//     },
//   ];

//   useLayoutEffect(() => {
//     const el = pRef.current;
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: "top 80%",
//         end: "top 50%",
//         scrub: 1,
//       },
//     });

//     tl.fromTo(
//       el,
//       { opacity: 0, filter: "blur(10px)", y: 50 },
//       { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" }
//     );

//     return () => tl.kill();
//   }, []);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 2);
//     }
//   };

//   return (
//     // ## YAHAN PAR GALTI THI ##
//     // Neeche waali line se 'overflow-hidden' class hata di gayi hai.
//     <div className="min-h-screen bg-white text-black flex flex-col relative">
//       <header className="text-center py-12 px-4">
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.2 }}
//           className="relative inline-block"
//         >
//           <div className="text-4xl md:text-5xl font-bold tracking-tight">
//             {"Trending Now".split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="relative inline-block"
//                 initial={{ color: "#000000" }}
//                 animate={{ color: ["#000000", "#f97316", "#000000"] }}
//                 transition={{
//                   delay: i * 0.1,
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatDelay: "Trending Now".length * 0.1 + 1,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         <p ref={pRef} className="text-lg text-gray-600 py-1">
//           Discover this week's hottest picks
//         </p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//         )}

//         <div
//           ref={containerRef}
//           onScroll={handleScroll}
//           className="products-container w-full overflow-x-auto py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
//               >
//                 <Link
//                   to={`/products/${product.id}`}
//                   className="absolute inset-0 z-30"
//                 ></Link>

//                 <div className="relative h-full flex items-center justify-center p-6">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
//                   />
//                 </div>

//                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
//                   <h3 className="text-xl font-bold">{product.name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-orange-500 font-bold">{product.price}</span>
//                     <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-colors z-40 relative">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//           <style jsx global>{`
//         body, html {
//           overflow-x: visible !important;
//         }
//         .products-container {
//           overflow-x: auto !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrendingProduct = () => {
  const containerRef = useRef(null);
  const pRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const products = [
    // ... (your products array remains the same)
    {
      id: "chicago",
      name: "Batch 27",
      variant: "Chicago",
      price: "$100",
      image: "/product-1.png",
    },
    {
      id: "game-royal",
      name: "Diesel",
      variant: "Game Royal",
      price: "$100",
      image: "/product-2.png",
    },
    {
      id: "pine-green",
      name: "IsoGold",
      variant: "Pine Green",
      price: "$100",
      image: "/product-3.png",
    },
    {
      id: "court-purple",
      name: "RYS",
      variant: "Court Purple",
      price: "$100",
      image: "/product-4.png",
    },
    {
      id: "another-product",
      name: "New Whey",
      variant: "Vanilla",
      price: "$100",
      image: "/product-1.png",
    },
  ];

  useLayoutEffect(() => {
    const el = pRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    tl.fromTo(
      el,
      { opacity: 0, filter: "blur(10px)", y: 50 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" }
    );

    return () => tl.kill();
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 2);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col relative">
      <header className="text-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="relative inline-block"
        >
          <div className="text-4xl md:text-5xl font-bold tracking-tight">
            {"Trending Now".split("").map((char, i) => (
              <motion.span
                key={i}
                className="relative inline-block"
                initial={{ color: "#000000" }}
                animate={{ color: ["#000000", "#f97316", "#000000"] }}
                transition={{
                  delay: i * 0.1,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: "Trending Now".length * 0.1 + 1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <p ref={pRef} className="text-lg text-gray-600 py-1">
          Discover this week's hottest picks
        </p>
      </header>

      <main className="flex-1 w-full px-4 pb-12 relative">
        {!isAtStart && (
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        )}
        {!isAtEnd && (
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        )}

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="products-container w-full overflow-x-auto py-4 snap-x snap-mandatory"
        >
          <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
              >
                <Link
                  to={`/products/${product.id}`}
                  className="absolute inset-0 z-30"
                ></Link>

                <div className="relative h-full flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
                  />
                </div>

                {/* ## YAHAN PAR BADLAV KIYA GAYA HAI ## */}
                <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-40 border-t border-gray-200 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold">
                      {product.price}
                    </span>
                    {/* Ab yah button hover karne par kaam karega */}
                    <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-colors relative">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .products-container {
          overflow-x: auto !important;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .products-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrendingProduct;
