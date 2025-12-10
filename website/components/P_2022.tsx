import React from 'react'
import Image from "next/image";
import Details from "@/components/some_details"

const P_2022 = () => {
      const rounds = [
        {
          id: 1,
          round: " 01",
          title: "Khoji",
          subtitle: "PRELIMINARY",
          image: "/next.svg",
        },
        {
          id: 2,
          round: " 02",
          title: "Escape Room",
          subtitle: "2ND ROUND",
          image: "/vercel.svg",
        },
        {
          id: 3,
          round: " 03",
          title: "AR Round",
          subtitle: "FINAL",
          image: "/vercel.svg",
        },
      ];
    
      return (
        <main className="w-full bg-[#FFFAF5] mt-10">
          {/* HEADER */}
          <section className="landing_container mx-auto pb-10">
            <p className="text-8xl font-extralight tracking-tight font-jersey">
              2022
            </p>
            <p className="text-5xl font-extralight text-[#FFA127] font-jersey">
              (AR Treasure Hunt V2)
            </p>
          </section>
    
        {/* ROUND CARDS */}
        <section className="landing_container mx-auto grid grid-cols-3 gap-8 mt-12">
          {rounds.map((r) => (
            <div key={r.id} className="flex flex-col items-center">
              {/* Card */}
              <div className="rounded-4xl border border-[#B04B18] shadow-md bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg w-full aspect-square relative">
                {/* Top Image Area */}
                <div className="relative w-full h-full">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  {/* Round above title (1/3 from top) */}
                  <span className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-black font-jersey text-3xl px-2 py-1 font-light drop-shadow-lg">
                   Round<span className="text-white">{r.round}</span>
                  </span>
                  {/* Title centered */}
                  <span className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-jersey text-7xl font-light leading-11 drop-shadow-lg text-center">
                    {r.title}
                  </span>
                  {/* AR V3 Tag */}
                  <span className="absolute top-2 right-5 text-black text-2xl font-jersey px-2 py-1 drop-shadow-lg">
                    AR V2
                  </span>
                </div>
              </div>

              {/* Subtitle below the card */}
              <p className="mt-4 text-black font-light text-4xl font-jersey text-center">
                {r.subtitle}
              </p>
            </div>
          ))}
      </section>
      <Details></Details>
        </main>
      );
    }

export default P_2022
