

// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { Link, useLocation } from "react-router-dom";
// // // // // import { FaUser } from "react-icons/fa";
// // // // // import { gsap } from "gsap";

// // // // // // इस हिस्से में कोई बदलाव नहीं है
// // // // // const HeaderContent = ({ isInitial }) => {
// // // // //   const textColor = isInitial ? "text-white" : "text-white";
// // // // //   const hoverTextColor = isInitial ? "hover:text-gray-300" : "hover:text-gray-600";
// // // // //   const logoSrc = isInitial ? "/white.png" : "/white.png";
// // // // //   const userIconBg = isInitial ? "bg-white hover:bg-gray-300" : "bg-gray-100 hover:bg-gray-200";

// // // // //   return (
// // // // //     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // // // //       <Link to="/">
// // // // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // // // //       </Link>
// // // // //       <nav className="hidden md:flex space-x-6">
// // // // //         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// // // // //         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
// // // // //         <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// // // // //         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// // // // //       </nav>
// // // // //       <div className="flex items-center space-x-4">
// // // // //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // // // //           <FaUser className="text-lg text-black" />
// // // // //         </Link>
// // // // //         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // इस कंपोनेंट में बदलाव किए गए हैं
// // // // // const Header = () => {
// // // // //   const location = useLocation();
// // // // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
// // // // //   const initialContentRef = useRef(null);
// // // // //   const scrolledContentRef = useRef(null);
// // // // //   const headerRef = useRef(null);

// // // // //   // ✅ मुख्य बदलाव यहाँ है: एनिमेशन की टाइमिंग बदल दी गई है।
// // // // //   useEffect(() => {
// // // // //     const tl = gsap.timeline();
// // // // //     const ease = 'power3.inOut';
    
// // // // //     // नीचे आने के लिए ज़्यादा समय (धीमा एनिमेशन)
// // // // //     const slideDownDuration = 2; 
// // // // //     // ऊपर जाने के लिए कम समय (तेज़ एनिमेशन)
// // // // //     const slideUpDuration = 0.6;   

// // // // //     if (isHeroActive) {
// // // // //       // जब हीरो सेक्शन दिखता है: ब्लैक हेडर तेज़ी से ऊपर जाएगा
// // // // //       tl.to(initialContentRef.current, { y: '0%', duration: slideUpDuration, ease })
// // // // //         .to(scrolledContentRef.current, { y: '-100%', duration: slideUpDuration, ease }, '<');
// // // // //     } else {
// // // // //       // जब हीरो सेक्शन छिपता है: ब्लैक हेडर धीरे-धीरे नीचे आएगा
// // // // //       tl.to(initialContentRef.current, { y: '-100%', duration: slideDownDuration, ease })
// // // // //         .to(scrolledContentRef.current, { y: '0%', duration: slideDownDuration, ease }, '<');
// // // // //     }

// // // // //     gsap.to(headerRef.current, {
// // // // //         duration: 0.5
// // // // //     });
// // // // //   }, [isHeroActive]);

// // // // //   // इस हिस्से में कोई बदलाव नहीं है
// // // // //   useEffect(() => {
// // // // //     const handleHeroHiding = () => setIsHeroActive(false);
// // // // //     const handleHeroShowing = () => setIsHeroActive(true);

// // // // //     if (location.pathname === '/') {
// // // // //       gsap.set(initialContentRef.current, { y: '0%' });
// // // // //       gsap.set(scrolledContentRef.current, { y: '-100%' }); 
// // // // //       setIsHeroActive(true);

// // // // //       window.addEventListener("hero:hiding", handleHeroHiding);
// // // // //       window.addEventListener("hero:showing", handleHeroShowing);
// // // // //     } else {
// // // // //       gsap.set(initialContentRef.current, { y: '-100%' });
// // // // //       gsap.set(scrolledContentRef.current, { y: '0%' });
// // // // //       setIsHeroActive(false);
// // // // //     }

// // // // //     return () => {
// // // // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // // // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // // // //     };
// // // // //   }, [location.pathname]);

// // // // //   return (
// // // // //     <header
// // // // //       ref={headerRef}
// // // // //       className="w-full fixed top-0 z-[100]  h-[72px] overflow-hidden" 
// // // // //     >
// // // // //       <div ref={initialContentRef} className=" bg-transparent w-full absolute top-0 left-0">
// // // // //         <HeaderContent isInitial={true} />
// // // // //       </div>
// // // // //       <div ref={scrolledContentRef} className="bg-transparent  w-full absolute top-0 left-0">
// // // // //         <HeaderContent isInitial={false} />
// // // // //       </div>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { FaUser } from "react-icons/fa";
// // // // import { gsap } from "gsap";

