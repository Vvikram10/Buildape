import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Consultancy = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        formRef.current.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!formRef.current) return;

    gsap.to(formRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="gym_consultancy py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Fitness Assessment Form</h2>
          <p className="text-gray-600">Fill out the form to get your personalized fitness plan</p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
              className="opacity-0 translate-y-10 transition-all duration-700 bg-white p-6 sm:p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Fields */}
                {[
                  ['Name', 'name', 'text'],
                  ['Surname', 'surname', 'text'],
                  ['Email', 'email', 'email'],
                  ['Phone Number', 'phone', 'tel'],
                  ['Date of Birth', 'dob', 'date'],
                  ['Height (cm)', 'height', 'number'],
                  ['Current Weight (kg)', 'current_weight', 'number'],
                  ['Target Weight (kg)', 'target_weight', 'number'],
                  ['Current Body Fat %', 'current_body_fat', 'number'],
                  ['Target Body Fat %', 'target_body_fat', 'number'],
                ].map(([label, name, type], i) => (
                  <div key={i}>
                    <label className="block text-gray-700 mb-2 font-medium">{label}</label>
                    <input
                      type={type}
                      name={name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
                      required={name !== 'target_weight' && name !== 'target_body_fat'}
                    />
                  </div>
                ))}

                {/* Goal */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Goal</label>
                  <select
                    name="goal"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
                  >
                    <option value="">Select your goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="General Fitness">General Fitness</option>
                    <option value="Competition Preparation">Competition Preparation</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Gender</label>
                  <select
                    name="gender"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Medical Conditions */}
                <div className="">
                  <label className="block text-gray-700 mb-2 font-medium">
                    Any Medical Conditions or Injuries?
                  </label>
                  <textarea
                    name="medical_conditions"
                    rows="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
                  ></textarea>
                </div>

                {/* Upload Photo */}
                <div className="">
                  <label className="block text-gray-700 mb-2 font-medium">Upload Recent Photo (Optional)</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0  transition-all"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Assessment'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
