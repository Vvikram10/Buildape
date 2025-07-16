// // ScrollToTop.jsx
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

// //   useEffect(() => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: "smooth"  // optional: "auto" if you want instant scroll
// //     });
// //   }, [pathname]);

//   useEffect(() => {
//     window.scrollTo(0, 0); // ✅ Instant scroll to top (no animation)
//   }, [pathname]);


//   return null;
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Freeze scroll before route change
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll';

    // Restore normal scroll instantly without movement
    setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    }, 1); // Minimal delay to avoid scroll jump
  }, [pathname]);

  return null;
};

export default ScrollToTop;