// // // // // HeaderContent कंपोनेंट में कोई बदलाव नहीं है
// // // // const HeaderContent = ({ isInitial }) => {
// // // //   const textColor = "text-white";
// // // //   const hoverTextColor = "hover:text-gray-300";
// // // //   const logoSrc = "/white.png";
// // // //   const userIconBg = "bg-white hover:bg-gray-300";

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // // //       <Link to="/">
// // // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // // //       </Link>
// // // //       <nav className="hidden md:flex space-x-6">
// // // //         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// // // //         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
// // // //         <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// // // //         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// // // //       </nav>
// // // //       <div className="flex items-center space-x-4">
// // // //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // // //           <FaUser className="text-lg text-black" />
// // // //         </Link>
// // // //         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // // // ✅ इस कंपोनेंट को आपके नए लॉजिक के अनुसार बदला गया है
// // // // const Header = () => {
// // // //   const location = useLocation();
// // // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
// // // //   const initialContentRef = useRef(null);
// // // //   const scrolledContentRef = useRef(null);
// // // //   const headerRef = useRef(null);

// // // //   // ✅ मुख्य एनीमेशन लॉजिक यहाँ है
// // // //   useEffect(() => {
// // // //     const tl = gsap.timeline();
// // // //     const ease = 'power3.inOut';
// // // //     const duration = 1; // एनीमेशन की स्पीड

// // // //     if (isHeroActive) {
// // // //       // जब हीरो सेक्शन दिखे:
// // // //       // 1. ब्लैक हेडर ऊपर जाकर छिपेगा
// // // //       tl.to(scrolledContentRef.current, { y: '-100%', duration, ease });
// // // //       // 2. ट्रांसपेरेंट हेडर ऊपर से नीचे आकर दिखेगा
// // // //       tl.to(initialContentRef.current, { y: '0%', duration, ease }, "<"); // "<" मतलब दोनों एनीमेशन एक साथ चलेंगे
// // // //     } else {
// // // //       // जब हीरो सेक्शन छिपे (स्क्रॉल करने पर):
// // // //       // 1. ट्रांसपेरेंट हेडर ऊपर जाकर छिपेगा
// // // //       tl.to(initialContentRef.current, { y: '-100%', duration, ease });
// // // //       // 2. ब्लैक हेडर ऊपर से नीचे आकर दिखेगा
// // // //       tl.to(scrolledContentRef.current, { y: '0%', duration, ease }, "<");
// // // //     }
// // // //   }, [isHeroActive]);

// // // //   // ✅ पेज लोड पर हेडर की सही शुरुआती पोजीशन सेट करना
// // // //   useEffect(() => {
// // // //     const handleHeroHiding = () => setIsHeroActive(false);
// // // //     const handleHeroShowing = () => setIsHeroActive(true);

// // // //     if (location.pathname === '/') {
// // // //       // होमपेज पर, ट्रांसपेरेंट हेडर दिखेगा और ब्लैक वाला ऊपर छिपा रहेगा
// // // //       gsap.set(initialContentRef.current, { y: '0%' });
// // // //       gsap.set(scrolledContentRef.current, { y: '-100%' }); 
// // // //       setIsHeroActive(true);

// // // //       window.addEventListener("hero:hiding", handleHeroHiding);
// // // //       window.addEventListener("hero:showing", handleHeroShowing);
// // // //     } else {
// // // //       // दूसरे पेजों पर, ब्लैक हेडर दिखेगा और ट्रांसपेरेंट वाला ऊपर छिपा रहेगा
// // // //       gsap.set(initialContentRef.current, { y: '-100%' });
// // // //       gsap.set(scrolledContentRef.current, { y: '0%' });
// // // //       setIsHeroActive(false);
// // // //     }

// // // //     return () => {
// // // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // // //     };
// // // //   }, [location.pathname]);

// // // //   return (
// // // //     <header
// // // //       ref={headerRef}
// // // //       className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden" 
// // // //     >
// // // //       <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// // // //         <HeaderContent isInitial={true} />
// // // //       </div>
// // // //       <div ref={scrolledContentRef} className="bg-black w-full absolute top-0 left-0">
// // // //         <HeaderContent isInitial={false} />
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { FaUser } from "react-icons/fa";
// // // import { gsap } from "gsap";

