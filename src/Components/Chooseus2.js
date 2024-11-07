import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Chooseus2 = () => {
  return (
    <section
      className="relative py-16 flex justify-center items-center"
      style={{
        background: 'linear-gradient(to right, #5B53F9 0%, #AC71D6 40%, #FF8E57 100%)',
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      
      <div className="relative flex flex-col md:flex-row items-start max-w-5xl mx-auto px-6 lg:px-8 z-10">
        
        
        <div className="md:w-1/2 mb-8 md:mb-0 text-left text-white">
          <h2 className="text-3xl font-bold mb-4">
            Our Bespoke Website Include The Following
          </h2>
          <p className="mb-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam accumsan.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-orange-400 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        <div className="md:w-1/2 grid gap-8">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105"
              style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-[#785EEB] text-white">
                <FaGlobe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const cardData = [
  {
    title: 'Bespoke Design',
    description:
      'Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.',
  },
  {
    title: 'Mobile Optimised',
    description:
      'Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.',
  },
  {
    title: 'SEO Optimised',
    description:
      'Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.',
  },
];

export default Chooseus2;
