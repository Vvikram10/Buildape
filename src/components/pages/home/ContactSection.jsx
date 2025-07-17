// import React from "react";

// const ContactSection = () => {
//   return (
//     <div className="contact-box mb-5 pt-12 md:pt-14 lg:pt-16 xl:pt-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Contact Details Section */}
//           <div className="w-full lg:w-5/12">
//             <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                 Contact Details
//               </h3>

//               <div className="space-y-6">
//                 {/* Address Section */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
//                     Office Address
//                   </h4>
//                   <p className="text-gray-700">
//                     80 MARITIME BLVD UNIT 44, ON L6S 0E7
//                   </p>
//                 </div>

//                 <div className="border-t border-gray-200 my-4"></div>

//                 {/* Contact Methods */}
//                 <div className="space-y-5">
//                   {/* WhatsApp */}
//                   <div className="flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
//                       <i className="fab fa-whatsapp text-blue-600 text-lg"></i>
//                     </div>
//                     <div>
//                       <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Call Us On
//                       </p>
//                       <p className="text-gray-800 font-semibold mt-1">
//                         +1 (905) 783-2994
//                       </p>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="flex items-start gap-4">
//                     <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
//                       <i className="far fa-envelope text-red-500 text-lg"></i>
//                     </div>
//                     <div>
//                       <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Email
//                       </p>
//                       <p className="text-gray-800 font-semibold mt-1">
//                         Buildapenutrition@gmail.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 my-4"></div>

//                 {/* Social Media */}
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
//                     Social Share
//                   </h4>
//                   <div className="flex gap-4">
//                     <a
//                       href="https://www.instagram.com/buildape/"
//                       className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
//                       aria-label="Instagram"
//                     >
//                       <img
//                         src="img/instagramb.png"
//                         alt="Instagram"
//                         className="w-5 h-5"
//                       />
//                     </a>
//                     <a
//                       href="https://www.tiktok.com/@buildape?_t=8fgf9C3Fx4f&amp;_r=1"
//                       className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
//                       aria-label="TikTok"
//                     >
//                       <img
//                         src="img/tik-tok.png"
//                         alt="TikTok"
//                         className="w-5 h-5"
//                       />
//                     </a>
//                     <a
//                       href="https://www.tiktok.com/@buildape?_t=8fgf9C3Fx4f&amp;_r=1"
//                       className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
//                       aria-label="TikTok"
//                     >
//                       <img
//                         src="img/tik-tok.png"
//                         alt="TikTok"
//                         className="w-5 h-5"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="w-full lg:w-7/12 xl:w-7/12">
//             <form
//               action="controller.php"
//               method="post"
//               className="contact-form ps-5 lg:ps-8 xl:ps-10 py-6 pe-6 bg-white rounded-lg shadow-sm"
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-6">
//                 Need Help? Send Message
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="label-input-field">
//                   <label className="block text-sm font-medium mb-1">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     name="full_name"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="label-input-field">
//                   <label className="block text-sm font-medium mb-1">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     name="last_name"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="label-input-field">
//                   <label className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="Your email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="label-input-field">
//                   <label className="block text-sm font-medium mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     maxLength="10"
//                     placeholder="Your phone"
//                     name="phone_no"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="col-span-full label-input-field">
//                   <label className="block text-sm font-medium mb-1">
//                     Messages
//                   </label>
//                   <textarea
//                     placeholder="Write your message"
//                     rows="2"
//                     name="message"
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
//                   ></textarea>
//                 </div>

