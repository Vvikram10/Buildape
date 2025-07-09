// // // // // import React, { useEffect, useRef, useLayoutEffect } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import Header from '../../partials/Header';

// // // // // // Register ScrollTrigger plugin
// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // Style Component for Custom CSS
// // // // // const Style = () => (
// // // // //   <style>{`
// // // // //     /* Custom styles for the hero section and animations */
// // // // //     .shine-effect {
// // // // //         background: linear-gradient(90deg, rgba(255,255,255,0.7), #ffffff, rgba(255,255,255,0.7));
// // // // //         background-size: 200% 100%;
// // // // //         -webkit-background-clip: text;
// // // // //         -moz-background-clip: text;
// // // // //         background-clip: text;
// // // // //         color: transparent;
// // // // //         animation: shine 5s linear infinite;
// // // // //     }

// // // // //     @keyframes shine {
// // // // //         0% { background-position: 200% center; }
// // // // //         100% { background-position: -200% center; }
// // // // //     }

// // // // //     .split-parent {
// // // // //         overflow: hidden;
// // // // //     }
// // // // //   `}</style>
// // // // // );

// // // // // const Hero = () => {
// // // // //     const mainHeadlineRef = useRef(null);
// // // // //     const bottomContentRef = useRef(null);

// // // // //     useLayoutEffect(() => {
// // // // //         const headline = mainHeadlineRef.current;
// // // // //         const bottomContent = bottomContentRef.current;

// // // // //         // --- TEXT AND BUTTON ANIMATION ---
// // // // //         const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

// // // // //         tl.from(headline.querySelectorAll(".split-child"), {
// // // // //             y: "100%",
// // // // //             stagger: 0.1,
// // // // //             duration: 1.2,
// // // // //             ease: 'power4.out'
// // // // //         })
// // // // //         .add(() => {
// // // // //             if (headline) {
// // // // //                 headline.classList.add('shine-effect');
// // // // //             }
// // // // //         })
// // // // //         .from(bottomContent, {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             duration: 0.8
// // // // //         }, "-=0.8");

// // // // //         return () => {
// // // // //             tl.kill();
// // // // //         };
// // // // //     }, []);

// // // // //     return (
// // // // //         <section id="hero" className="hero-section panel min-h-screen w-full relative overflow-hidden text-white">
// // // // //           <Header />
// // // // //             <video
// // // // //                 id="background-video"
// // // // //                 className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
// // // // //                 autoPlay
// // // // //                 loop
// // // // //                 muted
// // // // //                 playsInline
// // // // //             >
// // // // //                 <source src="/video/zym.mp4" type="video/mp4" />
// // // // //                 Your browser does not support the video tag.
// // // // //             </video>
// // // // //             <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center">
// // // // //                 <div className="w-full h-full p-4 sm:p-8 md:p-16 flex flex-col">
// // // // //                     {/* Top Center Text */}
// // // // //                     <div className="flex-grow flex items-center justify-center text-center">
// // // // //                         <h1 ref={mainHeadlineRef} className="font-black uppercase tracking-tighter
// // // // //                             text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
// // // // //                             <span className="split-parent inline-block"><span className="split-child inline-block">💪 Fuel Your Fitness.</span></span>
// // // // //                             <span className="split-parent inline-block"><span className="split-child inline-block">Power Your Performance.</span></span>
// // // // //                         </h1>
// // // // //                     </div>

// // // // //                     {/* Bottom Left Text & Buttons */}
// // // // //                     <div ref={bottomContentRef} className="w-full max-w-md">
// // // // //                         <p className="text-base md:text-lg lg:text-xl font-light text-gray-200 mb-4">
// // // // //                             Premium protein blends made for strength, endurance & recovery.
// // // // //                         </p>
// // // // //                         <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-100 mb-8">
// // // // //                             🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
// // // // //                         </p>
// // // // //                         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
// // // // //                             <a href="#" className="btn-primary">Shop Now</a>
// // // // //                             <a href="#" className="btn-secondary">View Nutrition Info</a>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>
// // // // //             <Style />
// // // // //         </section>
// // // // //     );
// // // // // };

// // // // // export default Hero;

// // import React, { useRef, useLayoutEffect } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // gsap.registerPlugin(ScrollTrigger);

// // const Style = () => (
// //   <style>{`
// //     .main-headline {
// //         position: relative;
// //         z-index: 10;
// //         text-shadow: 0 2px 10px rgba(0,0,0,0.5);
// //     }

// //     .bottom-content {
// //         position: absolute;
// //         bottom: 10%;
// //         left: 0;
// //         right: 0;
// //         margin: 0 auto;
// //         text-align: center;
// //     }

// //     .text-gradient {
// //         background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
// //         background-size: 200% auto;
// //         -webkit-background-clip: text;
// //         background-clip: text;
// //         color: transparent;
// //     }

// //     .btn-primary {
// //         background: linear-gradient(90deg, #ff6b00, #ff3d00);
// //         transition: all 0.3s ease;
// //     }

// //     .btn-primary:hover {
// //         transform: translateY(-2px);
// //         box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4);
// //     }

// //     .btn-secondary {
// //         background: rgba(255,255,255,0.1);
// //         backdrop-filter: blur(10px);
// //         transition: all 0.3s ease;
// //     }

// //     .btn-secondary:hover {
// //         background: rgba(255,255,255,0.2);
// //         transform: translateY(-2px);
// //     }
// //   `}</style>
// // );

// // const Hero = () => {
// //     const mainHeadlineRef = useRef(null);
// //     const bottomContentRef = useRef(null);
// //     const videoRef = useRef(null);
// //     const line1Ref = useRef(null);
// //     const line2Ref = useRef(null);
// //     const ctaRef = useRef(null);

