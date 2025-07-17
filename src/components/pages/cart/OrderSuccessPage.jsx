import React,{ useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OrderSuccessPage = () => {
  const containerRef = useRef(null);
  const successIconRef = useRef(null);
  const titleRef = useRef(null);
  const messageRef = useRef(null);
  const detailsRef = useRef(null);
  const buttonRef = useRef(null);

  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)}`;

  useEffect(() => {
    // Master timeline
    const tl = gsap.timeline();

    // Container animation
    tl.from(containerRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "power2.out"
    });

    // Success icon animation
    tl.from(successIconRef.current, {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2
    });

    // Title animation
    tl.from(titleRef.current, {
      duration: 0.6,
      y: 30,
      opacity: 0,
      ease: "back.out(1.7)"
    });

    // Message animation
    tl.from(messageRef.current, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power2.out"
    });

    // Details animation
    tl.from(detailsRef.current, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.1
    });

    // Button animation
    tl.from(buttonRef.current, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2
    });

    // Confetti effect
    const confettiColors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.top = '0';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.opacity = '0';
      containerRef.current.appendChild(confetti);

      gsap.to(confetti, {
        y: window.innerHeight,
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        opacity: 1,
        duration: 2,
        delay: 1 + Math.random() * 0.5,
        ease: "power1.out",
        onComplete: () => confetti.remove()
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div 
        ref={containerRef}
        className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 max-w-2xl w-full text-center relative overflow-hidden"
      >
        {/* Success Icon */}
        <div 
          ref={successIconRef}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Title */}
        <h1 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Order Successful!
        </h1>

        {/* Message */}
        <p 
          ref={messageRef}
          className="text-lg text-gray-600 mb-8"
        >
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {/* Order Details */}
        <div 
          ref={detailsRef}
          className="bg-gray-50 rounded-lg p-6 mb-8 text-left"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium">₹2,499.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">Credit Card</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          onClick={() => {
            // Button click animation
            gsap.to(buttonRef.current, {
              scale: 0.95,
              duration: 0.1,
              yoyo: true,
              repeat: 1
            });
            // Navigate to home or track order
          }}
        >
          Track Your Order
        </button>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 mt-8">
          We've sent a confirmation email to your registered email address.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessPage;