// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { motion } from 'framer-motion'; // (Step 1) Framer Motion import karein

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const aboutRef = useRef(null);
//   const wrapperRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const pRef = useRef(null); // (Step 2) Naye paragraph ke liye ref banayein

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Maujooda Timeline jo poore text block aur image ko animate karti hai
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//         },
//       });

//       tl.fromTo(
//         imageRef.current,
//         { scale: 0.8, opacity: 0, x: 100, filter: "blur(10px)" },
//         { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
//         0
//       );

//       tl.fromTo(
//         textRef.current,
//         { scale: 0.9, opacity: 0, x: -80, filter: "blur(5px)" },
//         { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
//         0.2
//       );
      
//       // (Step 3) Naye paragraph ke liye alag se GSAP animation
//       gsap.fromTo(
//         pRef.current,
//         {
//           opacity: 0,
//           filter: "blur(10px)",
//           y: 50,
//         },
//         {
//           opacity: 1,
//           filter: "blur(0px)",
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: pRef.current,
//             start: "top 85%", // Jab paragraph screen par 85% dikhe
//             end: "top 50%",   // Jab paragraph center mein pahunche
//             scrub: 1,
//           }
//         }
//       );

//     }, aboutRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={aboutRef}
//       className="about-section min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white relative"
//     >
//       <div className="container mx-auto">
//         <div
//           ref={wrapperRef}
//           className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20"
//         >
//           {/* Text Content Block */}
//           <div
//             ref={textRef}
//             className="lg:w-1/2 text-center lg:text-left"
//           >
//             {/* (Step 4) Nayi "About Us" heading Framer Motion ke saath */}
//             <motion.div
//                 initial={{ opacity: 0, filter: "blur(10px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 1.2 }}
//                 className="relative mb-4"
//             >
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight inline-block">
//                     {"About Us".split("").map((char, i) => (
//                         <motion.span
//                             key={i}
//                             className="relative inline-block"
//                             initial={{ color: "#000000" }}
//                             animate={{
//                                 color: ["#000000", "#f97316", "#000000"] // text-orange-500
//                             }}
//                             transition={{
//                                 delay: i * 0.1,
//                                 duration: 1.5,
//                                 repeat: Infinity,
//                                 repeatDelay: "About Us".length * 0.1 + 1
//                             }}
//                         >
//                             {char === " " ? "\u00A0" : char}
//                         </motion.span>
//                     ))}
//                 </h2>
//             </motion.div>

//             {/* Naya Paragraph GSAP animation ke saath */}
//             <p
//               ref={pRef}
//               className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8"
//             >
//               At BUILDAPE NUTRITION, our journey began with a singular passion for authentic health and wellness. We are dedicated to crafting premium supplements that empower you to achieve your fitness goals and build your best self, one scoop at a time.
//             </p>

            
//             <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-bold hover:scale-105 transition-transform">
//               Learn More
//             </button>
//           </div>

//           {/* Image Block */}
//           <div
//             ref={imageRef}
//             className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
//           >
//             <img
//               src="/about.png"
//               alt="About BUILDAPE NUTRITION"
//               className="max-w-full h-auto rounded-xl shadow-2xl"
//               style={{ maxHeight: "500px" }}
//             />
//           </div>
//         </div>
//       </div>
      
//       {/* Background Decoration */}
//       <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-orange-500 opacity-10 -z-10"></div>
//       <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-amber-500 opacity-10 -z-10"></div>
//     </section>
//   );
// };

// export default About;

// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { motion, AnimatePresence } from 'framer-motion';

// // Saara CSS ek hi jagah
// const pageStyles = `
// /* Global Styles & Fonts */
// @font-face {
//   font-family: "PPSupplyMono";
//   src: url("https://assets.codepen.io/7558/PPSupplyMono-Regular.ttf") format("truetype");
//   font-weight: normal;
//   font-style: normal;
// }
// @font-face {
//   font-family: "GT Standard";
//   src: url("https://assets.codepen.io/7558/GT-Standard-VF-Trial.woff2") format("woff2-variations");
//   font-weight: 300 900;
//   font-stretch: 0% 150%;
//   font-style: normal;
// }
// body {
//   margin: 0;
//   font-family: "GT Standard", system-ui, sans-serif;
//   background-color: #fff;
//   color: #000;
//   overflow-x: hidden;
// }
// * {
//   box-sizing: border-box;
// }