// //     useLayoutEffect(() => {
// //         // Main headline animation
// //         gsap.from(mainHeadlineRef.current, {
// //             opacity: 0,
// //             y: 50,
// //             duration: 1,
// //             ease: "power3.out"
// //         });

// //         // Bottom content animation (staggered)
// //         const tl = gsap.timeline({
// //             scrollTrigger: {
// //                 trigger: bottomContentRef.current,
// //                 start: "top bottom",
// //                 toggleActions: "play none none none"
// //             }
// //         });

// //         tl.from([line1Ref.current, line2Ref.current], {
// //             y: 30,
// //             opacity: 0,
// //             duration: 0.8,
// //             stagger: 0.2,
// //             ease: "back.out(1.7)"
// //         })
// //         .from(ctaRef.current, {
// //             y: 20,
// //             opacity: 0,
// //             duration: 0.6,
// //             ease: "power2.out"
// //         }, "-=0.4");

// //         // Continuous animation for main headline
// //         gsap.to(mainHeadlineRef.current, {
// //             y: "-=5",
// //             duration: 3,
// //             repeat: -1,
// //             yoyo: true,
// //             ease: "sine.inOut"
// //         });

// //         // Text shine effect
// //         gsap.to(".text-gradient", {
// //             backgroundPosition: "200% center",
// //             duration: 6,
// //             repeat: -1,
// //             ease: "linear"
// //         });

// //         return () => {
// //             tl.kill();
// //         };
// //     }, []);

// //     return (
// //         <section id="hero" className="hero-section panel min-h-screen w-full relative overflow-hidden text-white">
// //           {/* <Header /> */}
// //             <video
// //                 ref={videoRef}
// //                 id="background-video"
// //                 className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
// //                 autoPlay
// //                 loop
// //                 muted
// //                 playsInline
// //             >
// //                 <source src="/video/zym.mp4" type="video/mp4" />
// //                 Your browser does not support the video tag.
// //             </video>

// //             <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center">
// //                 {/* Main Headline - Center */}
// //                 <h1 ref={mainHeadlineRef} className="main-headline font-black uppercase tracking-tighter
// //                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-16 text-center opacity-0">
// //                     <span className="text-gradient inline-block">💪 Fuel Your Fitness.</span><br />
// //                     <span className="text-gradient inline-block">Power Your Performance.</span>
// //                 </h1>

// //                 {/* Bottom Content - Centered */}
// //                 <div ref={bottomContentRef} className="bottom-content w-full max-w-lg px-4">
// //                     <p ref={line1Ref} className="text-sm md:text-base lg:text-lg font-light text-gray-200 mb-3 opacity-0">
// //                         Premium protein blends made for strength, endurance & recovery.
// //                     </p>
// //                     <p ref={line2Ref} className="text-sm md:text-base lg:text-lg font-semibold text-white mb-6 opacity-0">
// //                         🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
// //                     </p>
// //                     <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0">
// //                         <a href="#" className="btn-primary text-sm py-3 px-6 rounded-full font-medium">
// //                             Shop Now
// //                         </a>
// //                         <a href="#" className="btn-secondary text-sm py-3 px-6 rounded-full font-medium border border-white/20">
// //                             View Nutrition Info
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Style />
// //         </section>
// //     );
// // };

// // export default Hero;

// // import React, { useRef, useLayoutEffect } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // gsap.registerPlugin(ScrollTrigger);

// // const Style = () => (
// //   <style>{`
// //     .main-headline {
// //         position: relative;
// //         z-index: 10;
// //         text-shadow: 0 2px 10px rgba(0,0,0,0.5);
// //     }

// //     .bottom-content {
// //         position: absolute;
// //         bottom: 10%;
// //         left: 0;
// //         right: 0;
// //         margin: 0 auto;
// //         text-align: center;
// //     }

// //     .text-gradient {
// //         background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
// //         background-size: 200% auto;
// //         -webkit-background-clip: text;
// //         background-clip: text;
// //         color: transparent;
// //     }

// //     .btn-primary {
// //         background: linear-gradient(90deg, #ff6b00, #ff3d00);
// //         transition: all 0.3s ease;
// //     }

// //     .btn-primary:hover {
// //         transform: translateY(-2px);
// //         box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4);
// //     }

// //     .btn-secondary {
// //         background: rgba(255,255,255,0.1);
// //         backdrop-filter: blur(10px);
// //         transition: all 0.3s ease;
// //     }

// //     .btn-secondary:hover {
// //         background: rgba(255,255,255,0.2);
// //         transform: translateY(-2px);
// //     }

// //     /* New styles for text animation */
// //     .title-row {
// //       display: flex;
// //     }

// //     .title-charts-cont {
// //       display: flex;
// //       overflow: hidden;
// //     }

// //     .title-charts-cont span {
// //       display: inline-block;
// //     }
// //   `}</style>
// // );

// // const Hero = () => {
// //     const mainHeadlineRef = useRef(null);
// //     const bottomContentRef = useRef(null);
// //     const videoRef = useRef(null);
// //     const line1Ref = useRef(null);
// //     const line2Ref = useRef(null);
// //     const ctaRef = useRef(null);

// //     // Create refs for each text part
// //     const fuelRef = useRef(null);
// //     const yourRef = useRef(null);
// //     const fitnessRef = useRef(null);
// //     const powerRef = useRef(null);
// //     const your2Ref = useRef(null);
// //     const performanceRef = useRef(null);

// //     useLayoutEffect(() => {
// //         // Custom ease function
// //         const customEaseIn = gsap.parseEase("0.52, 0.00, 0.48, 1.00");

// //         // Animation timeline
// //         const timeline = gsap.timeline();

// //         // Set initial positions
// //         gsap.set([fuelRef.current, yourRef.current, fitnessRef.current, powerRef.current, your2Ref.current, performanceRef.current], {
// //             x: (i) => (i % 2 === 0 ? "2.7rem" : "-2rem")
// //         });

