

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   // ✅ Complete lockScroll function
//   const lockScroll = useCallback(() => {
//     document.documentElement.style.overflow = 'hidden';
//     document.body.style.overflow = 'hidden';
//   }, []);

//   // ✅ Complete unlockScroll function
//   const unlockScroll = useCallback(() => {
//     document.documentElement.style.overflow = 'auto';
//     document.body.style.overflow = 'auto';
//   }, []);

//   const hideHero = useCallback(() => {
//     if (isAnimating) return;
    
//     // Announce the INTENT to hide, which triggers the header animation.
//     window.dispatchEvent(new Event("hero:hiding"));

//     setIsAnimating(true);
//     gsap.to(heroRef.current, {
//       y: "-100%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(false);
//         setIsAnimating(false);
//         unlockScroll(); // Allow scrolling after hero is gone
//       },
//     });
//   }, [isAnimating, unlockScroll]);

//   const showHero = useCallback(() => {
//     if (isAnimating) return;

//     // Announce the INTENT to show.
//     window.dispatchEvent(new Event("hero:showing"));
    
//     setIsAnimating(true);
//     lockScroll(); // Prevent scrolling while hero is visible
//     gsap.to(heroRef.current, {
//       y: "0%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(true);
//         setIsAnimating(false);
//       },
//     });
//   }, [isAnimating, lockScroll]);

//   useEffect(() => {
//     if (isHeroVisible) {
//       lockScroll();
//     }

//     const handleWheel = (e) => {
//       if (isAnimating) {
//         e.preventDefault();
//         return;
//       }
//       if (e.deltaY > 0 && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };

//     // ✅ Complete handleKeyDown function
//     const handleKeyDown = (e) => {
//       if (isAnimating) return e.preventDefault();
      
//       if (['ArrowDown', 'PageDown', ' '].includes(e.key) && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.key === 'ArrowUp' && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
    
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("keydown", handleKeyDown, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("keydown", handleKeyDown);
//       unlockScroll(); // Safety cleanup
//     };
//   }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll]);

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-white text-4xl sm:text-5xl font-bold">
//           💪 Fuel Your Fitness
//         </h1>
//         <p className="text-gray-300 mt-4 max-w-xl mx-auto">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   // The text to animate
//   const textToAnimate = "Fuel Your Fitness";

//   // Scroll animation for the text
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

//   const lockScroll = useCallback(() => {
//     document.documentElement.style.overflow = 'hidden';
//     document.body.style.overflow = 'hidden';
//   }, []);

//   const unlockScroll = useCallback(() => {
//     document.documentElement.style.overflow = 'auto';
//     document.body.style.overflow = 'auto';
//   }, []);

//   const hideHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:hiding"));
//     setIsAnimating(true);
//     gsap.to(heroRef.current, {
//       y: "-100%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(false);
//         setIsAnimating(false);
//         unlockScroll();
//       },
//     });
//   }, [isAnimating, unlockScroll]);

//   const showHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:showing"));
//     setIsAnimating(true);
//     lockScroll();
//     gsap.to(heroRef.current, {
//       y: "0%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(true);
//         setIsAnimating(false);
//       },
//     });
//   }, [isAnimating, lockScroll]);

//   useEffect(() => {
//     if (isHeroVisible) {
//       lockScroll();
//     }
//     const handleWheel = (e) => {
//       if (isAnimating) {
//         e.preventDefault();
//         return;
//       }
//       if (e.deltaY > 0 && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     const handleKeyDown = (e) => {
//       if (isAnimating) return e.preventDefault();
//       if (['ArrowDown', 'PageDown', ' '].includes(e.key) && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.key === 'ArrowUp' && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("keydown", handleKeyDown, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("keydown", handleKeyDown);
//       unlockScroll();
//     };
//   }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll]);

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           style={{ y }} // For scroll-based hide/show
//           className="text-white text-6xl sm:text-8xl font-bold"
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.2 }}
//         >
//           {textToAnimate.split("").map((char, i) => (
//             <motion.span
//               key={i}
//               className="relative inline-block"
//               initial={{ color: "#FFFFFF" }}
//               animate={{
//                 color: ["#FFFFFF", "#f97316", "#FFFFFF"] // From white to orange and back
//               }}
//               transition={{
//                 delay: i * 0.1,
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatDelay: textToAnimate.length * 0.1 + 1
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h1>
//         <p className="text-gray-300 mt-4 max-w-xl mx-auto">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const headingRef = useRef(null); // h1 के लिए ref
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   // The text to animate
//   const textToAnimate = "Fuel Your Fitness";

