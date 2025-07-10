

// import React, { useRef, useState } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   // यह ट्रैक करेगा कि एनीमेशन शुरू हुआ है या नहीं
//   const [hasSlid, setHasSlid] = useState(false);
//   // यह ट्रैक करेगा कि एनीमेशन खत्म हुआ है या नहीं, ताकि कंपोनेंट को हटाया जा सके
//   const [isAnimationComplete, setIsAnimationComplete] = useState(false);

//   const heroRef = useRef(null);

//   const slideUpHero = () => {
//     // यह सुनिश्चित करता है कि एनीमेशन सिर्फ एक बार ही चले
//     if (hasSlid || !heroRef.current) return;
//     setHasSlid(true);

//     // GSAP एनीमेशन जो कंपोनेंट को ऊपर स्लाइड करेगा
//     gsap.to(heroRef.current, {
//       y: "-100%", // कंपोनेंट को व्यू से 100% ऊपर भेज देगा
//       duration: 1.2,
//       ease: "power3.inOut",
//       // एनीमेशन पूरा होने के बाद यह फंक्शन चलेगा
//       onComplete: () => {
//         // state को true पर सेट करेगा, जिससे कंपोनेंट unmount हो जाएगा
//         setIsAnimationComplete(true);
//       },
//     });
//   };

//   // अगर एनीमेशन पूरा हो गया है, तो कुछ भी रेंडर न करें (कंपोनेंट हट जाएगा)
//   if (isAnimationComplete) {
//     return null;
//   }

//   // जब तक एनीमेशन पूरा नहीं होता, यह JSX रेंडर होगा
//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//       // क्लिक या टच पर एनीमेशन शुरू होगा
//       onClick={slideUpHero}
//       onTouchStart={slideUpHero}
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         playsInline
//         // वीडियो खत्म होने पर भी एनीमेशन शुरू होगा
//         onEnded={slideUpHero}
//       >
//         <source src="/video/zym.mp4" type="video/mp4" />
//       </video>

//       {/* आपके कंटेंट में कोई बदलाव नहीं है */}
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-white text-4xl sm:text-5xl font-bold">
//           💪 Fuel Your Fitness
//         </h1>
//         <p className="text-gray-300 mt-4 max-w-xl mx-auto">
//           Premium protein blends made for strength, endurance & recovery.
//         </p>
//         <div className="mt-6 flex justify-center gap-4">
//           <button className="bg-orange-600 text-white px-6 py-2 rounded-full">
//             Shop Now
//           </button>
//           <button className="bg-white text-black px-6 py-2 rounded-full">
//             View Nutrition Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";

// const Hero = () => {
//   const [hasSlid, setHasSlid] = useState(false);
//   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
//   const heroRef = useRef(null);

//   const slideUpHero = () => {
//     if (hasSlid || !heroRef.current) return;
//     setHasSlid(true);

//     gsap.to(heroRef.current, {
//       y: "-100%",
//       duration: 1.2,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setIsAnimationComplete(true);
//       },
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       // Only trigger if there's any scroll movement
//       if (window.scrollY > 0) {
//         slideUpHero();
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   if (isAnimationComplete) {
//     return null;
//   }

//   return (
//     <div
//       ref={heroRef}
//       className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
//       onClick={slideUpHero}
//       onTouchStart={slideUpHero}
//     >
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//         autoPlay
//         muted
//         playsInline
//         onEnded={slideUpHero}
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
//         <div className="mt-6 flex justify-center gap-4">
//           <button className="bg-orange-600 text-white px-6 py-2 rounded-full">
//             Shop Now
//           </button>
//           <button className="bg-white text-black px-6 py-2 rounded-full">
//             View Nutrition Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const Hero = () => {
  // isAnimating state animation ko baar-baar trigger hone se rokega
  const [isAnimating, setIsAnimating] = useState(false);
  // isAnimationComplete state component ko DOM se hatane ke liye
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  const heroRef = useRef(null);
  const touchStartY = useRef(0); // Touch start position ko store karne ke liye

  // Main animation function, wrapped in useCallback
  const slideUpHero = useCallback(() => {
    // Agar animation pehle se chal rahi hai, toh kuch na karein
    if (isAnimating || !heroRef.current) return;
    
    console.log("Animation triggered!");
    setIsAnimating(true);

    // GSAP Animation: Hero section ko upar slide karega
    gsap.to(heroRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        // Animation poori hone par:
        console.log("Animation Complete. Unlocking scroll.");
        
        // 1. Page ki scrolling wapas chalu karein
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        
        // 2. Component ko DOM se hatane ke liye state update karein
        setIsAnimationComplete(true);
      },
    });
  }, [isAnimating]); // Dependency: isAnimating, taaki function re-create na ho jab tak zaroori na ho.

  useEffect(() => {
    // --- EVENT HANDLERS (defined with useCallback for stable references) ---
    
    // 1. Mouse Wheel aur Trackpad ke liye
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        slideUpHero();
      }
    };
    
    // 2. Keyboard ke liye
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        slideUpHero();
      }
    };
    
    // 3. Touch events ke liye
    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        if (touchStartY.current > currentY + 5) {
            slideUpHero();
        }
    };

    // Component mount hote hi page ka scroll lock kar dein
    console.log("Hero mounted. Locking scroll.");
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // --- ADDING EVENT LISTENERS ---
    // Inhe tabhi add karein jab animation nahi chal rahi ho
    if (!isAnimating) {
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    // --- CLEANUP FUNCTION ---
    return () => {
      console.log("Cleaning up Hero listeners.");
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      
      // Safety ke liye, agar component unmount ho, to scroll unlock karein
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
    
  // KEY CHANGE: Dependency array is now empty.
  // Yeh useEffect ab sirf ek baar component ke mount hone par chalega.
  }, [isAnimating, slideUpHero]); 
  // isAnimating aur slideUpHero add kiya taaki listeners update ho sakein.

  // Animation poori hone ke baad component ko render na karein
  if (isAnimationComplete) {
    return null;
  }

  return (
    <div
      ref={heroRef}
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center overflow-hidden"
      onClick={slideUpHero}
    >
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
        onEnded={slideUpHero}
      >
        <source src="/video/zym.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          💪 Fuel Your Fitness
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Premium protein blends made for strength, endurance & recovery.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full">
            Shop Now
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full">
            View Nutrition Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;