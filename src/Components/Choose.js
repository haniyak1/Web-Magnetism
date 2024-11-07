import React from 'react';
import { FaHandshake, FaGlobe, FaComments } from 'react-icons/fa';

const ChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 to-purple-200 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why Choose Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full px-4">
        
        <div className="why-card">
          <div className="why-card-icon flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ background: 'linear-gradient(to right, #5B53F9, #AC71D6, #FF8E57)', color: 'white' }}>
            <FaHandshake size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Take Control of Your Entire Marketing Landscape
          </h3>
          <p className="text-gray-500">
            We’ve curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.
          </p>
        </div>

        <div className="why-card">
          <div className="why-card-icon flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ background: 'linear-gradient(to right, #5B53F9, #AC71D6, #FF8E57)', color: 'white' }}>
            <FaGlobe size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Your Business's Dedicated Marketing Wing
          </h3>
          <p className="text-gray-500">
            Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.
          </p>
        </div>

        <div className="why-card">
          <div className="why-card-icon flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ background: 'linear-gradient(to right, #5B53F9, #AC71D6, #FF8E57)', color: 'white' }}>
            <FaComments size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            A Reliable Collaborator
          </h3>
          <p className="text-gray-500">
            Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
