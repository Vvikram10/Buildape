
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center", // 👈 Fix: trigger when center aligns with viewport center
          end: "center center",
          scrub: 1,
          markers: false,
          
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, x: 100, filter: "blur(10px)" },
        { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
        0
      );

      tl.fromTo(
        textRef.current,
        { scale: 0.9, opacity: 0, x: -80, filter: "blur(5px)" },
        { scale: 1, opacity: 1, x: 0, filter: "blur(0px)", duration: 1 },
        0.2
      );

      tl.fromTo(
        aboutRef.current,
        { backgroundColor: "rgba(255,255,255,0)" },
        { backgroundColor: "rgba(255,255,255,1)", duration: 1 },
        0
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="about-section min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-white relative"
    >
      <div className="container mx-auto">
        <div
          ref={wrapperRef}
          className="flex flex-col lg:flex-row items-center gap-10"
        >
          <div
            ref={textRef}
            className="lg:w-1/2 lg:pr-12 text-center lg:text-left"
          >
            <div className="section-title mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                History
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-black">
              Welcome to{" "}
              <span className="text-amber-500">BUILDAPE NUTRITION</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
              At BUILDAPE NUTRITION, our journey began with a dream and a
              passion for health and wellness. What started as a personal
              aspiration has blossomed into a thriving business dedicated to
              helping you achieve your health goals.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-pink-600 rounded-full text-white font-bold hover:scale-105 transition-transform">
              Learn More
            </button>
          </div>

          <div
            ref={imageRef}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="/about.png"
              alt="About BUILDAPE NUTRITION"
              className="max-w-full h-auto rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-amber-500 opacity-10 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-pink-600 opacity-10 -z-10"></div>
    </section>
  );
};

export default About;
