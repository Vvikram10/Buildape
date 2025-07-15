
// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { FaUser } from "react-icons/fa";

// // // const Header = () => {
// // //   return (
// // //     <header className="w-full fixed top-0  z-50 pb-16">
// // //       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // //         {/* Logo with image */}
// // //         <Link to="/">
// // //           <img 
// // //             src="/white.png" // Replace with your actual logo path
// // //             alt="BUILDAPE" 
// // //             className="h-15" // Adjust height as needed
// // //           />
// // //         </Link>

// // //         {/* Navigation Links */}
// // //         <nav className="hidden md:flex space-x-6">
// // //           <Link to="/" className="hover:text-gray-600 text-white font-medium">
// // //             HOME
// // //           </Link>
// // //           <Link to="/menu" className="hover:text-gray-600 text-white font-medium">
// // //             MENU
// // //           </Link>
// // //           <Link to="/about" className="hover:text-gray-600 text-white font-medium">
// // //             ABOUT US
// // //           </Link>
// // //           <Link to="/contact" className="hover:text-gray-600 text-white font-medium">
// // //             CONTACT
// // //           </Link>
// // //         </nav>

// // //         {/* Login with icon */}
// // //         <div className="flex items-center space-x-4 ">
// // //           <Link 
// // //             to="/login" 
// // //             className="flex items-center space-x-1 hover:text-gray-600 rounded-full bg-white p-2"
// // //           >
// // //             {/* <span className="hidden md:inline">LOGIN</span> */}
// // //             <FaUser className="text-lg" />
// // //           </Link>
          
// // //           {/* Mobile Menu Button */}
// // //           <button className="md:hidden text-xl">☰</button>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import { FaUser } from "react-icons/fa";

// // // const Header = () => {
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       // 50px से ज़्यादा स्क्रॉल होने पर स्टेट बदलें
// // //       setIsScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     // ✅ मुख्य बदलाव यहाँ है: z-50 को z-[100] कर दिया गया है
// // //     <header
// // //       className={`w-full fixed top-0 z-[100] transition-all duration-300 ${
// // //         isScrolled ? "bg-white shadow-md" : "bg-transparent"
// // //       }`}
// // //     >
// // //       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // //         {/* Logo: स्क्रॉल होने पर लोगो भी बदलेगा */}
// // //         <Link to="/">
// // //           <img
// // //             src={isScrolled ? "/black.png" : "/white.png"}
// // //             alt="BUILDAPE"
// // //             className="h-12"
// // //           />
// // //         </Link>

// // //         {/* Navigation Links */}
// // //         <nav className="hidden md:flex space-x-6">
// // //           <Link
// // //             to="/"
// // //             className={`font-medium transition-colors ${
// // //               isScrolled
// // //                 ? "text-black hover:text-gray-600"
// // //                 : "text-white hover:text-gray-300"
// // //             }`}
// // //           >
// // //             HOME
// // //           </Link>
// // //           <Link
// // //             to="/menu"
// // //             className={`font-medium transition-colors ${
// // //               isScrolled
// // //                 ? "text-black hover:text-gray-600"
// // //                 : "text-white hover:text-gray-300"
// // //             }`}
// // //           >
// // //             MENU
// // //           </Link>
// // //            <Link to="/about"  className={`font-medium transition-colors ${
// // //               isScrolled
// // //                 ? "text-black hover:text-gray-600"
// // //                 : "text-white hover:text-gray-300"
// // //             }`}>
// // //              ABOUT US
// // //            </Link>
// // //            <Link to="/contact"  className={`font-medium transition-colors ${
// // //               isScrolled
// // //                 ? "text-black hover:text-gray-600"
// // //                 : "text-white hover:text-gray-300"
// // //             }`}>
// // //              CONTACT
// // //            </Link>
// // //         </nav>

// // //         {/* Icons */}
// // //         <div className="flex items-center space-x-4">
// // //           <Link
// // //             to="/login"
// // //             className={`flex items-center rounded-full p-2 transition-colors ${
// // //               isScrolled 
// // //                 ? "bg-gray-100 hover:bg-gray-200"
// // //                 : "bg-white hover:bg-gray-300"
// // //             }`}
// // //           >
// // //             <FaUser className="text-lg text-black" />
// // //           </Link>
          
// // //           <button className={`md:hidden text-2xl ${isScrolled ? "text-black" : "text-white"}`}>
// // //             ☰
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { FaUser } from "react-icons/fa";
// // import { gsap } from "gsap";

