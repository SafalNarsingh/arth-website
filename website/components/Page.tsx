import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative w-full bg-[#f6efe8] overflow-hidden font-jersey">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 pt-20">
        {/* Left Text */}
        <div className="max-w-xl pr-10 z-20">
          <h1 className="text-7xl md:text-9xl text-[#381b01] font-extrabold leading-none">
            The Biggest <span className="text-amber-900">Treasure Hunt </span>
            <pre className="text-7xl md:text-9xl font-extrabold leading-none font-jersey">
              of Nepal
            </pre>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link href="/register">
              <button className="bg-[#8B4513] text-white px-8 py-3 font-jersey shadow-lg text-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative z-30">
                Register Now
              </button>
            </Link>
            <button className="bg-[#4d2a0c] text-white px-8 py-3 font-jersey text-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative z-30">
              About Event
            </button>
          </div>
        </div>

        {/* Right Mascot */}
        <div className="mt-8 md:mt-0 relative z-20">
          <Image
            src="/mascot-coins.png"
            alt="Mascot"
            width={300}
            height={300}
            className="w-[700px] h-[800px] -mt-30  ml-0 md:ml-16"
          />
        </div>
      </div>

      {/* Skyline */}
      <div className="w-full relative z-10 -mt-30">
        <Image
          src="/ktm-skyline.png"
          alt="Skyline"
          width={1600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