//   // GSAP animations for the heading text
//   useEffect(() => {
//     const chars = headingRef.current.children;

//     // Create a GSAP timeline
//     const tl = gsap.timeline();

//     // 1. Initial blur-in animation for the whole heading
//     tl.fromTo(
//       headingRef.current,
//       { opacity: 0, filter: "blur(10px)" },
//       { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
//     );

//     // 2. Character-by-character color wave animation
//     tl.to(
//       chars,
//       {
//         color: "#f97316", // text-orange-500
//         duration: 0.75,
//         ease: "power1.inOut",
//         stagger: 0.1,
//         yoyo: true, // Animates back to the original color (white)
//         repeat: -1, // Repeats infinitely
//         repeatDelay: textToAnimate.length * 0.1 + 1,
//       },
//       "-=0.5" // Start this animation 0.5s before the previous one ends
//     );

//     // Cleanup function to kill the timeline when the component unmounts
//     return () => {
//       tl.kill();
//     };
//   }, []); // Run only once on component mount

//   // --- बाक़ी का लॉजिक (scrolling, hide/show) पहले जैसा ही रहेगा ---

//   const lockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";
//   }, []);

//   const unlockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "auto";
//     document.body.style.overflow = "auto";
//   }, []);

//   const hideHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:hiding"));
//     setIsAnimating(true);
//     gsap.to(heroRef.current, {
//       y: "-100%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(false);
//         setIsAnimating(false);
//         unlockScroll();
//       },
//     });
//   }, [isAnimating, unlockScroll]);

//   const showHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:showing"));
//     setIsAnimating(true);
//     lockScroll();
//     gsap.to(heroRef.current, {
//       y: "0%",
//       duration: 1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsHeroVisible(true);
//         setIsAnimating(false);
//       },
//     });
//   }, [isAnimating, lockScroll]);

//   useEffect(() => {
//     if (isHeroVisible) {
//       lockScroll();
//     }
//     const handleWheel = (e) => {
//       if (isAnimating) {
//         e.preventDefault();
//         return;
//       }
//       if (e.deltaY > 0 && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     const handleKeyDown = (e) => {
//       if (isAnimating) return e.preventDefault();
//       if (["ArrowDown", "PageDown", " "].includes(e.key) && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (
//         e.key === "ArrowUp" &&
//         !isHeroVisible &&
//         window.scrollY === 0
//       ) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("keydown", handleKeyDown, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("keydown", handleKeyDown);
//       unlockScroll();
//     };
//   }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll]);

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 text-center px-4">
//         <h1
//           ref={headingRef}
//           className="text-white font-bold text-[clamp(3rem,13vw,9rem)] leading-tight opacity-0" // Start with opacity-0
//         >
//           {textToAnimate.split("").map((char, i) => (
//             <span key={i} className="relative inline-block">
//               {char === " " ? "\u00A0" : char}
//             </span>
//           ))}
//         </h1>
//         <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const headingRef = useRef(null); // h1 के लिए ref
//   const paraRef = useRef(null); // पैराग्राफ के लिए ref

//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   // The text to animate
//   const textToAnimate = "Fuel Your Fitness";

//   // GSAP animations for the heading text (यह पहले जैसा ही है)
//   useEffect(() => {
//     const chars = headingRef.current.children;
//     const tl = gsap.timeline();

//     tl.fromTo(
//       headingRef.current,
//       { opacity: 0, filter: "blur(10px)" },
//       { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
//     );