// /* About Section Styles */
// .about-section {
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5rem 1rem;
//   overflow: hidden;
//   position: relative;
//   background-color: #fff;
// }
// .interactive-background-container {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: 1;
// }
// .trail-img {
//   position: absolute;
//   object-fit: cover;
//   transform-origin: center;
//   pointer-events: none;
//   will-change: transform;
//   border-radius: 50%;
//   filter: blur(5px);
//   opacity: 0.8;
// }
// .about-section .container {
//   position: relative;
//   z-index: 10;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
// }
// .content-wrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.5rem;
// }
// @media (min-width: 1024px) {
//   .content-wrapper { flex-direction: row; gap: 5rem; }
// }
// .text-content {
//   flex: 1;
//   text-align: center;
// }
// .image-content {
//   flex: 1;
//   display: flex;
//   justify-content: center;
// }
// @media (min-width: 1024px) {
//   .text-content { text-align: left; }
// }
// .heading-container { margin-bottom: 1rem; }
// .main-heading { font-size: 2.5rem; font-weight: bold; line-height: 1.2; color: #000; }
// .char-span { display: inline-block; position: relative; }
// .paragraph { font-size: 1.125rem; line-height: 1.75; color: #333; margin-bottom: 2rem; }
// @media (min-width: 768px) {
//   .main-heading { font-size: 3rem; }
//   .paragraph { font-size: 1.25rem; }
// }
// .cta-button {
//   cursor: pointer;
//   padding: 0.75rem 2rem;
//   background-image: linear-gradient(to right, #f97316, #fbbf24);
//   border-radius: 9999px;
//   color: white;
//   font-weight: bold;
//   border: none;
//   transition: transform 0.2s ease-in-out;
// }
// .cta-button:hover { transform: scale(1.05); }
// .about-image {
//   max-width: 100%;
//   height: auto;
//   border-radius: 0.75rem;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
//   border: 2px solid rgba(249, 115, 22, 0.2);
//   max-height: 500px;
// }
// `;

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   // Saare Refs ek hi component mein
//   const aboutRef = useRef(null);
//   const wrapperRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const pRef = useRef(null);
//   const interactiveBgRef = useRef(null);

//   // Scroll-based animations ke liye useEffect
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (!wrapperRef.current) return;
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top center",
//           end: "center center",
//           scrub: 1,
//         },
//       });

//       tl.fromTo(
//         imageRef.current,
//         { scale: 0.8, opacity: 0, x: 100, filter: "blur(10px)" },
//         { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
//         0
//       );
//       tl.fromTo(
//         textRef.current,
//         { scale: 0.9, opacity: 0, x: -80, filter: "blur(5px)" },
//         { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
//         0.2
//       );
      
//       gsap.fromTo(
//         pRef.current,
//         { opacity: 0, filter: "blur(10px)", y: 50 },
//         {
//           opacity: 1,
//           filter: "blur(0px)",
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: pRef.current,
//             start: "top 85%",
//             scrub: 1,
//           },
//         }
//       );
//     }, aboutRef);

//     return () => ctx.revert();
//   }, []);

//   // Mouse-trail animation ke liye useEffect
//   useEffect(() => {
//     const container = interactiveBgRef.current;
//     if (!container) return;

//     const config = {
//       imageLifespan: 600,
//       mouseThreshold: 40,
//       inDuration: 600,
//       outDuration: 800,
//       inEasing: "cubic-bezier(.07,.5,.5,1)",
//       outEasing: "cubic-bezier(.87, 0, .13, 1)",
//       baseImageSize: 240,
//     };

//     const images = [
//       "https://assets.codepen.io/7558/cr-blurry-orange-small-001.jpg",
//       "https://assets.codepen.io/7558/cr-blurry-orange-small-002.jpg",
//       "https://assets.codepen.io/7558/cr-blurry-orange-small-003.jpg",
//       "https://assets.codepen.io/7558/cr-blurry-orange-small-004.jpg",
//       "https://assets.codepen.io/7558/cr-blurry-orange-small-005.jpg",
//     ];

//     let trail = [];
//     let mouseX = 0, lastMouseX = 0;
//     let mouseY = 0, lastMouseY = 0;
//     let animationFrameId;

//     const createImage = () => {
//       const imageSrc = images[Math.floor(Math.random() * images.length)];
//       const img = document.createElement("img");
//       img.className = "trail-img";
//       img.src = imageSrc;
//       img.style.width = `${config.baseImageSize}px`;
//       img.style.height = `${config.baseImageSize}px`;
      
//       const rect = container.getBoundingClientRect();
//       img.style.left = `${mouseX - rect.left}px`;
//       img.style.top = `${mouseY - rect.top}px`;
//       img.style.transform = `translate(-50%, -50%) scale(0)`;
//       img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;
      