// // // // HeaderContent कंपोनेंट में कोई बदलाव नहीं है
// // // const HeaderContent = ({ isInitial }) => {
// // //   const textColor = "text-white";
// // //   const hoverTextColor = "hover:text-gray-300";
// // //   const logoSrc = "/white.png";
// // //   const userIconBg = "bg-white hover:bg-gray-300";

// // //   return (
// // //     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // //       <Link to="/">
// // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // //       </Link>
// // //       <nav className="hidden md:flex space-x-6">
// // //         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// // //         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
// // //         <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// // //         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// // //       </nav>
// // //       <div className="flex items-center space-x-4">
// // //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // //           <FaUser className="text-lg text-black" />
// // //         </Link>
// // //         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ✅ इस कंपोनेंट में आपके बताए अनुसार बदलाव किया गया है
// // // const Header = () => {
// // //   const location = useLocation();
// // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
  
// // //   const initialContentRef = useRef(null);
// // //   const scrolledContentRef = useRef(null);
// // //   const headerRef = useRef(null);

// // //   // ✅ मुख्य बदलाव यहाँ एनीमेशन लॉजिक में है
// // //   useEffect(() => {
// // //     const tl = gsap.timeline();
// // //     const ease = 'power3.inOut';
// // //     // प्रत्येक एनीमेशन के लिए अवधि
// // //     const duration = 0.6; 

// // //     if (isHeroActive) {
// // //       // जब हीरो सेक्शन दिखे:
// // //       // 1. पहले ब्लैक हेडर ऊपर जाकर छिपेगा
// // //       tl.to(scrolledContentRef.current, { y: '-100%', duration, ease });
// // //       // 2. उसके बाद, ट्रांसपेरेंट हेडर ऊपर से नीचे आकर दिखेगा
// // //       // ⚠️ नोट: यहाँ से "<" हटा दिया गया है ताकि यह एनीमेशन पहले वाले के खत्म होने के बाद चले
// // //       tl.to(initialContentRef.current, { y: '0%', duration, ease });
// // //     } else {
// // //       // जब हीरो सेक्शन छिपे (स्क्रॉल करने पर):
// // //       // 1. पहले ट्रांसपेरेंट हेडर ऊपर जाकर छिपेगा
// // //       tl.to(initialContentRef.current, { y: '-100%', duration, ease });
// // //       // 2. उसके बाद, ब्लैक हेडर ऊपर से नीचे आकर दिखेगा
// // //       // ⚠️ नोट: यहाँ से भी "<" हटा दिया गया है
// // //       tl.to(scrolledContentRef.current, { y: '0%', duration, ease });
// // //     }
// // //   }, [isHeroActive]);

// // //   // पेज लोड पर हेडर की पोजीशन सेट करने वाले इस हिस्से में कोई बदलाव नहीं है
// // //   useEffect(() => {
// // //     const handleHeroHiding = () => setIsHeroActive(false);
// // //     const handleHeroShowing = () => setIsHeroActive(true);

// // //     if (location.pathname === '/') {
// // //       gsap.set(initialContentRef.current, { y: '0%' });
// // //       gsap.set(scrolledContentRef.current, { y: '-100%' }); 
// // //       setIsHeroActive(true);

// // //       window.addEventListener("hero:hiding", handleHeroHiding);
// // //       window.addEventListener("hero:showing", handleHeroShowing);
// // //     } else {
// // //       gsap.set(initialContentRef.current, { y: '-100%' });
// // //       gsap.set(scrolledContentRef.current, { y: '0%' });
// // //       setIsHeroActive(false);
// // //     }

// // //     return () => {
// // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // //     };
// // //   }, [location.pathname]);

// // //   return (
// // //     <header
// // //       ref={headerRef}
// // //       className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden" 
// // //     >
// // //       <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// // //         <HeaderContent isInitial={true} />
// // //       </div>
// // //       <div ref={scrolledContentRef} className="bg-black w-full absolute top-0 left-0">
// // //         <HeaderContent isInitial={false} />
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { FaUser,FaShoppingCart } from "react-icons/fa";
// // // import { gsap } from "gsap";

// // // // बदला हुआ: HeaderContent अब 'variant' prop लेता है
// // // const HeaderContent = ({ variant = 'dark' }) => { // 'dark' = सफ़ेद टेक्स्ट, 'light' = काला टेक्स्ट
// // //   const isLight = variant === 'light';

// // //   const textColor = isLight ? "text-black" : "text-white";
// // //   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
// // //   // सुनिश्चित करें कि आपके पास public फोल्डर में black.png लोगो है
// // //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// // //   const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
// // //   const userIconColor = isLight ? "text-black" : "text-black";