// //         // Animate text parts
// //         timeline
// //             .to(fuelRef.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0)
// //             .to(yourRef.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0.133333)
// //             .to(fitnessRef.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0.133333)
// //             .to(powerRef.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0.133333)
// //             .to(your2Ref.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0.133333)
// //             .to(performanceRef.current, { x: "0rem", duration: 1.66666, ease: customEaseIn }, 0.133333);

// //         // Bottom content animation (staggered)
// //         const tl = gsap.timeline({
// //             scrollTrigger: {
// //                 trigger: bottomContentRef.current,
// //                 start: "top bottom",
// //                 toggleActions: "play none none none"
// //             }
// //         });

// //         tl.from([line1Ref.current, line2Ref.current], {
// //             y: 30,
// //             opacity: 0,
// //             duration: 0.8,
// //             stagger: 0.2,
// //             ease: "back.out(1.7)"
// //         })
// //         .from(ctaRef.current, {
// //             y: 20,
// //             opacity: 0,
// //             duration: 0.6,
// //             ease: "power2.out"
// //         }, "-=0.4");

// //         // Text shine effect
// //         gsap.to(".text-gradient", {
// //             backgroundPosition: "200% center",
// //             duration: 6,
// //             repeat: -1,
// //             ease: "linear"
// //         });

// //         return () => {
// //             timeline.kill();
// //             tl.kill();
// //         };
// //     }, []);

// //     return (
// //         <section id="hero" className="hero-section panel min-h-screen w-full relative overflow-hidden text-white">
// //             <video
// //                 ref={videoRef}
// //                 id="background-video"
// //                 className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
// //                 autoPlay
// //                 loop
// //                 muted
// //                 playsInline
// //             >
// //                 <source src="/video/zym.mp4" type="video/mp4" />
// //                 Your browser does not support the video tag.
// //             </video>

// //             <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center">
// //                 {/* Main Headline - Center */}
// //                 <h1 ref={mainHeadlineRef} className="main-headline font-black uppercase tracking-tighter
// //                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-16 text-center">
// //                     <div className="title-row">
// //                         <div className="title-charts-cont" ref={fuelRef}><span className="text-gradient inline-block">💪 Fuel</span></div>
// //                         <div className="title-charts-cont" ref={yourRef}><span className="text-gradient inline-block"> Your</span></div>
// //                         <div className="title-charts-cont" ref={fitnessRef}><span className="text-gradient inline-block"> Fitness.</span></div>
// //                     </div>
// //                     <div className="title-row">
// //                         <div className="title-charts-cont" ref={powerRef}><span className="text-gradient inline-block">Power</span></div>
// //                         <div className="title-charts-cont" ref={your2Ref}><span className="text-gradient inline-block"> Your</span></div>
// //                         <div className="title-charts-cont" ref={performanceRef}><span className="text-gradient inline-block"> Performance.</span></div>
// //                     </div>
// //                 </h1>

// //                 {/* Bottom Content - Centered */}
// //                 <div ref={bottomContentRef} className="bottom-content w-full max-w-lg px-4">
// //                     <p ref={line1Ref} className="text-sm md:text-base lg:text-lg font-light text-gray-200 mb-3 opacity-0">
// //                         Premium protein blends made for strength, endurance & recovery.
// //                     </p>
// //                     <p ref={line2Ref} className="text-sm md:text-base lg:text-lg font-semibold text-white mb-6 opacity-0">
// //                         🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
// //                     </p>
// //                     <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0">
// //                         <a href="#" className="btn-primary text-sm py-3 px-6 rounded-full font-medium">
// //                             Shop Now
// //                         </a>
// //                         <a href="#" className="btn-secondary text-sm py-3 px-6 rounded-full font-medium border border-white/20">
// //                             View Nutrition Info
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Style />
// //         </section>
// //     );
// // };

// // export default Hero;

// // // import React, { useRef, useLayoutEffect } from 'react';
// // // import { gsap } from 'gsap';
// // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // gsap.registerPlugin(ScrollTrigger);

// // // const Style = () => (
// // //   <style>{`
// // //     .hero-section {
// // //       display: flex;
// // //       justify-content: center;
// // //       align-items: center;
// // //       height: 100vh;
// // //       width: 100%;
// // //       position: relative;
// // //       overflow: hidden;
// // //     }

// // //     .main-headline {
// // //       position: relative;
// // //       z-index: 10;
// // //       text-shadow: 0 2px 10px rgba(0,0,0,0.5);
// // //       width: 100%;
// // //       text-align: center;
// // //       margin-top: -5vh; /* Adjust this to fine-tune vertical centering */
// // //     }

// // //     .bottom-content {
// // //       position: absolute;
// // //       bottom: 10%;
// // //       left: 0;
// // //       right: 0;
// // //       margin: 0 auto;
// // //       text-align: center;
// // //     }

// // //     .text-gradient {
// // //       background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
// // //       background-size: 200% auto;
// // //       -webkit-background-clip: text;
// // //       background-clip: text;
// // //       color: transparent;
// // //     }

// // //     .btn-primary {
// // //       background: linear-gradient(90deg, #ff6b00, #ff3d00);
// // //       transition: all 0.3s ease;
// // //     }

// // //     .btn-primary:hover {
// // //       transform: translateY(-2px);
// // //       box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4);
// // //     }

// // //     .btn-secondary {
// // //       background: rgba(255,255,255,0.1);
// // //       backdrop-filter: blur(10px);
// // //       transition: all 0.3s ease;
// // //     }

// // //     .btn-secondary:hover {
// // //       background: rgba(255,255,255,0.2);
// // //       transform: translateY(-2px);
// // //     }

