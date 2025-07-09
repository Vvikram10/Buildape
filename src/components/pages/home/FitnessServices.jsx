import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChartLine, FaDumbbell, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const FitnessServices = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const serviceItemsRef = useRef([]);
  serviceItemsRef.current = [];

  const services = [
    {
      title: "Progression Tracking",
      description:
        "Watch your growth with advanced analytics that highlight every milestone in your fitness journey.",
      icon: <FaChartLine className="w-full h-full" />,
    },
    {
      title: "Custom Workouts",
      description:
        "Tailored exercise programs crafted specifically for your body type and fitness goals.",
      icon: <FaDumbbell className="w-full h-full" />,
    },
    {
      title: "Nutrition Plans",
      description:
        "Personalized meal strategies designed to fuel your performance and recovery.",
      icon: <FaUtensils className="w-full h-full" />,
    },
  ];

  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Container animation
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Items animation - reveal from center
      serviceItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index === 0 ? -50 : index === 2 ? 50 : 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animation for when scrolling back up
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          onEnterBack: () => {
            gsap.to(item, {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="relative w-full text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-20 text-gray-900 inline-block">
            {"Our Approach".split("").map((char, i) => (
              <motion.span
                key={i}
                className="relative inline-block"
                initial={{ color: "#000000" }}
                animate={{
                  color: ["#000000", "#f97316", "#000000"],
                }}
                transition={{
                  delay: i * 0.1,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: "Our Approach".length * 0.1 + 1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="w-full md:w-1/3 p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="h-16 w-16 mb-6 text-gray-900 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessServices;