// // //   return (
// // //     <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// // //       <Link to="/">
// // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // //       </Link>
// // //       <nav className="hidden md:flex space-x-6 ">
// // //         <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// // //         <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
// // //         <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// // //         <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// // //       </nav>
// // //       {/* <div className="flex items-center space-x-4">
// // //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // //           <FaUser className={`text-lg ${userIconColor}`} />
// // //         </Link>
// // //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // //           <FaUser className={`text-lg ${userIconColor}`} />
// // //         </Link>
// // //         <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
// // //       </div> */}

// // //       <div className="flex items-center space-x-4">
// // //   {/* User Icon Link */}
// // //   <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // //     <FaUser className={`text-lg ${userIconColor}`} />
// // //   </Link>

// // //   {/* Shopping Cart Icon Link */}
// // //   <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// // //     <FaShoppingCart className={`text-lg ${userIconColor}`} />
// // //     {/* Optional: Cart item count badge */}
// // //     <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
// // //       3
// // //     </span>
// // //   </Link>

// // //   {/* Hamburger Menu Button */}
// // //   <button className={`md:hidden text-2xl transition-colors duration-300 ${textColor}`}>☰</button>
// // // </div>
// // //     </div>
// // //   );
// // // };

// // // const Header = () => {
// // //   const location = useLocation();
// // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
// // //   // नया स्टेट: स्क्रॉल किए गए हेडर के स्टाइल को ट्रैक करने के लिए
// // //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent'); // 'transparent' या 'light'

// // //   const initialContentRef = useRef(null);
// // //   const scrolledContentRef = useRef(null);
// // //   const headerRef = useRef(null);

// // //   // GSAP एनीमेशन लॉजिक (इसमें कोई बदलाव नहीं)
// // //   useEffect(() => {
// // //     const tl = gsap.timeline();
// // //     const ease = 'power3.inOut';
// // //     const duration = 0.6;

// // //     if (isHeroActive) {
// // //       tl.to(scrolledContentRef.current, { y: '-100%', duration, ease });
// // //       tl.to(initialContentRef.current, { y: '0%', duration, ease });
// // //     } else {
// // //       tl.to(initialContentRef.current, { y: '-100%', duration, ease });
// // //       tl.to(scrolledContentRef.current, { y: '0%', duration, ease });
// // //     }
// // //   }, [isHeroActive]);

// // //   // बदला हुआ: इवेंट्स को संभालने के लिए useEffect
// // //   useEffect(() => {
// // //     // यह फंक्शन TopProduct और Hero से आने वाले इवेंट्स को हैंडल करेगा
// // //     const handleHeaderUpdate = (event) => {
// // //       setScrolledHeaderStyle(event.detail.style);
// // //     };

// // //     const handleHeroHiding = () => setIsHeroActive(false);
// // //     const handleHeroShowing = () => setIsHeroActive(true);

// // //     window.addEventListener("header:update", handleHeaderUpdate);
// // //     window.addEventListener("hero:hiding", handleHeroHiding);
// // //     window.addEventListener("hero:showing", handleHeroShowing);

// // //     // पेज लोड पर सही हेडर सेट करें
// // //     if (location.pathname === '/') {
// // //       gsap.set(initialContentRef.current, { y: '0%' });
// // //       gsap.set(scrolledContentRef.current, { y: '-100%' });
// // //       setIsHeroActive(true);
// // //       setScrolledHeaderStyle('transparent'); // होमपेज पर डिफ़ॉल्ट ट्रांसपेरेंट
// // //     } else {
// // //       gsap.set(initialContentRef.current, { y: '-100%' });
// // //       gsap.set(scrolledContentRef.current, { y: '0%' });
// // //       setIsHeroActive(false);
// // //       setScrolledHeaderStyle('light'); // अन्य पेजों पर डिफ़ॉल्ट सफ़ेद
// // //     }

// // //     return () => {
// // //       window.removeEventListener("header:update", handleHeaderUpdate);
// // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // //     };
// // //   }, [location.pathname]);

// // //   // scrolledContentRef के लिए डायनामिक क्लास और वैरिएंट तय करें
// // //   const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
// // //   const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

// // //   return (
// // //     <header
// // //       ref={headerRef}
// // //       className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden"
// // //     >
// // //       {/* Hero सेक्शन के लिए हेडर (हमेशा ट्रांसपेरेंट) */}
// // //       <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// // //         <HeaderContent variant="dark" />
// // //       </div>

