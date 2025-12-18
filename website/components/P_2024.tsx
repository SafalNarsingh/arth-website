import React from 'react'
import Image from "next/image";
import Details from "@/components/some_details"
import Prize from "@/components/prize_section"

const P_2024 = () => {
      const rounds = [
        {
          id: 1,
          round: " 01",
          title: "Khoji",
          subtitle: "Khoji",
          image: "/khoji.png",
        },
        {
          id: 2,
          round: " 02",
          title: "Escape the Room ",
          subtitle: "2ND ROUND",
          image: "/escapee.png",
        },
        {
          id: 3,
          round: " 03",
          title: "AR Round",
          subtitle: "FINAL",
          image: "/panauti.png",
        },
      ];
    
      return (
        <main className="w-full bg-[#FFFAF5]">
          {/* HEADER */}
          <section className="landing_container mx-auto pb-2 md:pb-10">
            <p className="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-tight font-jersey">
              2024
            </p>
            <p className="text-xl md:text-4xl lg:text-5xl font-extralight text-[#FFA127] font-jersey">
              AR Treasure Hunt V3
            </p>
          </section>
    
        {/* ROUND CARDS */}
                <section className="
                  landing_container mx-auto
                  grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3
                  gap-1 md:gap-8
                  mt-6 md:mt-8 lg:mt-12 ">

          {rounds.map((r) => (
            <div key={r.id} className="flex flex-col items-center">
              {/* Card */}
              <div className="rounded-lg md:rounded-4xl border border-[#B04B18] shadow-md bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg w-full aspect-square relative">
                {/* Top Image Area */}
                <div className="relative w-full h-full">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover "
                  />
                  {/* Round above title (1/3 from top) */}
                  <span className="absolute top-[27%] left-1/2 transform -translate-x-1/2 text-white font-jersey text-xs md:text-[22px] lg:text-3xl p-0 md:px-2 md:py-1 font-light drop-shadow-lg">
                   Round<span className="text-white">{r.round}</span>
                  </span>
                  {/* Title centered */}
                  <span className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-jersey text-xl sm:text-2xl md:text-5xl lg:text-7xl font-light leading-3 sm:leading-5  md:leading-7 lg:leading-11 drop-shadow-lg text-center">
                    {r.title}
                  </span>
                  {/* AR V3 Tag */}
                  <span className="absolute top-0 md:top-2 right-1 md:right-5 text-white text-xs md:text-[18px] lg:text-2xl font-jersey p-0 md:px-2 md:py-1 drop-shadow-lg">
                    AR V3
                  </span>
                </div>
              </div>

              {/* Subtitle below the card */}
              <p className="mt-1 md:mt-4 text-black font-light text-md md:text-3xl lg:text-5xl font-jersey text-center">
                {r.subtitle}
              </p>
            </div>
          ))}
      </section>
      <Prize></Prize>
        <main className="w-full bg-[#FFFAF5] mt-2 md:mt-10">
          
        <section className="landing_container mx-auto mt-4 md:mt-12 border-0 rounded-md md:rounded-2xl font-jersey bg-[#702412] text-[#FFDDBD] font-extralight py-5">
            <div className="p-2 md:p-8">
                <p className="text-xl md:text-5xl leading-none">Some Details</p>
                <p className="text-md md:text-3xl leading-none">AR Treasure Hunt 2024 concluded with over 300 participants, competing across 92 teams in an engaging augmented-reality–based treasure hunt. The event blended digital AR challenges with real-world exploration, promoting teamwork, strategy, and innovation. The competition culminated in an exciting final round held at Panauti, marking a memorable end to the event.</p>
            </div>
        </section>
        </main>
        </main>
      );
    }

export default P_2024