//                 <div className="col-span-full">
//                   <div
//                     className="g-recaptcha"
//                     data-sitekey="6Le1IHEpAAAAANNjpPJ_JMn_vUi2vIExtdxsx5a3"
//                     required
//                   >
//                     {/* reCAPTCHA will be loaded here */}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className=" mt-6  hover:bg-primary-600 text-white bg-orange-500 font-medium py-2 px-6 rounded transition duration-300"
//                 name="btn_comment"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* Google Maps Section */}
//       <div className="mt-10 w-full rounded-lg overflow-hidden shadow-sm">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.1856228652696!2d-79.69941399999999!3d43.748242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d013fb7b295%3A0x487aa9e135df59c!2s80%20Maritime%20Ontario%20Blvd%20Unit%2044%2C%20Brampton%2C%20ON%20L6S%200E7!5e0!3m2!1sen!2sca!4v1691465762095!5m2!1sen!2sca"
//           width="100%"
//           height="350"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Google Maps Location"
//           className="w-full"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const ContactSection = () => {
  // एनीमेशन के लिए Refs
  const detailsCardRef = useRef(null);
  const formCardRef = useRef(null);
  const mapRef = useRef(null);

  // हेडिंग्स के लिए टेक्स्ट
  const detailsHeading = "Contact Details";
  const formHeading = "Need Help? Send Message";

  // GSAP एनीमेशन के लिए useLayoutEffect
  useLayoutEffect(() => {
    const elementsToAnimate = [
      detailsCardRef.current,
      formCardRef.current,
      mapRef.current,
    ];

    elementsToAnimate.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, filter: "blur(8px)" }, // शुरुआती स्थिति
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: index * 0.2, // एक के बाद एक एनीमेशन के लिए Delay
            ease: "power3.out",
          }
        );
      }
    });
  }, []);

  return (
    <div className="contact-box mb-5 pt-12 md:pt-14 lg:pt-16 xl:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Details Section */}
          <div ref={detailsCardRef} className="w-full lg:w-5/12 opacity-0">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {detailsHeading.split("").map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ color: "#1f2937" }}
                    animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
                    transition={{
                      delay: i * 0.08,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: detailsHeading.length * 0.08 + 2,
                    }}
                    className="relative inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Office Address
                  </h4>
                  <p className="text-gray-700">
                    80 MARITIME BLVD UNIT 44, ON L6S 0E7
                  </p>
                </div>
                <div className="border-t border-gray-200"></div>

                <div className="space-y-5">
                  {/* Call Us Section */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      {/* Phone icon from React Icons */}
                      <FaPhoneAlt className="text-blue-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Call Us On
                      </p>
                      {/* YAHAN BADLAV KIYA GAYA HAI */}
                      <a
                        href="tel:+19057832994"
                        className="text-gray-800 font-semibold mt-1 block hover:text-blue-700"
                      >
                        +1 (905) 783-2994
                      </a>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      {/* Email icon from React Icons */}
                      <FaEnvelope className="text-red-500 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </p>
                      {/* YAHAN BHI BADLAV KIYA GAYA HAI */}
                      <a
                        href="mailto:Buildapenutrition@gmail.com"
                        className="text-gray-800 font-semibold mt-1 block hover:text-red-600"
                      >
                        Buildapenutrition@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200"></div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Social Share
                  </h4>
                  <div className="flex gap-4">
                    {/* Instagram Icon */}
                    <a
                      href="https://www.instagram.com/buildape/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 text-white rounded-full transition-transform hover:scale-110"
                    >
                      <FaInstagram className="text-xl" />
                    </a>

                    {/* WhatsApp Icon */}
                    <a
                      href="https://wa.me/19057832994" // यहाँ अपना WhatsApp नंबर डालें
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full transition-transform hover:scale-110"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>

                    {/* Facebook Icon */}
                    <a
                      href="YOUR_FACEBOOK_LINK_HERE" // यहाँ अपना फेसबुक लिंक डालें
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full transition-transform hover:scale-110"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            ref={formCardRef}
            className="w-full lg:w-7/12 xl:w-7/12 opacity-0"
          >
            <form
              action="controller.php"
              method="post"
              className="contact-form ps-5 lg:ps-8 xl:ps-10 py-6 pe-6 bg-white rounded-lg shadow-sm h-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {formHeading.split("").map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ color: "#1f2937" }}
                    animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
                    transition={{
                      delay: i * 0.05,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: formHeading.length * 0.05 + 2,
                    }}
                    className="relative inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="label-input-field">
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="full_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="label-input-field">
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="label-input-field">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="label-input-field">
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    maxLength="10"
                    placeholder="Your phone"
                    name="phone_no"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="col-span-full label-input-field">
                  <label className="block text-sm font-medium mb-1">
                    Messages
                  </label>
                  <textarea
                    placeholder="Write your message"
                    rows="2"
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Le1IHEpAAAAANNjpPJ_JMn_vUi2vIExtdxsx5a3"
                  ></div>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 hover:bg-primary-600 cursor-pointer text-white bg-orange-500 font-medium py-2 px-6 rounded transition duration-300"
                name="btn_comment"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div
        ref={mapRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 opacity-0"
      >
        <div className="w-full rounded-lg overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.1856228652696!2d-79.69941399999999!3d43.748242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d013fb7b295%3A0x487aa9e135df59c!2s80%20Maritime%20Ontario%20Blvd%20Unit%2044%2C%20Brampton%2C%20ON%20L6S%200E7!5e0!3m2!1sen!2sca!4v1691465762095!5m2!1sen!2sca"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
