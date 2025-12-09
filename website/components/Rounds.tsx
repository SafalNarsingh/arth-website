import React from 'react'
import Image from 'next/image'

const Rounds = () => {
  const rounds = [
    {
      id: 1,
      round: "Round 01",
      title: "Khoji",
      subtitle: "City Of Forgotten Memories",
      desc: "Navigate The Ruins Of Ancient Nepal, Collect Memory Shards, And Restore Iconic Landmarks Through AR Puzzles.",
      image: "/vercel.svg",
    },
    {
      id: 2,
      round: "Round 02",
      title: "Escape Room",
      subtitle: "The Engineers' Bunker",
      desc: "Enter The Hidden Bunker Where Memory Engineers Once Worked. Solve Intricate Puzzles To Uncover The Truth.",
      image: "/vercel.svg",
    },
    {
      id: 3,
      round: "Round 03",
      title: "AR Round",
      subtitle: "Final Confrontation",
      desc: "Ultimate AR Showdown. Use Everything You’ve Learned To Restore The City’s Memories.",
      image: "/vercel.svg",
    },
  ];

  return (
    <main className=" w-full bg-[#FFFAF5] px-8 py-16">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-8xl font-extralight tracking-tight font-jersey">
          Rounds
        </h1>
        <p className="text-5xl font-extralight text-[#FFA127] font-jersey">
          (AR Treasure Hunt V4)
        </p>
      </section>

      {/* ROUND CARDS */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {rounds.map((r) => (
          <div
            key={r.id}
            className="rounded-xl border border-[#B04B18] shadow-md bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top Image Area */}
            <div className="relative h-40 bg-[#251329]">
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-full object-cover opacity-60"
              />
              <span className="absolute top-0 right-2 text-white text-xl font-jersey px-2 py-1 drop-shadow-lg">
                AR V4
              </span>
              <span className="absolute top-4 left-2 text-white font-jersey text-xl px-2 py-1 font-light drop-shadow-lg">
                {r.round}
              </span>
              <span className="absolute top-8 left-4 text-white font-jersey text-6xl font-light drop-shadow-lg">
                {r.title}
              </span>
            </div>

            {/* Bottom Text Section */}
            <div className="bg-[#E9E9E9] p-4 min-h-40 flex flex-col">
              <p className="text-[#FFA127] font-light text-xl underline font-jersey">
                {r.subtitle}
              </p>
              <p className="text-xl text-[#373737] font-jersey font-base leading-relaxed grow">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* PRIZE SECTION */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 mt-20">
        {/* Left Pixel Prize Card */}
        <div className="rounded-2xl bg-[#7E0712] p-10 shadow-lg relative overflow-hidden">
          {/* Pixel sparkles (static example) */}
          <span className="absolute top-6 left-8 text-yellow-300 font-jersey text-3xl">
            ✦
          </span>
          <span className="absolute top-10 left-20 text-yellow-300 font-jersey text-xl">
            ✦
          </span>

          {/* Pixel coin art placeholder */}
          <div className="w-40 h-40 mx-auto mb-6 bg-yellow-400 rounded-lg pixelized shadow-inner"></div>

          <p className="text-left text-[#FFA127] font-jersey font-medium text-4xl">
            Total Prize Pool
          </p>
          <p className="text-left font-jersey text-8xl font-medium text-[#FFA127] mt-2">
            NRs. <span className='text-[#FFD219]'>30,000+</span>
          </p>
        </div>

        {/* Right text column */}
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-jersey text-[#FFA127]">
            Form teams and register for the event
          </p>
          <p className="text-5xl font-jersey text-[#FFA127]">
            Advance through rounds and win amazing prizes!
          </p>

          <ul className="mt-6 space-y-2">
            <li className="text-6xl font-bold text-[#FFA127] font-jersey flex items-center gap-2">
              &gt;<span className="text-[#373737]">Winner : 15,000</span>
            </li>
            <li className="text-6xl font-bold text-[#FFA127] font-jersey flex items-center gap-2">
              &gt;<span className="text-[#373737]">1st Runner Up : 10,000</span>
            </li>
            <li className="text-6xl font-bold text-[#FFA127] font-jersey flex items-center gap-2">
              &gt;<span className="text-[#373737]">2nd Runner Up : 5,000</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Rounds