//       container.appendChild(img);

//       setTimeout(() => { img.style.transform = `translate(-50%, -50%) scale(1)`; }, 10);
//       trail.push({ element: img, removeTime: Date.now() + config.imageLifespan });
//     };

//     const removeOldImages = () => {
//       const now = Date.now();
//       while (trail.length > 0 && now >= trail[0].removeTime) {
//         const imgObj = trail.shift();
//         imgObj.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
//         imgObj.element.style.transform = `translate(-50%, -50%) scale(0)`;
//         setTimeout(() => { imgObj.element.remove(); }, config.outDuration);
//       }
//     };

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };
    
//     const animate = () => {
//       const dx = mouseX - lastMouseX;
//       const dy = mouseY - lastMouseY;
//       if (Math.hypot(dx, dy) > config.mouseThreshold) {
//         createImage();
//         lastMouseX = mouseX;
//         lastMouseY = mouseY;
//       }
//       removeOldImages();
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     animate();

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//       if (container) container.innerHTML = "";
//     };
//   }, []);

//   return (
//     <>
//       <style>{pageStyles}</style>
//       <div className="App">
//         <main>
//           <section ref={aboutRef} className="about-section">
//             <div ref={interactiveBgRef} className="interactive-background-container"></div>
//             <div className="container">
//               <div ref={wrapperRef} className="content-wrapper">
//                 <div ref={textRef} className="text-content">
//                   <motion.div className="heading-container">
//                     <h2 className="main-heading">
//                       {"About Us".split("").map((char, i) => (
//                         <motion.span
//                           key={i}
//                           className="char-span"
//                           initial={{ color: "#000000" }}
//                           animate={{ color: ["#000000", "#f97316", "#000000"] }}
//                           transition={{
//                             delay: i * 0.1,
//                             duration: 1.5,
//                             repeat: Infinity,
//                             repeatDelay: "About Us".length * 0.1 + 1,
//                           }}
//                         >
//                           {char === " " ? "\u00A0" : char}
//                         </motion.span>
//                       ))}
//                     </h2>
//                   </motion.div>
//                   <p ref={pRef} className="paragraph">
//                     At BUILDAPE NUTRITION, our journey began with a singular passion for authentic health and wellness. We are dedicated to crafting premium supplements that empower you to achieve your fitness goals.
//                   </p>
//                   <button className="cta-button">Learn More</button>
//                 </div>
//                 <div ref={imageRef} className="image-content">
//                   <img
//                     src="https://i.ibb.co/6P3fL2j/about.png"
//                     alt="About BUILDAPE NUTRITION"
//                     className="about-image"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default About;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

