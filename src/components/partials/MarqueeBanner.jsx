import React from 'react';

const MarqueeBanner = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className="w-full overflow-hidden bg-[#000] border-y  py-3">
        <div
          className="whitespace-nowrap flex gap-8 text-lg font-normal text-white"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          <span>🚚 Free delivery for orders over $99</span>
          <span>🚚 Free delivery for orders over $99</span>
          <span>🚚 Free delivery for orders over $99</span>
          <span>🚚 Free delivery for orders over $99</span>
          <span>🚚 Free delivery for orders over $99</span>
          <span>🚚 Free delivery for orders over $99</span>
        </div>
      </div>
    </>
  );
};

export default MarqueeBanner;
