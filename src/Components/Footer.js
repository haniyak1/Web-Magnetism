
export default function Footer() {
  return (
    <footer className="bg-[#1C0C26] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-y-8">

          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-purple-300">WEB MAGNETISM</div>
            </div>
          </div>


          <div className="w-full md:w-2/5 lg:w-1/5">
            <h3 className="text-lg font-bold mb-4">Services</h3>
        
                <p className="font-semibold">Digital Marketing</p>
                <li>Email Nurture</li>
                <li>SEO</li>
                <li>Social Media Marketing</li>
                <li>Conversion Rate Optimization</li>
                <li>Copy Writing</li>
                <li>Email Marketing</li>
                <li>Remarketing</li>
                <li>PPC</li>
              
              {/* <div className="whitespace-nowrap">
      <p>Bespoke Web Design</p>
      <p>Web Design</p>
      <p>Web Redesign</p>
      <p>UI/UX Design</p>
      <p>Brand Identity and Logo</p>
      <p>App Development</p>
    </div> */}
            {/* </div> */}
          </div>


          
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <p>About us</p>
            <p>Contact us</p>
            <p>United Kingdom, TW4 7LU London</p>
          </div>

         
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <p>Our Work</p>
            <p>Insights</p>
          </div>

          {/* Social Media and Newsletter Section */}
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex flex-col space-y-2">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Telegram</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
            </div>
            <div className="mt-6">
              <p>Subscribe to our weekly newsletter today!</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 bg-[#2c234a] rounded-l-lg text-white focus:outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-r-lg">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; Copyright 2024 Web Magnetism All rights reserved |
          <a href="#" className="text-gray-400 hover:text-white mx-1">Terms and condition</a> |
          <a href="#" className="text-gray-400 hover:text-white mx-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