// Saara CSS ek hi jagah
const pageStyles = `
/* Global Styles & Fonts */
@font-face {
  font-family: "PPSupplyMono";
  src: url("https://assets.codepen.io/7558/PPSupplyMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GT Standard";
  src: url("https://assets.codepen.io/7558/GT-Standard-VF-Trial.woff2") format("woff2-variations");
  font-weight: 300 900;
  font-stretch: 0% 150%;
  font-style: normal;
}
body {
  margin: 0;
  font-family: "GT Standard", system-ui, sans-serif;
  background-color: #fff;
  color: #000;
  overflow-x: hidden;
}
* {
  box-sizing: border-box;
}

/* About Section Styles */
.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
.interactive-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Content is above this with z-index 10 */
  pointer-events: none; /* Make sure it doesn't interfere with mouse events */
}
.trail-img {
  position: absolute;
  object-fit: cover;
  transform-origin: center;
  pointer-events: none;
  will-change: transform;
  border-radius: 50%;
  filter: blur(5px);
  opacity: 0.8;
}
.about-section .container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
@media (min-width: 1024px) {
  .content-wrapper { flex-direction: row; gap: 5rem; }
}
.text-content {
  flex: 1;
  text-align: center;
}
.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}
@media (min-width: 1024px) {
  .text-content { text-align: left; }
}
.heading-container { margin-bottom: 1rem; }
.main-heading { font-size: 2.5rem; font-weight: bold; line-height: 1.2; color: #000; }
.char-span { display: inline-block; position: relative; }
.paragraph { font-size: 1.125rem; line-height: 1.75; color: #333; margin-bottom: 2rem; }
@media (min-width: 768px) {
  .main-heading { font-size: 3rem; }
  .paragraph { font-size: 1.25rem; }
}
.cta-button {
  cursor: pointer;
  padding: 0.75rem 2rem;
  background-image: linear-gradient(to right, #f97316, #fbbf24);
  border-radius: 9999px;
  color: white;
  font-weight: bold;
  border: none;
  transition: transform 0.2s ease-in-out;
}
.cta-button:hover { transform: scale(1.05); }
.about-image {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(249, 115, 22, 0.2);
  max-height: 500px;
}
`;

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Saare Refs ek hi component mein
  const aboutRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const pRef = useRef(null);
  const interactiveBgRef = useRef(null);

  // Scroll-based animations ke liye useEffect
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wrapperRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, x: 100, filter: "blur(10px)" },
        { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
        0
      );

      // ❌ YAHAN SE BLUR HATA DIYA GAYA HAI
      tl.fromTo(
        textRef.current,
        { scale: 0.9, opacity: 0, x: -80 }, // filter: "blur(5px)" hata diya
        { scale: 1, opacity: 1, x: 0, duration: 1 }, // filter: "blur(0px)" hata diya
        0.2
      );
      
      // ❌ AUR YAHAN SE BHI BLUR HATA DIYA GAYA HAI
      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 50 }, // filter: "blur(10px)" hata diya
        {
          opacity: 1,
          y: 0, // filter: "blur(0px)" hata diya
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 85%",
            scrub: 1,
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  // Mouse-trail animation ke liye useEffect (Ismein koi change nahi)
  useEffect(() => {
    const container = interactiveBgRef.current;
    if (!container) return;

    const config = {
      imageLifespan: 600,
      mouseThreshold: 40,
      inDuration: 600,
      outDuration: 800,
      inEasing: "cubic-bezier(.07,.5,.5,1)",
      outEasing: "cubic-bezier(.87, 0, .13, 1)",
      baseImageSize: 240,
    };

    const images = [
      "/product-1.png",
      "/product-2.png",
      "/product-3.png",
      "/product-4.png",
      "/product-5.png",
      "/product-6.png",

    ];

    let trail = [];
    let mouseX = 0, lastMouseX = 0;
    let mouseY = 0, lastMouseY = 0;
    let animationFrameId;

    const createImage = () => {
      const imageSrc = images[Math.floor(Math.random() * images.length)];
      const img = document.createElement("img");
      img.className = "trail-img";
      img.src = imageSrc;
      img.style.width = `${config.baseImageSize}px`;
      img.style.height = `${config.baseImageSize}px`;
      
      const rect = container.getBoundingClientRect();
      img.style.left = `${mouseX - rect.left}px`;
      img.style.top = `${mouseY - rect.top}px`;
      img.style.transform = `translate(-50%, -50%) scale(0)`;
      img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;
      
      container.appendChild(img);

      setTimeout(() => { img.style.transform = `translate(-50%, -50%) scale(1)`; }, 10);
      trail.push({ element: img, removeTime: Date.now() + config.imageLifespan });
    };

    const removeOldImages = () => {
      const now = Date.now();
      while (trail.length > 0 && now >= trail[0].removeTime) {
        const imgObj = trail.shift();
        imgObj.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
        imgObj.element.style.transform = `translate(-50%, -50%) scale(0)`;
        setTimeout(() => { if (imgObj.element.parentNode) { imgObj.element.remove(); } }, config.outDuration);
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const animate = () => {
      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      if (Math.hypot(dx, dy) > config.mouseThreshold) {
        createImage();
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
      removeOldImages();
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style>{pageStyles}</style>
      <div className="App">
        <main>
          <section ref={aboutRef} className="about-section bg-white">
            <div ref={interactiveBgRef} className="interactive-background-container"></div>
            <div className="container">
              <div ref={wrapperRef} className="content-wrapper">
                <div ref={textRef} className="text-content">
                  <motion.div className="heading-container">
                    <h2 className="main-heading">
                      {"About Us".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          className="char-span"
                          initial={{ color: "#000000" }}
                          animate={{ color: ["#000000", "#f97316", "#000000"] }}
                          transition={{
                            delay: i * 0.1,
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: "About Us".length * 0.1 + 1,
                          }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </h2>
                  </motion.div>
                  <p ref={pRef} className="paragraph">
                    At BUILDAPE NUTRITION, our journey began with a singular passion for authentic health and wellness. We are dedicated to crafting premium supplements that empower you to achieve your fitness goals.
                  </p>
                  <button className="cta-button">Learn More</button>
                </div>
                <div ref={imageRef} className="image-content">
                  <img
                    src="/about.png"
                    alt="About BUILDAPE NUTRITION"
                    className="about-image"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;