// // //       {/* स्क्रॉल करने के बाद दिखने वाला हेडर (डायनामिक स्टाइल) */}
// // //       <div
// // //         ref={scrolledContentRef}
// // //         className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}
// // //       >
// // //         <HeaderContent variant={scrolledContentVariant} />
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { FaUser, FaShoppingCart } from "react-icons/fa";
// // import { gsap } from "gsap";

// // // Helper Hook: स्क्रीन का साइज पता करने के लिए (इसमें कोई बदलाव नहीं)
// // const useMediaQuery = (query) => {
// //   const [matches, setMatches] = useState(false);
// //   useEffect(() => {
// //     const media = window.matchMedia(query);
// //     if (media.matches !== matches) {
// //       setMatches(media.matches);
// //     }
// //     const listener = () => setMatches(media.matches);
// //     window.addEventListener("resize", listener);
// //     return () => window.removeEventListener("resize", listener);
// //   }, [matches, query]);
// //   return matches;
// // };

// // // HeaderContent कंपोनेंट (इसमें कोई बदलाव नहीं)
// // const HeaderContent = ({ variant = 'dark', onMenuToggle, isMenuOpen, isDesktop }) => {
// //     const isLight = variant === 'light';
// //     const textColor = isLight ? "text-black" : "text-white";
// //     const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
// //     const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// //     const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
// //     const userIconColor = isLight ? "text-black" : "text-black";
// //     const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// //     return (
// //         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
// //             <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
// //             <nav className="hidden md:flex space-x-6">
// //                 <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// //                 <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
// //                 <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// //                 <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// //             </nav>
// //             <div className="flex items-center space-x-4">
// //                 <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}><FaUser className={`text-lg ${userIconColor}`} /></Link>
// //                 <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// //                     <FaShoppingCart className={`text-lg ${userIconColor}`} />
// //                     <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
// //                 </Link>
// //                 <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
// //                     {isMenuOpen ? '✕' : '☰'}
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // // मुख्य Header कंपोनेंट
// // const Header = () => {
// //     const location = useLocation();
// //     const isDesktop = useMediaQuery('(min-width: 768px)');
// //     const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
// //     const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent');
// //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //     const initialContentRef = useRef(null);
// //     const scrolledContentRef = useRef(null);
// //     const mobileMenuRef = useRef(null);

// //     const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

// //     // मोबाइल मेन्यू का एनीमेशन
// //     useEffect(() => {
// //         gsap.to(mobileMenuRef.current, { x: isMobileMenuOpen ? '0%' : '100%', duration: 0.5, ease: 'power3.inOut' });
// //         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
// //     }, [isMobileMenuOpen]);

// //     // --- ⭐ डेस्कटॉप का मुख्य स्लाइडिंग एनीमेशन ⭐ ---
// //     useEffect(() => {
// //         if (isDesktop) {
// //             const tl = gsap.timeline();
// //             const ease = 'power3.inOut';
// //             const duration = 0.6;

// //             if (isHeroActive) {
// //                 // जब यूजर स्क्रॉल करके पेज के टॉप पर वापस आता है
// //                 // 1. सफेद वाला हेडर (scrolledContentRef) ऊपर की तरफ स्लाइड होकर छिपेगा।
// //                 //    y: '-100%' का मतलब है कि यह अपनी ऊंचाई के बराबर ऊपर चला जाएगा।
// //                 //    <header> पर 'overflow-hidden' होने के कारण यह टॉप में मिलता हुआ गायब हो जाएगा।
// //                 tl.to(scrolledContentRef.current, { y: '-100%', duration: duration, ease: ease });

// //                 // 2. ट्रांसपेरेंट हेडर (initialContentRef) उसी समय ऊपर से स्लाइड होकर दिखेगा।
// //                 //    यह y: '-100%' (छिपी हुई पोजीशन) से y: '0%' (दिखने वाली पोजीशन) पर आएगा।
// //                 //    "<" का मतलब है कि यह एनीमेशन पिछले वाले के साथ ही शुरू होगा।
// //                 tl.to(initialContentRef.current, { y: '0%', duration: duration, ease: ease }, "<");

// //             } else {
// //                 // जब यूजर पेज पर नीचे की ओर स्क्रॉल करता है
// //                 // 1. ट्रांसपेरेंट हेडर (initialContentRef) ऊपर की तरफ स्लाइड होकर छिपेगा।
// //                 tl.to(initialContentRef.current, { y: '-100%', duration: duration, ease: ease });
                
