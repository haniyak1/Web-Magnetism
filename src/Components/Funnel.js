import React from 'react';
import Image from 'next/image';


const Funnel = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-gray-50 font-montserrat">
     
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-montserrat">
        An Integrated Team For Unique Web Design And Strategic Digital Marketing
      </h2>
      <p className="text-center text-gray-500 max-w-xl font-montserrat">
        Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit.
        Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.
      </p>

      <div className="mt-8">
        <Image src='/funnel.png' alt="" width={601} height={541} className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Funnel;