// // // A sub-component to avoid repeating the JSX for the header content.
// // const HeaderContent = ({ isInitial }) => {
// //   const textColor = isInitial ? "text-white" : "text-black";
// //   const hoverTextColor = isInitial ? "hover:text-gray-300" : "hover:text-gray-600";
// //   const logoSrc = isInitial ? "/white.png" : "/black.png";
// //   const userIconBg = isInitial ? "bg-white hover:bg-gray-300" : "bg-gray-100 hover:bg-gray-200";

// //   return (
// //     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// //       <Link to="/">
// //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// //       </Link>

// //       <nav className="hidden md:flex space-x-6">
// //         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //           HOME
// //         </Link>
// //         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //           MENU
// //         </Link>
// //         <Link to="/about" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //           ABOUT US
// //         </Link>
// //         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //           CONTACT
// //         </Link>
// //       </nav>

// //       <div className="flex items-center space-x-4">
// //         <Link
// //           to="/login"
// //           className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// //         >
// //           <FaUser className="text-lg text-black" />
// //         </Link>
// //         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>
// //           ☰
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };


// // const Header = () => {
// //   const location = useLocation();
// //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
// //   // Refs for the two content layers and the main header element
// //   const initialContentRef = useRef(null);
// //   const scrolledContentRef = useRef(null);
// //   const headerRef = useRef(null); // For the shadow

// //   // Main animation effect based on hero state
// //   useEffect(() => {
// //     const tl = gsap.timeline();
// //     if (isHeroActive) {
// //       // Animate IN: White content slides in from top, Black content slides out to bottom
// //       tl.to(initialContentRef.current, { y: '0%', duration: 0.6, ease: 'power3.inOut' })
// //         .to(scrolledContentRef.current, { y: '100%', duration: 0.6, ease: 'power3.inOut' }, '<');
// //     } else {
// //       // Animate OUT: White content slides out to top, Black content slides in from bottom
// //       tl.to(initialContentRef.current, { y: '-100%', duration: 0.6, ease: 'power3.inOut' })
// //         .to(scrolledContentRef.current, { y: '0%', duration: 0.6, ease: 'power3.inOut' }, '<');
// //     }

// //     // Toggle the shadow effect for depth
// //     gsap.to(headerRef.current, {
// //         boxShadow: isHeroActive ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
// //         duration: 0.5
// //     });
// //   }, [isHeroActive]);

// //   // Effect to handle route changes and event listeners
// //   useEffect(() => {
// //     const handleHeroHidden = () => setIsHeroActive(false);
// //     const handleHeroShown = () => setIsHeroActive(true);

// //     // If on the homepage, set up for the initial animation
// //     if (location.pathname === '/') {
// //       gsap.set(initialContentRef.current, { y: '0%' });
// //       gsap.set(scrolledContentRef.current, { y: '100%' });
// //       setIsHeroActive(true);

// //       window.addEventListener("hero:hidden", handleHeroHidden);
// //       window.addEventListener("hero:shown", handleHeroShown);
// //     } else {
// //       // On other pages, immediately show the "scrolled" (black text) version
// //       gsap.set(initialContentRef.current, { y: '-100%' });
// //       gsap.set(scrolledContentRef.current, { y: '0%' });
// //       setIsHeroActive(false);
// //     }

// //     return () => {
// //       window.removeEventListener("hero:hidden", handleHeroHidden);
// //       window.removeEventListener("hero:shown", handleHeroShown);
// //     };
// //   }, [location.pathname]);

// //   return (
// //     <header
// //       ref={headerRef}
// //       // The header is now a container that is always transparent but hides overflow
// //       className="w-full fixed top-0 z-[100] bg-transparent h-[72px] overflow-hidden" 
// //     >
// //       {/* Layer 1: Initial Content (White text) - Visible over the hero */}
// //       <div
// //         ref={initialContentRef}
// //         className="w-full absolute top-0 left-0"
// //       >
// //         <HeaderContent isInitial={true} />
// //       </div>

// //       {/* Layer 2: Scrolled Content (Black text) - Visible over the page content */}
// //       <div
// //         ref={scrolledContentRef}
// //         className="w-full absolute top-0 left-0"
// //       >
// //         <HeaderContent isInitial={false} />
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { gsap } from "gsap";

// // This sub-component doesn't need any changes.
// const HeaderContent = ({ isInitial }) => {
//   const textColor = isInitial ? "text-white" : "text-black";
//   const hoverTextColor = isInitial ? "hover:text-gray-300" : "hover:text-gray-600";
//   const logoSrc = isInitial ? "/white.png" : "/logo-1.png";
//   const userIconBg = isInitial ? "bg-white hover:bg-gray-300" : "bg-gray-100 hover:bg-gray-200";