// //                 // 2. सफेद वाला हेडर (scrolledContentRef) उसी समय ऊपर से स्लाइड होकर दिखेगा।
// //                 tl.to(scrolledContentRef.current, { y: '0%', duration: duration, ease: ease }, "<");
// //             }
// //         }
// //     }, [isHeroActive, isDesktop]);

// //     // --- शुरुआती सेटअप और इवेंट्स के लिए ---
// //     useEffect(() => {
// //         const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
// //         const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
// //         const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };
// //         window.addEventListener("header:update", handleHeaderUpdate);
// //         window.addEventListener("hero:hiding", handleHeroHiding);
// //         window.addEventListener("hero:showing", handleHeroShowing);

// //         if (isDesktop) {
// //             setIsMobileMenuOpen(false);
// //             if (location.pathname === '/') {
// //                 // होमपेज पर: ट्रांसपेरेंट दिखेगा, सफेद वाला ऊपर छिपा रहेगा।
// //                 gsap.set(initialContentRef.current, { y: '0%' });
// //                 gsap.set(scrolledContentRef.current, { y: '-100%' });
// //                 setIsHeroActive(true);
// //             } else {
// //                 // बाकी पेजों पर: सफेद दिखेगा, ट्रांसपेरेंट वाला ऊपर छिपा रहेगा।
// //                 gsap.set(initialContentRef.current, { y: '-100%' });
// //                 gsap.set(scrolledContentRef.current, { y: '0%' });
// //                 setIsHeroActive(false);
// //             }
// //         } else {
// //             // मोबाइल पर: सिर्फ सफेद वाला दिखेगा।
// //             gsap.set(initialContentRef.current, { y: '-100%' });
// //             gsap.set(scrolledContentRef.current, { y: '0%' });
// //             setIsHeroActive(false);
// //         }
// //         setScrolledHeaderStyle(location.pathname === '/' ? 'transparent' : 'light');

// //         return () => {
// //             window.removeEventListener("header:update", handleHeaderUpdate);
// //             window.removeEventListener("hero:hiding", handleHeroHiding);
// //             window.removeEventListener("hero:showing", handleHeroShowing);
// //         };
// //     }, [location.pathname, isDesktop]);

// //     const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
// //     const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

// //     return (
// //         <>
// //             <header className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden">
// //                 {/* यह ट्रांसपेरेंट हेडर है (Hero Section के लिए) */}
// //                 <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// //                     <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //                 </div>

// //                 {/* यह स्क्रॉल पर आने वाला सफेद/डायनामिक हेडर है */}
// //                 <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
// //                     <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //                 </div>
// //             </header>

// //             {/* यह मोबाइल का स्लाइडर मेन्यू है */}
// //             <div ref={mobileMenuRef} className="fixed top-0 left-0 w-full h-full bg-white z-[99] transform translate-x-full md:hidden">
// //                 <nav className="flex flex-col items-center justify-center h-full space-y-8">
// //                     <Link to="/" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>HOME</Link>
// //                     <Link to="/menu" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>MENU</Link>
// //                     <Link to="/consult" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>CONSULTANCY</Link>
// //                     <Link to="/contact" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>CONTACT</Link>
// //                 </nav>
// //             </div>
// //         </>
// //     );
// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { gsap } from "gsap";

// // Helper Hook: स्क्रीन का साइज पता करने के लिए
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);
//   return matches;
// };

// // HeaderContent कंपोनेंट
// const HeaderContent = ({ variant = 'dark', onMenuToggle, isMenuOpen, isDesktop }) => {
//     const isLight = variant === 'light';
//     const textColor = isLight ? "text-black" : "text-white";
//     const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
//     const logoSrc = isLight ? "/logo-1.png" : "/white.png";
//     const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
//     const userIconColor = isLight ? "text-black" : "text-black";
//     const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

//     return (
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//             <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
//             <nav className="hidden md:flex space-x-6">
//                 <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//                 <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
//                 <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
//                 <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//                 <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}><FaUser className={`text-lg ${userIconColor}`} /></Link>
//                 <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//                     <FaShoppingCart className={`text-lg ${userIconColor}`} />
//                     <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
//                 </Link>
//                 <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
//                     {isMenuOpen ? '✕' : '☰'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// // मुख्य Header कंपोनेंट
// const Header = () => {
//     const location = useLocation();
//     const isDesktop = useMediaQuery('(min-width: 768px)');
//     const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
//     const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const initialContentRef = useRef(null);
//     const scrolledContentRef = useRef(null);
//     const mobileMenuRef = useRef(null);

