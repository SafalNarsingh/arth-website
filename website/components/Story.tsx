import React from 'react'

export default function StoryPage() {
  return (
    <main className="landing_container  flex items-center px-8 md:px-16">
      <div className="mx-auto py-8 md:py-12 lg:py-16 w-full max-w-[1400px]">
    
        <div className="flex flex-col md:flex-row md:justify-between ">  
          <div className="max-w-[600px] font-jersey">
                 <h1
          className="font-jersey text-[120px] md:text-[160px] font-normal leading-none
                     bg-linear-to-b from-[#FFCF8D] to-[#C97502]
                     text-transparent bg-clip-text mb-8"
          style={{ lineHeight: 0.8 }}
        >
          Story
        </h1>
            <p className="text-lg md:text-2xl font-medium text-[#3D3935] leading-relaxed">
            A sudden city-wide collapse fractures reality, leaving temples, alleys and entire neighborhoods frozen in a glitched haze. People wander without memory, unable to recall what stood where, or even who they once were. The player wakes in the middle of this distortion with no recollection of their own past, surrounded by static-laced ruins that were once part of a thriving cultural landscape. As they explore the broken streets, they encounter PikPik, their pet parrot and the only being still linked to the city’s Memory Network. PikPik retains fragments of timelines and recognizes the player instantly, urging them to help reverse whatever has erased the city’s identity.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center h-full md:mt-10 ">
            <div className="h-full flex justify-center w-full max-w-[650px] ">
              <img
                src="/story.png"
                alt="Temple scene with character"
                className="w-full h-full object-center self-center"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}