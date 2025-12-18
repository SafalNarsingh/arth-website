import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="landing_container font-jersey flex flex-col md:flex-row justify-between items-center px-4 md:px-0">

        {/* Text Section */}
        <div className="flex flex-col gap-5 md:gap-8 text-center md:text-left z-10">
          <div className="text-4xl sm:text-5xl md:text-7xl  pt-12 md:pt-15 text-[#3C280C] leading-[1.1]">
            The Biggest <span className="text-[#884510]">Treasure</span>
            <br />
            <span className="text-[#884510]">Hunt</span> of Nepal
          </div>

          {/* Buttons */}
          <div className="text-sm md:text-xl text-white flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/register"
              className="px-4 py-2 md:px-6 md:py-3 bg-[#884510] shadow-[3px_3px_0_0_#3C280C] "
            >
              Register Now
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 md:px-6 md:py-3 bg-[#3C280C] shadow-[3px_3px_0_0_#884510]"
            >
              About Event
            </Link>
          </div>
        </div>

        {/* Mascot */}
        <div className="relative mt-6 md:mt-0 md:self-end">
          <Image
            src="/masgif.gif"
            alt="Mascot"
            width={200}
            height={200}
            className="
              w-40
              sm:w-44
              md:w-[220px]
              opacity-90
              -translate-y-6
              md:translate-y-0
            "
          />
        </div>
      </div>

      {/* Background */}
      <div className="w-full -mt-20 md:-mt-36">
        <Image
          src="/bgg.png"
          alt="Banner"
          width={1200}
          height={300}
          className="w-full -z-10"
        />
      </div>
    </div>
  )
}

export default Page