//     tl.to(
//       chars,
//       {
//         color: "#f97316", // text-orange-500
//         duration: 0.75,
//         ease: "power1.inOut",
//         stagger: 0.1,
//         yoyo: true,
//         repeat: -1,
//         repeatDelay: textToAnimate.length * 0.1 + 1,
//       },
//       "-=0.5"
//     );

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   // --- Scroll Lock/Unlock Logic (यह पहले जैसा ही है) ---
//   const lockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";
//   }, []);

//   const unlockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "auto";
//     document.body.style.overflow = "auto";
//   }, []);

//   // --- नया और बेहतर hideHero फंक्शन ---
//   const hideHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:hiding"));
//     setIsAnimating(true);

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setIsHeroVisible(false);
//         setIsAnimating(false);
//         unlockScroll();
//       },
//     });

//     // 1. टेक्स्ट (h1 और p) को ऊपर स्लाइड करके छिपाएँ
//     tl.to(
//       [headingRef.current, paraRef.current],
//       {
//         y: -100, // ऊपर की ओर स्लाइड करें
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.in",
//         stagger: 0.1,
//       }
//     );

//     // 2. पूरे हीरो सेक्शन को ऊपर स्लाइड करें
//     tl.to(
//       heroRef.current,
//       {
//         y: "-100%",
//         duration: 1,
//         ease: "power3.inOut",
//       },
//       "-=0.5" // टेक्स्ट एनिमेशन खत्म होने से 0.5s पहले शुरू करें
//     );
//   }, [isAnimating, unlockScroll]);


//   // --- नया और बेहतर showHero फंक्शन ---
//   const showHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:showing"));
//     setIsAnimating(true);
//     lockScroll();

//     // दिखाने से पहले टेक्स्ट की पोजीशन सेट करें (छिपी हुई)
//     gsap.set([headingRef.current, paraRef.current], { y: -100, opacity: 0 });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setIsHeroVisible(true);
//         setIsAnimating(false);
//         // हीरो दिखने के बाद टेक्स्ट की स्टाइल रीसेट करें
//         gsap.set([headingRef.current, paraRef.current], { y: 0 });
//       },
//     });
    
//     // 1. पूरे हीरो सेक्शन को नीचे लाएँ
//     tl.to(heroRef.current, {
//       y: "0%",
//       duration: 1,
//       ease: "power3.inOut",
//     });

//     // 2. टेक्स्ट को ऊपर से नीचे स्लाइड करके दिखाएँ
//     tl.to(
//       [headingRef.current, paraRef.current],
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out",
//         stagger: 0.1,
//       },
//       "-=0.5" // हीरो सेक्शन के एनिमेशन के साथ-साथ चलाएँ
//     );
//   }, [isAnimating, lockScroll]);

//   // --- Event Listeners (यह पहले जैसा ही है) ---
//   useEffect(() => {
//     if (isHeroVisible) {
//       lockScroll();
//     }
//     const handleWheel = (e) => {
//       if (isAnimating) {
//         e.preventDefault();
//         return;
//       }
//       if (e.deltaY > 0 && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     const handleKeyDown = (e) => {
//       if (isAnimating) return e.preventDefault();
//       if (["ArrowDown", "PageDown", " "].includes(e.key) && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (
//         e.key === "ArrowUp" &&
//         !isHeroVisible &&
//         window.scrollY === 0
//       ) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("keydown", handleKeyDown, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("keydown", handleKeyDown);
//       unlockScroll();
//     };
//   }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll]);

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 text-center px-4">
//         <h1
//           ref={headingRef}
//           className="text-white font-bold text-[clamp(3rem,13vw,9rem)] leading-tight opacity-0" // Start with opacity-0
//         >
//           {textToAnimate.split("").map((char, i) => (
//             <span key={i} className="relative inline-block">
//               {char === " " ? "\u00A0" : char}
//             </span>
//           ))}
//         </h1>
//         {/* पैराग्राफ में ref जोड़ें */}
//         <p ref={paraRef} className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);

