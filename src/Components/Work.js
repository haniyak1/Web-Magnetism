
import Image from 'next/image';

export default function Work() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
     
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Work</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      
        <div className="flex flex-col items-center">
          <Image src="/S1.png" alt="" width={400} height={250} className="rounded-lg shadow-lg" />
          <h3 className="mt-4 text-lg font-semibold text-gray-800">REDESIGN OF B2B WEBSITE</h3>
          <p className="text-sm text-gray-600">Web design</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/S2.png" alt="" width={400} height={250} className="rounded-lg shadow-lg" />
          <h3 className="mt-4 text-lg font-semibold text-gray-800">MOBILE APPLICATION</h3>
          <p className="text-sm text-gray-600">App development</p>
        </div>

   
        <div className="flex flex-col items-center">
          <Image src="/S3.png" alt="" width={400} height={250} className="rounded-lg shadow-lg" />
          <h3 className="mt-4 text-lg font-semibold text-gray-800">E-COMMERCE SHOP</h3>
          <p className="text-sm text-gray-600">Web development</p>
        </div>
      </div>

  
      <div className="text-center mt-8">
        <a
          
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
        >
          VIEW FULL PORTFOLIO &rarr;
        </a>
      </div>
    </section>
  );
}
