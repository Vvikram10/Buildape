import React from 'react';

// You can replace this SVG with your own custom graphic or animation.
const GhostIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-indigo-500 animate-bounce"
  >
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.5a2 2 0 0 1-1.6-.8L14.4 3.9a2 2 0 0 0-1.6-.9H11.2a2 2 0 0 0-1.6.9L8.1 5.2a2 2 0 0 1-1.6.8H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16z" />
    <circle cx="9" cy="12" r=".5" fill="currentColor" />
    <circle cx="15" cy="12" r=".5" fill="currentColor" />
    <path d="M9.5 16c.67.67 1.5 1 2.5 1s1.83-.33 2.5-1" />
  </svg>
);


export const NotFoundPage = () => {
  // This function could be used to navigate back to the home page.
  // In a real app, you would use your router's navigation function.
  // For example, with React Router: `const navigate = useNavigate(); navigate('/');`
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-gray-100 py-20 flex items-center justify-center min-h-screen text-gray-800 dark:text-gray-200 font-sans">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <header className="mb-8">
          <GhostIcon />
        </header>
        <main>
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-500 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Oops! Page Not Found.
          </h2>
          <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mb-8">
            It seems you've wandered into the void. The page you are looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={goHome}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
          >
            Return to Home
          </button>
        </main>
      </div>
    </div>
  );
};