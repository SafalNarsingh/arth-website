// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1714] text-white py-5 px-6 md:px-16 font-jersey">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-4xl font-medium">AR Treasure Hunt</p>

          <p className="text-2xl mt-2">Contact:</p>

          <p className="text-lg mt-1">
            <a
              href="tel:+9779813704229"
              className="hover:text-[#FFA126] transition-colors"
            >
              Himesh Dulal — 9813704229
            </a>
          </p>

          <p className="text-lg">
            <a
              href="tel:+9779845170932"
              className="hover:text-[#FFA126] transition-colors"
            >
              Shreyan Wasti — 9845170932
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:text-right">
          <p className="text-[#FFA126] text-3xl">A POST EVENT OF</p>
          <p className="text-3xl">IT MEET 2025</p>
          <p className="text-md mt-1">Kathmandu University</p>

          <p className="text-[#FFA126] mt-6 text-3xl">
            RESTORE THE MEMORY
          </p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto w-full mt-8 flex flex-col md:flex-row justify-center gap-8 text-lg">
        <a
          href="mailto:artreasurehuntku@gmail.com"
          className="hover:text-[#FFA126] transition-colors"
        >
          artreasurehuntku@gmail.com
        </a>

        <a
          href="https://www.arth25.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FFA126] transition-colors"
        >
          www.arth25.tech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
