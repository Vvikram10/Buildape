

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const proteinData = [
  {
    id: 1,
    title: "Whey Protein",
    desc: "Power-packed for fast recovery and lean muscle growth.",
    img: "/box-1.jpg",
    bg: "#dbeafe",
    textColor: "#1e40af",
  },
  {
    id: 2,
    title: "Isolate Protein",
    desc: "Ultra pure. Zero carbs. Rapid absorption.",
    img: "/box-2.jpg",
    bg: "#ccfbf1",
    textColor: "#0d9488",
  },
  {
    id: 3,
    title: "Mass Gainer",
    desc: "High-calorie formula for serious bulking goals.",
    img: "/sup-3.jpg",
    bg: "#fde68a",
    textColor: "#92400e",
  },
];

const Hero = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.set("body", { backgroundColor: proteinData[0].bg });
    gsap.set(".panel:not(:first-child)", { opacity: 0.3, scale: 0.9 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerWidth * (sections.length - 1)* 1.6}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
       snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 1, max: 2 },   // ⬅️ slower snapping transition
        delay: 0.3,                     // ⬅️ small delay before snap
        ease: "power3.inOut",          // ⬅️ smoother easing
        },

        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = Math.floor(progress * (sections.length - 1));
          const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
          const lerpProgress = (progress * (sections.length - 1)) % 1;

          gsap.to(sections[currentIndex], {
            opacity: 1 - lerpProgress * 0.7,
            scale: 1 - lerpProgress * 0.1,
            duration: 0.5,
          });
          gsap.to(sections[nextIndex], {
            opacity: 0.3 + lerpProgress * 0.7,
            scale: 0.9 + lerpProgress * 0.1,
            duration: 0.5,
          });

          const bgColor = gsap.utils.interpolate(
            proteinData[currentIndex].bg,
            proteinData[nextIndex].bg,
            lerpProgress
          );
          gsap.to("body", { backgroundColor: bgColor, duration: 0.5 });
        },
      },
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "cubic-bezier(0.77, 0, 0.175, 1)",
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const handleMouseMove = (e, el) => {
    const bounds = el.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    gsap.to(el, {
      rotationY: deltaX * 0.05,
      rotationX: -deltaY * 0.05,
      transformPerspective: 1000,
      transformOrigin: "center",
      ease: "power2.out",
    });
  };

  const resetTilt = (el) => {
    gsap.to(el, {
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden relative">
      {/* Gradient overlays */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black/20 to-transparent"></div>
      </div>

      <div ref={wrapperRef} className="flex h-full w-[300vw]">
        {proteinData.map((item, index) => (
          <motion.section
            key={item.id}
            className="panel w-screen h-screen flex items-center justify-center relative will-change-transform"
            style={{ backgroundColor: item.bg }}
            initial={{
              opacity: index === 0 ? 1 : 0.3,
              scale: index === 0 ? 1 : 0.9,
            }}
          >
            <div
              className="absolute w-full h-full top-0 left-0 opacity-15 bg-no-repeat bg-center bg-cover z-0"
              style={{
                backgroundImage: `url(${item.img})`,
                transform: "scale(1.1)",
                filter: "blur(8px)",
              }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10 md:px-20 max-w-6xl mx-auto relative z-10">
              <motion.div
                className="flex justify-center"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => resetTilt(e.currentTarget)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-72 h-72 object-contain drop-shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
                  style={{ color: item.textColor }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl max-w-lg mx-auto md:mx-0 font-medium"
                  style={{ color: item.textColor }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {item.desc}
                </motion.p>
                <motion.button
                  className="mt-8 px-8 py-3 rounded-full font-bold shadow-lg"
                  style={{
                    backgroundColor: item.textColor,
                    color: item.bg,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Shop Now
                </motion.button>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Hero;
