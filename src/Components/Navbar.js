"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      
      <header
        className={`text-white fixed px-10 w-full z-50 ${
          isScrolled ? "bg-[#212EA0]" : "bg-transparent"
        } hidden custom:block transition-colors duration-300`}
      >
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <div className="w-1/3">
          <Image src="/web.png" alt="" width={244} height={23} />

          </div>
          <div className="flex items-center ml-auto">
            <Image src="/navbar-icon.png" alt=""   width={30} height={30} className="w-8 h-8 cursor-pointer" onClick={toggleMenu}/>
          </div>
        </div>
      </header>

      
      <header
        className={`text-white fixed px-5 w-full z-50 custom:hidden ${
          isScrolled ? "bg-[#ecedee]" : "bg-transparent"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between py-3">
          
          <div className="flex items-center">
            <img src="/web.png" alt="" width={120} height={120} />
          </div>

          
          <div className="flex items-center ml-auto">
            <Image src="/navbar-icon.png" alt=""width={30}height={30}className="w-8 h-8 cursor-pointer"onClick={toggleMenu}/>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Navbar;
