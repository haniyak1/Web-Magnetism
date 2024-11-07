
import Image from 'next/image';

const Welcome = () => {
  return (
    <main className="flex flex-col items-center lg:flex-row px-4 lg:px-20 bg-[#F5F5F5] py-16 font-montserrat">
    
      <div className="order-1 w-full lg:w-4/6 space-y-3 lg:pl-10">
        <div className="space-y-2 lg:w-4/5 w-full">
          <h1 className="font-semibold text-4xl leading-[2.8rem]">
            WELCOME TO WEB MAGNETISM
          </h1>
        </div>
        <div className="text-gray-500 font-medium space-y-4 leading-tight">
          <p>
            Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.
          </p>
          <p>
            Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.
          </p>
          <p>
            Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.
          </p>
        </div>
        <button 
  className="mt-6 px-8 py-3 text-white rounded-full flex items-center space-x-2"
  style={{ background: 'linear-gradient(to right, #5B53F9 0%, #AC71D6 40%, #FF8E57 100%)'
  }}
>
  <span>About Us</span>
  <Image src="/arrow.png" alt="" width={16} height={16} />
</button>

      </div>

      
      <div className="order-2 rounded-full w-full lg:w-2/6 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image src="/section-2.png" alt="" width={515} height={383} className="rounded-lg" />
      </div>
    </main>
  );
};

export default Welcome;