//   return (
//     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//       <Link to="/">
//         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
//       </Link>
//       <nav className="hidden md:flex space-x-6">
//         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
//         <Link to="/about" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>ABOUT US</Link>
//         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//       </nav>
//       <div className="flex items-center space-x-4">
//         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//           <FaUser className="text-lg text-black" />
//         </Link>
//         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const location = useLocation();
//   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
//   const initialContentRef = useRef(null);
//   const scrolledContentRef = useRef(null);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     // This animation logic is perfect, we just need to trigger it at the right time.
//     const tl = gsap.timeline();
//     const duration = 1; // Match the hero's animation duration
//     const ease = 'power3.inOut'; // Match the hero's ease

//     if (isHeroActive) {
//       tl.to(initialContentRef.current, { y: '0%', duration, ease })
//         .to(scrolledContentRef.current, { y: '100%', duration, ease }, '<');
//     } else {
//       tl.to(initialContentRef.current, { y: '-100%', duration, ease })
//         .to(scrolledContentRef.current, { y: '0%', duration, ease }, '<');
//     }

//     // gsap.to(headerRef.current, {
//     //     boxShadow: isHeroActive ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
//     //     duration: 0.5
//     // });
//   }, [isHeroActive]);

//   useEffect(() => {
//     // ✅ KEY CHANGE: Listen for the "hiding" and "showing" events now.
//     const handleHeroHiding = () => setIsHeroActive(false);
//     const handleHeroShowing = () => setIsHeroActive(true);

//     if (location.pathname === '/') {
//       gsap.set(initialContentRef.current, { y: '0%' });
//       gsap.set(scrolledContentRef.current, { y: '100%' });
//       setIsHeroActive(true);

//       // Listen for the new, immediate events
//       window.addEventListener("hero:hiding", handleHeroHiding);
//       window.addEventListener("hero:showing", handleHeroShowing);
//     } else {
//       gsap.set(initialContentRef.current, { y: '-100%' });
//       gsap.set(scrolledContentRef.current, { y: '0%' });
//       setIsHeroActive(false);
//     }

//     return () => {
//       window.removeEventListener("hero:hiding", handleHeroHiding);
//       window.removeEventListener("hero:showing", handleHeroShowing);
//     };
//   }, [location.pathname]);

//   return (
//     <header
//       ref={headerRef}
//       className="w-full fixed top-0 z-[100] bg-transparent h-[72px] overflow-hidden" 
//     >
//       <div ref={initialContentRef} className="w-full absolute top-0 left-0">
//         <HeaderContent isInitial={true} />
//       </div>
//       <div ref={scrolledContentRef} className="w-full absolute top-0 left-0">
//         <HeaderContent isInitial={false} />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { gsap } from "gsap";

// // No changes needed in this part
// const HeaderContent = ({ isInitial }) => {
//   const textColor = isInitial ? "text-white" : "text-black";
//   const hoverTextColor = isInitial ? "hover:text-gray-300" : "hover:text-gray-600";
//   const logoSrc = isInitial ? "/white.png" : "/black.png";
//   const userIconBg = isInitial ? "bg-white hover:bg-gray-300" : "bg-gray-100 hover:bg-gray-200";

//   return (
//     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//       <Link to="/">
//         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
//       </Link>
//       <nav className="hidden md:flex space-x-6">
//         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
//         <Link to="/about" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>ABOUT US</Link>
//         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//       </nav>
//       <div className="flex items-center space-x-4">
//         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//           <FaUser className="text-lg text-black" />
//         </Link>
//         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const location = useLocation();
//   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
//   const initialContentRef = useRef(null);
//   const scrolledContentRef = useRef(null);
//   const headerRef = useRef(null);

//   // ✅ MAIN CHANGE IS HERE: The animation logic is updated.
//   useEffect(() => {
//     const tl = gsap.timeline();
//     const duration = 1; 
//     const ease = 'power3.inOut';

//     if (isHeroActive) {
//       // When hero appears: White slides DOWN, Black slides UP
//       tl.to(initialContentRef.current, { y: '0%', duration, ease })
//         .to(scrolledContentRef.current, { y: '-100%', duration, ease }, '<');
//     } else {
//       // When hero hides: White slides UP, Black slides DOWN
//       tl.to(initialContentRef.current, { y: '-100%', duration, ease })
//         .to(scrolledContentRef.current, { y: '0%', duration, ease }, '<');
//     }

//     gsap.to(headerRef.current, {
//         // boxShadow: isHeroActive ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
//         duration: 1
//     });
//   }, [isHeroActive]);

//   // ✅ AND THE INITIAL SETUP IS UPDATED HERE
//   useEffect(() => {
//     const handleHeroHiding = () => setIsHeroActive(false);
//     const handleHeroShowing = () => setIsHeroActive(true);