// // //     /* Improved styles for text animation */
// // //     .title-container {
// // //       display: flex;
// // //       flex-direction: column;
// // //       justify-content: center;
// // //       align-items: center;
// // //       height: 100%;
// // //       width: 100%;
// // //     }

// // //     .title-row {
// // //       display: flex;
// // //       justify-content: center;
// // //       margin-bottom: 0.5rem;
// // //       overflow: hidden;
// // //     }

// // //     .title-word {
// // //       display: inline-block;
// // //       margin-right: 0.5rem;
// // //       overflow: hidden;
// // //     }

// // //     .title-word span {
// // //       display: inline-block;
// // //       will-change: transform;
// // //     }

// // //     .overlay {
// // //       display: flex;
// // //       flex-direction: column;
// // //       justify-content: center;
// // //       align-items: center;
// // //     }
// // //   `}</style>
// // // );

// // // const Hero = () => {
// // //     const mainHeadlineRef = useRef(null);
// // //     const bottomContentRef = useRef(null);
// // //     const videoRef = useRef(null);
// // //     const line1Ref = useRef(null);
// // //     const line2Ref = useRef(null);
// // //     const ctaRef = useRef(null);

// // //     // Create refs for each text part
// // //     const fuelRef = useRef(null);
// // //     const yourRef = useRef(null);
// // //     const fitnessRef = useRef(null);
// // //     const powerRef = useRef(null);
// // //     const your2Ref = useRef(null);
// // //     const performanceRef = useRef(null);

// // //     useLayoutEffect(() => {
// // //         // Custom ease function for smoother animation
// // //         const customEase = "power3.out";

// // //         // Set initial positions with more natural spacing
// // //         gsap.set([fuelRef.current, fitnessRef.current, powerRef.current, performanceRef.current], {
// // //             x: () => gsap.utils.random(100, 200),
// // //             opacity: 0
// // //         });

// // //         gsap.set([yourRef.current, your2Ref.current], {
// // //             x: () => gsap.utils.random(-200, -100),
// // //             opacity: 0
// // //         });

// // //         // Main animation timeline
// // //         const mainTimeline = gsap.timeline({
// // //             defaults: {
// // //                 duration: 1.2,
// // //                 ease: customEase
// // //             }
// // //         });

// // //         // Animate text parts with staggered timing and smoother movement
// // //         mainTimeline
// // //             .to(fuelRef.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.5
// // //             }, 0)
// // //             .to(yourRef.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.3
// // //             }, 0.1)
// // //             .to(fitnessRef.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.4
// // //             }, 0.2)
// // //             .to(powerRef.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.5
// // //             }, 0.3)
// // //             .to(your2Ref.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.3
// // //             }, 0.4)
// // //             .to(performanceRef.current, {
// // //                 x: 0,
// // //                 opacity: 1,
// // //                 duration: 1.6
// // //             }, 0.5);

// // //         // Add a subtle scale animation for more impact
// // //         gsap.fromTo(".title-word span",
// // //             { scale: 0.9 },
// // //             {
// // //                 scale: 1,
// // //                 duration: 1.5,
// // //                 ease: "elastic.out(1, 0.5)",
// // //                 stagger: 0.1
// // //             }
// // //         );

// // //         // Bottom content animation (staggered)
// // //         const bottomTimeline = gsap.timeline({
// // //             scrollTrigger: {
// // //                 trigger: bottomContentRef.current,
// // //                 start: "top bottom",
// // //                 toggleActions: "play none none none"
// // //             },
// // //             defaults: {
// // //                 duration: 0.8,
// // //                 ease: "back.out(1.7)"
// // //             }
// // //         });

// // //         bottomTimeline
// // //             .from(line1Ref.current, {
// // //                 y: 30,
// // //                 opacity: 0
// // //             })
// // //             .from(line2Ref.current, {
// // //                 y: 30,
// // //                 opacity: 0
// // //             }, "-=0.5")
// // //             .from(ctaRef.current, {
// // //                 y: 20,
// // //                 opacity: 0
// // //             }, "-=0.4");

// // //         // Continuous text shine effect
// // //         gsap.to(".text-gradient", {
// // //             backgroundPosition: "200% center",
// // //             duration: 8,
// // //             repeat: -1,
// // //             ease: "linear"
// // //         });

// // //         return () => {
// // //             mainTimeline.kill();
// // //             bottomTimeline.kill();
// // //         };
// // //     }, []);

// // //     return (
// // //         <section id="hero" className="hero-section panel min-h-screen w-full relative overflow-hidden text-white">
// // //             <video
// // //                 ref={videoRef}
// // //                 id="background-video"
// // //                 className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
// // //                 autoPlay
// // //                 loop
// // //                 muted
// // //                 playsInline
// // //             >
// // //                 <source src="/video/zym.mp4" type="video/mp4" />
// // //                 Your browser does not support the video tag.
// // //             </video>

// // //             <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center">
// // //                 {/* Main Headline - Centered */}
// // //                 <div className="title-container">
// // //                     <h1 ref={mainHeadlineRef} className="main-headline font-black uppercase tracking-tighter
// // //                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
// // //                         <div className="title-row">
// // //                             <div className="title-word" ref={fuelRef}><span className="text-gradient">💪 Fuel</span></div>
// // //                             <div className="title-word" ref={yourRef}><span className="text-gradient"> Your</span></div>
// // //                             <div className="title-word" ref={fitnessRef}><span className="text-gradient"> Fitness.</span></div>
// // //                         </div>
// // //                         <div className="title-row">
// // //                             <div className="title-word" ref={powerRef}><span className="text-gradient">Power</span></div>
// // //                             <div className="title-word" ref={your2Ref}><span className="text-gradient"> Your</span></div>
// // //                             <div className="title-word" ref={performanceRef}><span className="text-gradient"> Performance.</span></div>
// // //                         </div>
// // //                     </h1>
// // //                 </div>