//     const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//     // मोबाइल मेन्यू का एनीमेशन
//     useEffect(() => {
//         gsap.to(mobileMenuRef.current, { x: isMobileMenuOpen ? '0%' : '100%', duration: 0.5, ease: 'power3.inOut' });
//         document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
//     }, [isMobileMenuOpen]);

//     // डेस्कटॉप का मुख्य स्लाइडिंग एनीमेशन
//     useEffect(() => {
//         if (isDesktop) {
//             const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

//             if (isHeroActive) {
//                 // 1. पहले सफेद हेडर को पूरी तरह ऊपर छिपाएं (top-0 के अंदर)
//                 tl.to(scrolledContentRef.current, { 
//                     y: '-100%', 
//                     duration: 0.4
//                 });
                
//                 // 2. 200ms का डिले (थोड़ी देर रुकें)
//                 tl.to({}, { duration: 0.2 });
                
//                 // 3. ट्रांसपेरेंट हेडर को नीचे slide करके लाएं (जैसे touch करके वापस लाया हो)
//                 tl.fromTo(initialContentRef.current, 
//                     { y: '-100%' }, 
//                     { y: '0%', duration: 0.6 }
//                 );

//             } else {
//                 // 1. पहले ट्रांसपेरेंट हेडर को पूरी तरह ऊपर छिपाएं (top-0 के अंदर)
//                 tl.to(initialContentRef.current, { 
//                     y: '-100%', 
//                     duration: 0.4
//                 });
                
//                 // 2. 200ms का डिले (थोड़ी देर रुकें)
//                 tl.to({}, { duration: 0.2 });
                
//                 // 3. सफेद हेडर को नीचे slide करके लाएं (जैसे touch करके वापस लाया हो)
//                 tl.fromTo(scrolledContentRef.current, 
//                     { y: '-100%' }, 
//                     { y: '0%', duration: 0.6 }
//                 );
//             }
//         }
//     }, [isHeroActive, isDesktop]);
//     // शुरुआती सेटअप और इवेंट्स के लिए
//     useEffect(() => {
//         const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
//         const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
//         const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };
//         window.addEventListener("header:update", handleHeaderUpdate);
//         window.addEventListener("hero:hiding", handleHeroHiding);
//         window.addEventListener("hero:showing", handleHeroShowing);

//         if (isDesktop) {
//             setIsMobileMenuOpen(false);
//             if (location.pathname === '/') {
//                 // होमपेज पर: ट्रांसपेरेंट दिखेगा, सफेद वाला ऊपर छिपा रहेगा
//                 gsap.set(initialContentRef.current, { y: '0%' });
//                 gsap.set(scrolledContentRef.current, { y: '-100%' });
//                 setIsHeroActive(true);
//             } else {
//                 // बाकी पेजों पर: सफेद दिखेगा, ट्रांसपेरेंट वाला ऊपर छिपा रहेगा
//                 gsap.set(initialContentRef.current, { y: '-100%' });
//                 gsap.set(scrolledContentRef.current, { y: '0%' });
//                 setIsHeroActive(false);
//             }
//         } else {
//             // मोबाइल पर: सिर्फ सफेद वाला दिखेगा
//             gsap.set(initialContentRef.current, { y: '-100%' });
//             gsap.set(scrolledContentRef.current, { y: '0%' });
//             setIsHeroActive(false);
//         }
//         setScrolledHeaderStyle(location.pathname === '/' ? 'transparent' : 'light');

//         return () => {
//             window.removeEventListener("header:update", handleHeaderUpdate);
//             window.removeEventListener("hero:hiding", handleHeroHiding);
//             window.removeEventListener("hero:showing", handleHeroShowing);
//         };
//     }, [location.pathname, isDesktop]);

//     const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
//     const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

//     return (
//         <>
//             <header className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden">
//                 {/* यह ट्रांसपेरेंट हेडर है (Hero Section के लिए) */}
//                 <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
//                     <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>

//                 {/* यह स्क्रॉल पर आने वाला सफेद/डायनामिक हेडर है */}
//                 <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
//                     <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>
//             </header>

//             {/* यह मोबाइल का स्लाइडर मेन्यू है */}
//             <div ref={mobileMenuRef} className="fixed top-0 left-0 w-full h-full bg-white z-[99] transform translate-x-full md:hidden">
//                 <nav className="flex flex-col items-center justify-center h-full space-y-8">
//                     <Link to="/" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>HOME</Link>
//                     <Link to="/menu" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>MENU</Link>
//                     <Link to="/consult" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>CONSULTANCY</Link>
//                     <Link to="/contact" className="text-2xl font-medium text-black" onClick={toggleMobileMenu}>CONTACT</Link>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaShoppingCart, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

