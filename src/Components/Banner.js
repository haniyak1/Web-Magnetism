
import React from 'react';

const Banner = () => {
  const logos = [
    { src: '/amazon.png', alt: '' },
    { src: '/auto.png', alt: '' },
    { src: '/ada.png', alt: '' },
    { src: '/amazon.png', alt: '' },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 flex justify-center">
      <div className="flex items-center gap-50"> 
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