//     if (location.pathname === '/') {
//       // Scrolled (black) header now starts hidden ABOVE
//       gsap.set(initialContentRef.current, { y: '0%' });
//       gsap.set(scrolledContentRef.current, { y: '-100%' }); 
//       setIsHeroActive(true);

//       window.addEventListener("hero:hiding", handleHeroHiding);
//       window.addEventListener("hero:showing", handleHeroShowing);
//     } else {
//       // On other pages, show the scrolled header immediately
//       gsap.set(initialContentRef.current, { y: '-100%' });
//       gsap.set(scrolledContentRef.current, { y: '0%' });
//       setIsHeroActive(false);
//     }

//     return () => {
//       window.removeEventListener("hero:hiding", handleHeroHiding);
//       window.removeEventListener("hero:showing", handleHeroShowing);
//     };
//   }, [location.pathname]);

//   return (
//     <header
//       ref={headerRef}
//       className="w-full fixed top-0 z-[100] bg-transparent h-[72px] overflow-hidden" 
//     >
//       <div ref={initialContentRef} className="w-full absolute top-0 left-0">
//         <HeaderContent isInitial={true} />
//       </div>
//       <div ref={scrolledContentRef} className="w-full absolute top-0 left-0">
//         <HeaderContent isInitial={false} />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { gsap } from "gsap";

// इस हिस्से में कोई बदलाव नहीं है
const HeaderContent = ({ isInitial }) => {
  const textColor = isInitial ? "text-white" : "text-black";
  const hoverTextColor = isInitial ? "hover:text-gray-300" : "hover:text-gray-600";
  const logoSrc = isInitial ? "/white.png" : "/logo-1.png";
  const userIconBg = isInitial ? "bg-white hover:bg-gray-300" : "bg-gray-100 hover:bg-gray-200";

  return (
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <Link to="/">
        <img src={logoSrc} alt="BUILDAPE" className="h-12" />
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
        <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
        <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
        <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
          <FaUser className="text-lg text-black" />
        </Link>
        <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
      </div>
    </div>
  );
};

// इस कंपोनेंट में बदलाव किए गए हैं
const Header = () => {
  const location = useLocation();
  const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
  const initialContentRef = useRef(null);
  const scrolledContentRef = useRef(null);
  const headerRef = useRef(null);

  // ✅ मुख्य बदलाव यहाँ है: एनिमेशन की टाइमिंग बदल दी गई है।
  useEffect(() => {
    const tl = gsap.timeline();
    const ease = 'power3.inOut';
    
    // नीचे आने के लिए ज़्यादा समय (धीमा एनिमेशन)
    const slideDownDuration = 2; 
    // ऊपर जाने के लिए कम समय (तेज़ एनिमेशन)
    const slideUpDuration = 0.6;   

    if (isHeroActive) {
      // जब हीरो सेक्शन दिखता है: ब्लैक हेडर तेज़ी से ऊपर जाएगा
      tl.to(initialContentRef.current, { y: '0%', duration: slideUpDuration, ease })
        .to(scrolledContentRef.current, { y: '-100%', duration: slideUpDuration, ease }, '<');
    } else {
      // जब हीरो सेक्शन छिपता है: ब्लैक हेडर धीरे-धीरे नीचे आएगा
      tl.to(initialContentRef.current, { y: '-100%', duration: slideDownDuration, ease })
        .to(scrolledContentRef.current, { y: '0%', duration: slideDownDuration, ease }, '<');
    }

    gsap.to(headerRef.current, {
        duration: 0.5
    });
  }, [isHeroActive]);

  // इस हिस्से में कोई बदलाव नहीं है
  useEffect(() => {
    const handleHeroHiding = () => setIsHeroActive(false);
    const handleHeroShowing = () => setIsHeroActive(true);

    if (location.pathname === '/') {
      gsap.set(initialContentRef.current, { y: '0%' });
      gsap.set(scrolledContentRef.current, { y: '-100%' }); 
      setIsHeroActive(true);

      window.addEventListener("hero:hiding", handleHeroHiding);
      window.addEventListener("hero:showing", handleHeroShowing);
    } else {
      gsap.set(initialContentRef.current, { y: '-100%' });
      gsap.set(scrolledContentRef.current, { y: '0%' });
      setIsHeroActive(false);
    }

    return () => {
      window.removeEventListener("hero:hiding", handleHeroHiding);
      window.removeEventListener("hero:showing", handleHeroShowing);
    };
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 z-[100]  h-[72px] overflow-hidden" 
    >
      <div ref={initialContentRef} className=" bg-transparent w-full absolute top-0 left-0">
        <HeaderContent isInitial={true} />
      </div>
      <div ref={scrolledContentRef} className=" bg-white w-full absolute top-0 left-0">
        <HeaderContent isInitial={false} />
      </div>
    </header>
  );
};

export default Header;