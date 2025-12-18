
const Rounds = () => {
  const rounds = [
    {
      id: 1,
      round: "Round 01",
      title: "Nirman",
      subtitle: "City Of Forgotten Memories",
      desc: "Players restore major locations through fast-paced mini-games, each repair revealing a missing fragment of the bunker map.",
      image: "/nirman.png",
    },
    {
      id: 2,
      round: "Round 02",
      title: "Engineer's Bunker",
      subtitle: "The Engineers' Bunker",
      desc: "Memory Engineers’ Bunker, unfolding as a puzzle-driven escape-room sequence where teams decode symbols, bypass security layers and uncover Obel’s identity.",
      image: "/ess.png",
    },
    {
      id: 3,
      round: "Round 03",
      title: "AR Round",
      subtitle: "AR Hunt",
      desc: "Round 3 sends players into Bhaktapur for a physical AR treasure hunt, where the restored memories guide them toward the final clues needed to finish the journey.",
      image: "/bhak.png",
    },
  ];

  return (
    <main className="landing_container bg-[#FFFAF5] py-2 md:py-2 lg:py-2" id="about">
      {/* HEADER */}
      <div >
        <h1 className="text-9xl font-jersey">
          Rounds
        </h1>
        <p className="text-5xl font-extralight text-[#FFA127] font-jersey">
          AR Treasure Hunt V4
        </p>
      </div>

      {/* ROUND CARDS */}
      <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {rounds.map((r) => (
          <div
            key={r.id}
            className="rounded-xl border border-[#B04B18] shadow-md bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top Image Area */}
            <div className="relative h-48 bg-[#251329]">
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
            <div className="bg-[#f1f1f1] p-4 min-h-full flex flex-col">
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
    {/* PRIZE SECTION */}
<section className="mx-auto pt-25">

  <div className="rounded-2xl bg-[#7E0712] md:min-h-50 py-20 px-6 md:px-10 shadow-lg relative overflow-visible">

    {/* Floating Coin */}
    <div className="relative w-full flex justify-end">
      <img
        src="/coin.png"
        alt="Pixel Image"
        className="
          absolute
          right-0 
          bottom-[55%]
          w-[90px] 
          sm:w-[130px] 
          md:w-[180px] 
          lg:w-[280px]
          drop-shadow-xl
        "
      />
    </div>

    {/* Prize Text */}
    <div className="absolute bottom-[20%] left-6 md:left-10">
      <p className="text-[#FFA127] font-jersey font-medium text-xl md:text-4xl">
        Total Prize Pool
      </p>
      <p className="font-jersey text-5xl md:text-8xl font-medium text-[#FFA127]">
        NRs. <span className="text-[#FFD219]">25,000+</span>
      </p>
    </div>

  </div>

</section>

    </main>
  );
}

export default Rounds