//   // हर शब्द के लिए अलग Ref
//   const fuelRef = useRef(null);
//   const yourRef = useRef(null);
//   const fitnessRef = useRef(null);

//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   // टेक्स्ट के तीन हिस्से
//   const textPart1 = "Fuel";
//   const textPart2 = "Your";
//   const textPart3 = "Fitness";

//   // --- यूनिक मल्टी-डायरेक्शनल शुरुआती एनिमेशन ---
//   useEffect(() => {
//     // Refs से एलिमेंट्स चुनें
//     const fuelElement = fuelRef.current;
//     const yourElement = yourRef.current;
//     const fitnessElement = fitnessRef.current;
//     const paragraphElement = paraRef.current;
//     const chars = headingRef.current.querySelectorAll("span > span > span");

//     // 1. हर शब्द की शुरुआती स्तिथि अलग-अलग सेट करें
//     gsap.set(fuelElement, { xPercent: -101, opacity: 0 }); // बाईं ओर
//     gsap.set(yourElement, { yPercent: -101, opacity: 0 }); // ऊपर की ओर
//     gsap.set(fitnessElement, { xPercent: 101, opacity: 0 });  // दाईं ओर
//     gsap.set(paragraphElement, { opacity: 0 });

//     const tl = gsap.timeline();

//     // 2. सभी शब्दों को उनकी जगह पर एनिमेट करें
//     tl.to([fuelElement, yourElement, fitnessElement], {
//       xPercent: 0,
//       yPercent: 0,
//       opacity: 1,
//       stagger: 0.2, // हर शब्द के आने के बीच 0.2s का गैप
//       duration: 1.5, // स्मूथ इफ़ेक्ट के लिए थोड़ी लंबी अवधि
//       ease: 'power4.out', // क्यूबिक-बेजियर जैसी स्मूथनेस
//     });

//     // 3. पैराग्राफ को Fade-in करें
//     tl.to(paragraphElement, {
//         opacity: 1,
//         duration: 0.8,
//     }, "-=1.2"); // हेडिंग एनिमेशन के साथ-साथ

//     // 4. कलर-वेव एनिमेशन शुरू करें
//     tl.to(
//       chars,
//       {
//         color: "#f97316",
//         duration: 0.75,
//         ease: "power1.inOut",
//         stagger: 0.08,
//         yoyo: true,
//         repeat: -1,
//         repeatDelay: (textPart1.length + textPart2.length + textPart3.length) * 0.1 + 1,
//       },
//       "-=0.5"
//     );

//     return () => {
//       tl.kill();
//     };
//   }, []);


//   // --- Scroll Lock/Unlock Logic (कोई बदलाव नहीं) ---
//   const lockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";
//   }, []);

//   const unlockScroll = useCallback(() => {
//     document.documentElement.style.overflow = "auto";
//     document.body.style.overflow = "auto";
//   }, []);

//   // --- hideHero फंक्शन (कोई बदलाव नहीं) ---
//   const hideHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:hiding"));
//     setIsAnimating(true);
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setIsHeroVisible(false);
//         setIsAnimating(false);
//         unlockScroll();
//       },
//     });
//     tl.to([headingRef.current, paraRef.current], {
//       y: -100,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.in",
//       stagger: 0.1,
//     });
//     tl.to(
//       heroRef.current,
//       {
//         y: "-100%",
//         duration: 1,
//         ease: "power3.inOut",
//       },
//       "-=0.5"
//     );
//   }, [isAnimating, unlockScroll]);

//   // --- showHero फंक्शन (कोई बदलाव नहीं) ---
//   const showHero = useCallback(() => {
//     if (isAnimating) return;
//     window.dispatchEvent(new Event("hero:showing"));
//     setIsAnimating(true);
//     lockScroll();
//     gsap.set([headingRef.current, paraRef.current], { y: -100, opacity: 0 });
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setIsHeroVisible(true);
//         setIsAnimating(false);
//         gsap.set([headingRef.current, paraRef.current], { y: 0 });
//       },
//     });
//     tl.to(heroRef.current, {
//       y: "0%",
//       duration: 1,
//       ease: "power3.inOut",
//     });
//     tl.to(
//       [headingRef.current, paraRef.current],
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out",
//         stagger: 0.1,
//       },
//       "-=0.5"
//     );
//   }, [isAnimating, lockScroll]);