// // //                 {/* Bottom Content - Centered */}
// // //                 <div ref={bottomContentRef} className="bottom-content w-full max-w-lg px-4">
// // //                     <p ref={line1Ref} className="text-sm md:text-base lg:text-lg font-light text-gray-200 mb-3 opacity-0">
// // //                         Premium protein blends made for strength, endurance & recovery.
// // //                     </p>
// // //                     <p ref={line2Ref} className="text-sm md:text-base lg:text-lg font-semibold text-white mb-6 opacity-0">
// // //                         🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
// // //                     </p>
// // //                     <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0">
// // //                         <a href="#" className="btn-primary text-sm py-3 px-6 rounded-full font-medium">
// // //                             Shop Now
// // //                         </a>
// // //                         <a href="#" className="btn-secondary text-sm py-3 px-6 rounded-full font-medium border border-white/20">
// // //                             View Nutrition Info
// // //                         </a>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //             <Style />
// // //         </section>
// // //     );
// // // };

// // // export default Hero;

// import React, { useRef, useLayoutEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   // Video loading states
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [showLoading, setShowLoading] = useState(true);
//   const videoRef = useRef(null);

//   // Text animation refs
//   const fuelRef = useRef(null);
//   const yourRef = useRef(null);
//   const fitnessRef = useRef(null);
//   const powerRef = useRef(null);
//   const your2Ref = useRef(null);
//   const performanceRef = useRef(null);
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const ctaRef = useRef(null);

//   // Handle video load
//   const handleVideoLoaded = () => {
//     setVideoLoaded(true);
//     setTimeout(() => setShowLoading(false), 500);
//   };

//   useLayoutEffect(() => {
//     // Preload video
//     if (videoRef.current) {
//       videoRef.current.preload = "auto";
//       videoRef.current.load();
//     }

//     // Fallback if video takes too long
//     const loadTimer = setTimeout(() => {
//       if (!videoLoaded) setShowLoading(false);
//     }, 5000);

//     // Text animations
//     const customEase = "power3.out";

//     // Set initial positions
//     gsap.set([fuelRef.current, fitnessRef.current, powerRef.current, performanceRef.current], {
//       x: () => gsap.utils.random(50, 150),
//       opacity: 0
//     });

//     gsap.set([yourRef.current, your2Ref.current], {
//       x: () => gsap.utils.random(-150, -50),
//       opacity: 0
//     });

//     // Main animation timeline
//     const mainTimeline = gsap.timeline({
//       defaults: {
//         duration: 1.2,
//         ease: customEase
//       }
//     });

//     // Animate text parts
//     mainTimeline
//       .to(fuelRef.current, { x: 0, opacity: 1, duration: 1.5 }, 0)
//       .to(yourRef.current, { x: 0, opacity: 1, duration: 1.3 }, 0.1)
//       .to(fitnessRef.current, { x: 0, opacity: 1, duration: 1.4 }, 0.2)
//       .to(powerRef.current, { x: 0, opacity: 1, duration: 1.5 }, 0.3)
//       .to(your2Ref.current, { x: 0, opacity: 1, duration: 1.3 }, 0.4)
//       .to(performanceRef.current, { x: 0, opacity: 1, duration: 1.6 }, 0.5);

//     // Scale animation
//     gsap.fromTo(".title-word span",
//       { scale: 0.9 },
//       {
//         scale: 1,
//         duration: 1.5,
//         ease: "elastic.out(1, 0.5)",
//         stagger: 0.1
//       }
//     );

//     // Bottom content animation
//     const bottomTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".bottom-content",
//         start: "top bottom",
//         toggleActions: "play none none none"
//       },
//       defaults: {
//         duration: 0.8,
//         ease: "back.out(1.7)"
//       }
//     });

//     bottomTimeline
//       .from(line1Ref.current, { y: 30, opacity: 0 })
//       .from(line2Ref.current, { y: 30, opacity: 0 }, "-=0.5")
//       .from(ctaRef.current, { y: 20, opacity: 0 }, "-=0.4");

//     // Text shine effect
//     gsap.to(".text-gradient", {
//       backgroundPosition: "200% center",
//       duration: 8,
//       repeat: -1,
//       ease: "linear"
//     });

//     return () => {
//       mainTimeline.kill();
//       bottomTimeline.kill();
//       clearTimeout(loadTimer);
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
//       {/* Video Container */}
//       <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
//         {/* Placeholder */}
//         <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//           <svg className="w-20 h-20 text-gray-700 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//           </svg>
//         </div>

//         {/* Video */}
//         <video
//           ref={videoRef}
//           className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//           autoPlay
//           loop
//           muted
//           playsInline
//           onCanPlayThrough={handleVideoLoaded}
//         >
//           <source src="/video/zym.mp4" type="video/mp4" />
//           <source src="/video/zym.webm" type="video/webm" />
//           Your browser does not support videos.
//         </video>
//       </div>