// Helper Hook for screen size detection
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// HeaderContent Component
const HeaderContent = ({ variant = 'dark', onMenuToggle, isMenuOpen, isDesktop }) => {
    const isLight = variant === 'light';
    const textColor = isLight ? "text-black" : "text-white";
    const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
    const logoSrc = isLight ? "/logo-1.png" : "/white.png";
    const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
    const userIconColor = isLight ? "text-black" : "text-black";
    const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

    return (
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
            <nav className="hidden md:flex space-x-6">
                <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
                <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
                <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
                <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
                    <FaUser className={`text-lg ${userIconColor}`} />
                </Link>
                <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
                    <FaShoppingCart className={`text-lg ${userIconColor}`} />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
                </Link>
                <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
                    {isMenuOpen ? <FaTimes /> : '☰'}
                </button>
            </div>
        </div>
    );
};

// Main Header Component
const Header = () => {
    const location = useLocation();
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
    const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const initialContentRef = useRef(null);
    const scrolledContentRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current) {
            gsap.to(mobileMenuRef.current, {
                x: isMobileMenuOpen ? '0%' : '100%',
                duration: 0.3,
                ease: 'power2.inOut',
                overwrite: 'auto'
            });
            document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
        }
    }, [isMobileMenuOpen]);

    // Desktop header animation
    useEffect(() => {
        if (isDesktop) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

            if (isHeroActive) {
                tl.to(scrolledContentRef.current, { y: '-100%', duration: 0.4 });
                tl.to({}, { duration: 0.2 });
                tl.fromTo(initialContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
            } else {
                tl.to(initialContentRef.current, { y: '-100%', duration: 0.4 });
                tl.to({}, { duration: 0.2 });
                tl.fromTo(scrolledContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
            }
        }
    }, [isHeroActive, isDesktop]);

    // Initial setup and events
    useEffect(() => {
        const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
        const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
        const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };
        
        window.addEventListener("header:update", handleHeaderUpdate);
        window.addEventListener("hero:hiding", handleHeroHiding);
        window.addEventListener("hero:showing", handleHeroShowing);

        if (isDesktop) {
            setIsMobileMenuOpen(false);
            if (location.pathname === '/') {
                gsap.set(initialContentRef.current, { y: '0%' });
                gsap.set(scrolledContentRef.current, { y: '-100%' });
                setIsHeroActive(true);
            } else {
                gsap.set(initialContentRef.current, { y: '-100%' });
                gsap.set(scrolledContentRef.current, { y: '0%' });
                setIsHeroActive(false);
            }
        } else {
            gsap.set(initialContentRef.current, { y: '-100%' });
            gsap.set(scrolledContentRef.current, { y: '0%' });
            setIsHeroActive(false);
        }
        setScrolledHeaderStyle(location.pathname === '/' ? 'transparent' : 'light');

        return () => {
            window.removeEventListener("header:update", handleHeaderUpdate);
            window.removeEventListener("hero:hiding", handleHeroHiding);
            window.removeEventListener("hero:showing", handleHeroShowing);
        };
    }, [location.pathname, isDesktop]);

    const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
    const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

    return (
        <>
            <header className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden">
                {/* Transparent Header (for Hero Section) */}
                <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
                    <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
                </div>

                {/* Scrolled White Header */}
                <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
                    <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
                </div>
            </header>

            {/* Mobile Menu (Right to Left Slide) */}
<div 
  ref={mobileMenuRef}
  className="fixed top-0 right-0 w-full h-full bg-white z-[100] transform translate-x-full shadow-xl md:hidden"
  style={{ willChange: 'transform' }}
>
  {/* Header with Logo and Close Button */}
  <div className="p-4 border-b flex justify-between items-center">
    <Link to="/" onClick={toggleMobileMenu}>
      <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
    </Link>
    <button 
      onClick={toggleMobileMenu} 
      className="text-2xl text-gray-700 focus:outline-none"
      aria-label="Close menu"
    >
      <FaTimes className="text-xl" /> {/* Thin close icon */}
    </button>
  </div>
  
  {/* Navigation Links */}
  <nav className="flex flex-col space-y-4 p-4">
    <Link to="/" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>HOME</Link>
    <Link to="/menu" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>MENU</Link>
    <Link to="/consult" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONSULTANCY</Link>
    <Link to="/contact" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONTACT</Link>
  </nav>
</div>
        </>
    );
};

export default Header;