//   // --- Event Listeners (कोई बदलाव नहीं) ---
//   useEffect(() => {
//     if (isHeroVisible) {
//       lockScroll();
//     }
//     const handleWheel = (e) => {
//       if (isAnimating) return e.preventDefault();
//       if (e.deltaY > 0 && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     const handleKeyDown = (e) => {
//       if (isAnimating) return e.preventDefault();
//       if (["ArrowDown", "PageDown", " "].includes(e.key) && isHeroVisible) {
//         e.preventDefault();
//         hideHero();
//       } else if (e.key === "ArrowUp" && !isHeroVisible && window.scrollY === 0) {
//         e.preventDefault();
//         showHero();
//       }
//     };
//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("keydown", handleKeyDown, { passive: false });
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("keydown", handleKeyDown);
//       unlockScroll();
//     };
//   }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll]);

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay muted loop playsInline
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 text-center px-4">
//         {/* --- अपडेटेड JSX स्ट्रक्चर --- */}
//         <h1
//           ref={headingRef}
//           className="text-white font-bold text-[clamp(3rem,13vw,9rem)] leading-tight"
//         >
//           {/* Fuel */}
//           <span className="inline-block overflow-hidden">
//             <span ref={fuelRef} className="inline-block">
//               {textPart1.split("").map((char, i) => (
//                 <span key={i} className="relative inline-block">{char}</span>
//               ))}
//             </span>
//           </span>
//           <span className="inline-block">&nbsp;</span>
//           {/* Your */}
//           <span className="inline-block overflow-hidden">
//             <span ref={yourRef} className="inline-block">
//               {textPart2.split("").map((char, i) => (
//                 <span key={i} className="relative inline-block">{char}</span>
//               ))}
//             </span>
//           </span>
//           <span className="inline-block">&nbsp;</span>
//           {/* Fitness */}
//           <span className="inline-block overflow-hidden">
//             <span ref={fitnessRef} className="inline-block">
//               {textPart3.split("").map((char, i) => (
//                 <span key={i} className="relative inline-block">{char}</span>
//               ))}
//             </span>
//           </span>
//         </h1>
//         <p ref={paraRef} className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  // Har shabd ke liye alag Ref
  const fuelRef = useRef(null);
  const yourRef = useRef(null);
  const fitnessRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [touchStartY, setTouchStartY] = useState(null); // Mobile touch ke liye state

  // Text ke teen hisse
  const textPart1 = "Fuel";
  const textPart2 = "Your";
  const textPart3 = "Fitness";

  // --- Unique multi-directional shuruaati animation ---
  useEffect(() => {
    const fuelElement = fuelRef.current;
    const yourElement = yourRef.current;
    const fitnessElement = fitnessRef.current;
    const paragraphElement = paraRef.current;
    const chars = headingRef.current.querySelectorAll("span > span > span");

    gsap.set(fuelElement, { xPercent: -101, opacity: 0 });
    gsap.set(yourElement, { yPercent: -101, opacity: 0 });
    gsap.set(fitnessElement, { xPercent: 101, opacity: 0 });
    gsap.set(paragraphElement, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to([fuelElement, yourElement, fitnessElement], {
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
    });

    tl.to(paragraphElement, {
        opacity: 1,
        duration: 0.8,
      }, "-=1.2");

    tl.to(
      chars,
      {
        color: "#f97316",
        duration: 0.75,
        ease: "power1.inOut",
        stagger: 0.08,
        yoyo: true,
        repeat: -1,
        repeatDelay: (textPart1.length + textPart2.length + textPart3.length) * 0.1 + 1,
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []); // Note: textPart lengths are constants, so not needed in deps


  // --- Scroll Lock/Unlock Logic ---
  const lockScroll = useCallback(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }, []);

  // --- hideHero function ---
  const hideHero = useCallback(() => {
    if (isAnimating) return;
    window.dispatchEvent(new Event("hero:hiding"));
    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => {
        setIsHeroVisible(false);
        setIsAnimating(false);
        unlockScroll();
      },
    });
    tl.to([headingRef.current, paraRef.current], {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.in",
      stagger: 0.1,
    });
    tl.to(
      heroRef.current,
      {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
  }, [isAnimating, unlockScroll]);

  // --- showHero function ---
  const showHero = useCallback(() => {
    if (isAnimating) return;
    window.dispatchEvent(new Event("hero:showing"));
    setIsAnimating(true);
    lockScroll();
    setIsHeroVisible(true); // Show hero content immediately
    gsap.set([headingRef.current, paraRef.current], { y: -100, opacity: 0 });
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        // Ensure the elements are perfectly at y: 0 after animation
        gsap.set([headingRef.current, paraRef.current], { y: 0 });
      },
    });
    tl.to(heroRef.current, {
      y: "0%",
      duration: 1,
      ease: "power3.inOut",
    });
    tl.to(
      [headingRef.current, paraRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.5"
    );
  }, [isAnimating, lockScroll]);

  // --- Event Listeners for Desktop & Mobile ---
  useEffect(() => {
    if (isHeroVisible) {
      lockScroll();
    } else {
      unlockScroll();
    }

    const handleWheel = (e) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }
      if (e.deltaY > 0 && isHeroVisible) {
        e.preventDefault();
        hideHero();
      } else if (e.deltaY < 0 && !isHeroVisible && window.scrollY === 0) {
        e.preventDefault();
        showHero();
      }
    };

    const handleKeyDown = (e) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }
      if (["ArrowDown", "PageDown", " "].includes(e.key) && isHeroVisible) {
        e.preventDefault();
        hideHero();
      } else if (e.key === "ArrowUp" && !isHeroVisible && window.scrollY === 0) {
        e.preventDefault();
        showHero();
      }
    };

    const handleTouchStart = (e) => {
      if (isAnimating) return;
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (isAnimating || touchStartY === null) return;
    
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY; // Positive delta = swipe up
      const swipeThreshold = 50; // Minimum swipe distance
    
      if (deltaY > swipeThreshold && isHeroVisible) {
        hideHero();
        setTouchStartY(null); // Reset after action
      } else if (deltaY < -swipeThreshold && !isHeroVisible && window.scrollY === 0) {
        showHero();
        setTouchStartY(null); // Reset after action
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      unlockScroll(); // Ensure scroll is unlocked on component unmount
    };
  }, [isAnimating, isHeroVisible, hideHero, showHero, lockScroll, unlockScroll, touchStartY]);

  return (
    <div
      ref={heroRef}
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center"
      style={{ visibility: isHeroVisible ? 'visible' : 'hidden' }} // Hide when not visible
    >
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/zym.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center px-4">
        <h1
          ref={headingRef}
          className="text-white font-bold text-[clamp(3rem,13vw,9rem)] leading-tight"
        >
          <span className="inline-block overflow-hidden">
            <span ref={fuelRef} className="inline-block">
              {textPart1.split("").map((char, i) => (
                <span key={i} className="relative inline-block">{char}</span>
              ))}
            </span>
          </span>
          <span className="inline-block">&nbsp;</span>
          <span className="inline-block overflow-hidden">
            <span ref={yourRef} className="inline-block">
              {textPart2.split("").map((char, i) => (
                <span key={i} className="relative inline-block">{char}</span>
              ))}
            </span>
          </span>
          <span className="inline-block">&nbsp;</span>
          <span className="inline-block overflow-hidden">
            <span ref={fitnessRef} className="inline-block">
              {textPart3.split("").map((char, i) => (
                <span key={i} className="relative inline-block">{char}</span>
              ))}
            </span>
          </span>
        </h1>
        <p ref={paraRef} className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
          Premium protein blends made for strength, endurance & recovery.
        </p>
      </div>
    </div>
  );
};

export default Hero;