//       {/* Loading Overlay */}
//       {showLoading && (
//         <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
//           <div className="w-12 h-12 border-4 border-t-white border-opacity-30 rounded-full animate-spin" />
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//         {/* Main Headline - Responsive sizing */}
//         <div className="w-full max-w-6xl text-center px-4">
//           <h1 className="font-bold uppercase tracking-tight leading-none mb-4 md:mb-6">
//             <div className="flex justify-center flex-wrap">
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fuelRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   💪 Fuel
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={yourRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fitnessRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   Fitness.
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-center flex-wrap">
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={powerRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   Power
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={your2Ref}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={performanceRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                 >
//                   Performance.
//                 </span>
//               </div>
//             </div>
//           </h1>
//         </div>

//         {/* Bottom Content */}
//         <div className="bottom-content absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-full max-w-2xl px-4 text-center">
//           <p
//             ref={line1Ref}
//             className="text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-0"
//           >
//             Premium protein blends made for strength, endurance & recovery.
//           </p>
//           <p
//             ref={line2Ref}
//             className="text-white mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-0"
//           >
//             🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
//           </p>
//           <div
//             ref={ctaRef}
//             className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
//           >
//             <a
//               href="#"
//               className="btn-primary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               Shop Now
//             </a>
//             <a
//               href="#"
//               className="btn-secondary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base border border-white border-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               View Nutrition Info
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Gradient Text Style */}
//       <style jsx>{`
//         .text-gradient {
//           background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//         .btn-primary {
//           background: linear-gradient(90deg, #ff6b00, #ff3d00);
//         }
//         .btn-secondary {
//           background: rgba(255,255,255,0.1);
//           backdrop-filter: blur(10px);
//         }
//         .btn-secondary:hover {
//           background: rgba(255,255,255,0.2);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

// import React, { useRef, useLayoutEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   // Video loading states
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [showLoading, setShowLoading] = useState(true);
//   const videoRef = useRef(null);

//   // Text animation refs
//   const fuelRef = useRef(null);
//   const yourRef = useRef(null);
//   const fitnessRef = useRef(null);
//   const powerRef = useRef(null);
//   const your2Ref = useRef(null);
//   const performanceRef = useRef(null);
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const ctaRef = useRef(null);

//   // Handle video load
//   const handleVideoLoaded = () => {
//     setVideoLoaded(true);
//     setTimeout(() => setShowLoading(false), 500);
//   };

//   useLayoutEffect(() => {
//     // Preload video
//     if (videoRef.current) {
//       videoRef.current.preload = "auto";
//       videoRef.current.load();
//     }

//     // Fallback if video takes too long
//     const loadTimer = setTimeout(() => {
//       if (!videoLoaded) setShowLoading(false);
//     }, 5000);

//     // Text animations
//     const customEase = "power3.out";

//     // Set initial positions
//     gsap.set([fuelRef.current, fitnessRef.current, powerRef.current, performanceRef.current], {
//       x: () => gsap.utils.random(50, 150),
//       opacity: 0
//     });

//     gsap.set([yourRef.current, your2Ref.current], {
//       x: () => gsap.utils.random(-150, -50),
//       opacity: 0
//     });

//     // Main animation timeline
//     const mainTimeline = gsap.timeline({
//       defaults: {
//         duration: 1.2,
//         ease: customEase
//       }
//     });

//     // Animate text parts
//     mainTimeline
//       .to(fuelRef.current, { x: 0, opacity: 1, duration: 1.5 }, 0)
//       .to(yourRef.current, { x: 0, opacity: 1, duration: 1.3 }, 0.1)
//       .to(fitnessRef.current, { x: 0, opacity: 1, duration: 1.4 }, 0.2)
//       .to(powerRef.current, { x: 0, opacity: 1, duration: 1.5 }, 0.3)
//       .to(your2Ref.current, { x: 0, opacity: 1, duration: 1.3 }, 0.4)
//       .to(performanceRef.current, { x: 0, opacity: 1, duration: 1.6 }, 0.5);

//     // Scale animation
//     gsap.fromTo(".title-word span",
//       { scale: 0.9 },
//       {
//         scale: 1,
//         duration: 1.5,
//         ease: "elastic.out(1, 0.5)",
//         stagger: 0.1
//       }
//     );

//     // Bottom content animation
//     const bottomTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".bottom-content",
//         start: "top bottom",
//         toggleActions: "play none none none"
//       },
//       defaults: {
//         duration: 0.8,
//         ease: "back.out(1.7)"
//       }
//     });

//     bottomTimeline
//       .from(line1Ref.current, { y: 30, opacity: 0 })
//       .from(line2Ref.current, { y: 30, opacity: 0 }, "-=0.5")
//       .from(ctaRef.current, { y: 20, opacity: 0 }, "-=0.4");

//     // Text shine effect
//     gsap.to(".text-gradient", {
//       backgroundPosition: "200% center",
//       duration: 8,
//       repeat: -1,
//       ease: "linear"
//     });

//     return () => {
//       mainTimeline.kill();
//       bottomTimeline.kill();
//       clearTimeout(loadTimer);
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
//       {/* Video Container */}
//       <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
//         {/* Placeholder */}
//         <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//           <svg className="w-20 h-20 text-gray-700 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//           </svg>
//         </div>

//         {/* Video */}
//         <video
//           ref={videoRef}
//           className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//           autoPlay
//           loop
//           muted
//           playsInline
//           onCanPlayThrough={handleVideoLoaded}
//         >
//           <source src="/video/zym.mp4" type="video/mp4" />
//           <source src="/video/zym.webm" type="video/webm" />
//           Your browser does not support videos.
//         </video>
//       </div>

//       {/* Loading Overlay */}
//       {showLoading && (
//         <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
//           <div className="w-12 h-12 border-4 border-t-white border-opacity-30 rounded-full animate-spin" />
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//         {/* Main Headline - Responsive sizing */}
//         <div className="w-full max-w-6xl text-center px-4">
//           <h1 className="font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
//             <div className="flex justify-center flex-wrap">
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fuelRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   💪 Fuel
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={yourRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fitnessRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   Fitness.
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-center flex-wrap">
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={powerRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   Power
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={your2Ref}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="title-word overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={performanceRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
//                 >
//                   Performance.
//                 </span>
//               </div>
//             </div>
//           </h1>
//         </div>

//         {/* Bottom Content */}
//         <div className="bottom-content absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-full max-w-2xl px-4 text-center">
//           <p
//             ref={line1Ref}
//             className="text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-0"
//           >
//             Premium protein blends made for strength, endurance & recovery.
//           </p>
//           <p
//             ref={line2Ref}
//             className="text-white mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-0"
//           >
//             🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
//           </p>
//           <div
//             ref={ctaRef}
//             className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
//           >
//             <a
//               href="#"
//               className="btn-primary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//               style={{
//                 background: 'linear-gradient(90deg, #ff6b00, #ff3d00)',
//                 boxShadow: '0 5px 15px rgba(255, 59, 0, 0.4)'
//               }}
//             >
//               Shop Now
//             </a>
//             <a
//               href="#"
//               className="btn-secondary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base border border-white border-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
//               style={{
//                 background: 'rgba(255,255,255,0.1)',
//                 backdropFilter: 'blur(10px)'
//               }}
//             >
//               View Nutrition Info
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Gradient Text Style */}
//       <style jsx>{`
//         .text-gradient {
//           background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//         .btn-primary:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4) !important;
//         }
//         .btn-secondary:hover {
//           background: rgba(255,255,255,0.2) !important;
//           transform: translateY(-2px) !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

// import React, { useRef, useLayoutEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   // Video loading states
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [showLoading, setShowLoading] = useState(true);
//   const videoRef = useRef(null);

//   // Text animation refs
//   const fuelRef = useRef(null);
//   const yourRef = useRef(null);
//   const fitnessRef = useRef(null);
//   const powerRef = useRef(null);
//   const your2Ref = useRef(null);
//   const performanceRef = useRef(null);
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const ctaRef = useRef(null);

//   // Handle video load
//   const handleVideoLoaded = () => {
//     setVideoLoaded(true);
//     setTimeout(() => setShowLoading(false), 500);
//   };

//   useLayoutEffect(() => {
//     // Preload video
//     if (videoRef.current) {
//       videoRef.current.preload = "auto";
//       videoRef.current.load();
//     }

//     // Fallback if video takes too long
//     const loadTimer = setTimeout(() => {
//       if (!videoLoaded) setShowLoading(false);
//     }, 5000);

//     // Text animations
//     const customEase = "power3.out";

//     // Set initial positions - modified for better slide effect
//     gsap.set([fuelRef.current, powerRef.current], {
//       x: 100,
//       opacity: 0,
//     });

//     gsap.set(
//       [
//         yourRef.current,
//         fitnessRef.current,
//         your2Ref.current,
//         performanceRef.current,
//       ],
//       {
//         x: -100,
//         opacity: 0,
//       }
//     );

//     // Main animation timeline
//     const mainTimeline = gsap.timeline({
//       defaults: {
//         duration: 1,
//         ease: customEase,
//       },
//     });

//     // Animate text parts with staggered timing
//     mainTimeline
//       .to(fuelRef.current, { x: 0, opacity: 1 }, 0)
//       .to(yourRef.current, { x: 0, opacity: 1 }, 0.2)
//       .to(fitnessRef.current, { x: 0, opacity: 1 }, 0.4)
//       .to(powerRef.current, { x: 0, opacity: 1 }, 0.6)
//       .to(your2Ref.current, { x: 0, opacity: 1 }, 0.8)
//       .to(performanceRef.current, { x: 0, opacity: 1 }, 1.0);

//     // Bottom content animation
//     const bottomTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".bottom-content",
//         start: "top bottom",
//         toggleActions: "play none none none",
//       },
//       defaults: {
//         duration: 0.8,
//         ease: "back.out(1.7)",
//       },
//     });

//     bottomTimeline
//       .from(line1Ref.current, { y: 30, opacity: 0 })
//       .from(line2Ref.current, { y: 30, opacity: 0 }, "-=0.5")
//       .from(ctaRef.current, { y: 20, opacity: 0 }, "-=0.4");

//     // Text shine effect
//     gsap.to(".text-gradient", {
//       backgroundPosition: "200% center",
//       duration: 8,
//       repeat: -1,
//       ease: "linear",
//     });

//     return () => {
//       mainTimeline.kill();
//       bottomTimeline.kill();
//       clearTimeout(loadTimer);
//     };
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
//       {/* Video Container */}
//       <div
//         className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
//           videoLoaded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {/* Placeholder */}
//         <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
//           <svg
//             className="w-20 h-20 text-gray-700 animate-pulse"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//             />
//           </svg>
//         </div>

//         {/* Video */}
//         <video
//           ref={videoRef}
//           className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//           autoPlay
//           loop
//           muted
//           playsInline
//           onCanPlayThrough={handleVideoLoaded}
//         >
//           <source src="/video/zym.mp4" type="video/mp4" />
//           <source src="/video/zym.webm" type="video/webm" />
//           Your browser does not support videos.
//         </video>
//       </div>

//       {/* Loading Overlay */}
//       {showLoading && (
//         <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
//           <div className="w-12 h-12 border-4 border-t-white border-opacity-30 rounded-full animate-spin" />
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//         {/* Main Headline - Responsive sizing */}
//         <div className="w-full max-w-6xl text-center px-4">
//           <h1 className="font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
//             <div className="flex justify-center flex-wrap">
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fuelRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   💪 Fuel
//                 </span>
//               </div>
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={yourRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={fitnessRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   Fitness.
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-center flex-wrap">
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={powerRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   Power
//                 </span>
//               </div>
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={your2Ref}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   Your
//                 </span>
//               </div>
//               <div className="overflow-hidden px-1 sm:px-2">
//                 <span
//                   ref={performanceRef}
//                   className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                   style={{
//                     textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//                     display: "inline-block",
//                   }}
//                 >
//                   Performance.
//                 </span>
//               </div>
//             </div>
//           </h1>
//         </div>

//         {/* Bottom Content */}
//         <div className="bottom-content absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-full max-w-2xl px-4 text-center">
//           <p
//             ref={line1Ref}
//             className="text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-0"
//           >
//             Premium protein blends made for strength, endurance & recovery.
//           </p>
//           <p
//             ref={line2Ref}
//             className="text-white mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-0"
//           >
//             🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
//           </p>
//           <div
//             ref={ctaRef}
//             className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
//           >
//             <a
//               href="#"
//               className="btn-primary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
//               style={{
//                 background: "linear-gradient(90deg, #ff6b00, #ff3d00)",
//                 boxShadow: "0 5px 15px rgba(255, 59, 0, 0.4)",
//               }}
//             >
//               Shop Now
//             </a>
//             <a
//               href="#"
//               className="btn-secondary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base border border-white border-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 backdropFilter: "blur(10px)",
//               }}
//             >
//               View Nutrition Info
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Gradient Text Style */}
//       <style jsx>{`
//         .text-gradient {
//           background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//         .btn-primary:hover {
//           transform: translateY(-2px) !important;
//           box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4) !important;
//         }
//         .btn-secondary:hover {
//           background: rgba(255, 255, 255, 0.2) !important;
//           transform: translateY(-2px) !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Video loading states
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);

  // Text animation refs
  const fuelRef = useRef(null);
  const yourRef = useRef(null);
  const fitnessRef = useRef(null);
  const powerRef = useRef(null);
  const your2Ref = useRef(null);
  const performanceRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const ctaRef = useRef(null);

  // Handle video load
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setTimeout(() => setShowLoading(false), 500);
  };

  useLayoutEffect(() => {
    // Preload video
    if (videoRef.current) {
      videoRef.current.preload = "auto";
      videoRef.current.load();
    }

    // Fallback if video takes too long
    const loadTimer = setTimeout(() => {
      if (!videoLoaded) setShowLoading(false);
    }, 5000);

    // Text animations
    const customEase = "power3.out";

    // Set initial positions - modified for better slide effect
    gsap.set([fuelRef.current, powerRef.current], {
      x: 100,
      opacity: 0,
    });

    gsap.set(
      [
        yourRef.current,
        fitnessRef.current,
        your2Ref.current,
        performanceRef.current,
      ],
      {
        x: -100,
        opacity: 0,
      }
    );

    // Main animation timeline
    const mainTimeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: customEase,
      },
    });

    // Animate text parts with staggered timing
    mainTimeline
      .to(fuelRef.current, { x: 0, opacity: 1 }, 0)
      .to(yourRef.current, { x: 0, opacity: 1 }, 0.2)
      .to(fitnessRef.current, { x: 0, opacity: 1 }, 0.4)
      .to(powerRef.current, { x: 0, opacity: 1 }, 0.6)
      .to(your2Ref.current, { x: 0, opacity: 1 }, 0.8)
      .to(performanceRef.current, { x: 0, opacity: 1 }, 1.0);

    // Bottom content animation
    const bottomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".bottom-content",
        start: "top bottom",
        toggleActions: "play none none none",
      },
      defaults: {
        duration: 0.8,
        ease: "back.out(1.7)",
      },
    });

    bottomTimeline
      .from(line1Ref.current, { y: 30, opacity: 0 })
      .from(line2Ref.current, { y: 30, opacity: 0 }, "-=0.5")
      .from(ctaRef.current, { y: 20, opacity: 0 }, "-=0.4");

    // Text shine effect
    gsap.to(".text-gradient", {
      backgroundPosition: "200% center",
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    // Full page scroll effect
    ScrollTrigger.create({
      trigger: heroSectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onLeave: () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        });
      },
      onLeaveBack: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });

    return () => {
      mainTimeline.kill();
      bottomTimeline.kill();
      clearTimeout(loadTimer);
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <section 
      ref={heroSectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black snap-start"
    >
      {/* Rest of your existing component remains exactly the same */}
      {/* Video Container */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Placeholder */}
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-gray-700 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={handleVideoLoaded}
        >
          <source src="/video/zym.mp4" type="video/mp4" />
          <source src="/video/zym.webm" type="video/webm" />
          Your browser does not support videos.
        </video>
      </div>

      {/* Loading Overlay */}
      {showLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-t-white border-opacity-30 rounded-full animate-spin" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Headline - Responsive sizing */}
        <div className="w-full max-w-6xl text-center px-4">
          <h1 className="font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
            <div className="flex justify-center flex-wrap">
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={fuelRef}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  💪 Fuel
                </span>
              </div>
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={yourRef}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  Your
                </span>
              </div>
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={fitnessRef}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  Fitness.
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-wrap">
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={powerRef}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  Power
                </span>
              </div>
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={your2Ref}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  Your
                </span>
              </div>
              <div className="overflow-hidden px-1 sm:px-2">
                <span
                  ref={performanceRef}
                  className="text-gradient inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    display: "inline-block",
                  }}
                >
                  Performance.
                </span>
              </div>
            </div>
          </h1>
        </div>

        {/* Bottom Content */}
        <div className="bottom-content absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 w-full max-w-2xl px-4 text-center">
          <p
            ref={line1Ref}
            className="text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-0"
          >
            Premium protein blends made for strength, endurance & recovery.
          </p>
          <p
            ref={line2Ref}
            className="text-white mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-0"
          >
            🏋️‍♂️ Trusted by athletes. Backed by science. Tastes like victory.
          </p>
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 opacity-0"
          >
            <a
              href="#"
              className="btn-primary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "linear-gradient(90deg, #ff6b00, #ff3d00)",
                boxShadow: "0 5px 15px rgba(255, 59, 0, 0.4)",
              }}
            >
              Shop Now
            </a>
            <a
              href="#"
              className="btn-secondary inline-block py-2 sm:py-3 px-6 rounded-full font-medium text-sm sm:text-base border border-white border-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              View Nutrition Info
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Text Style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #ffffff, #f3f3f3, #ffffff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 5px 15px rgba(255, 59, 0, 0.4) !important;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
