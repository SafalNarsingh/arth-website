import React from 'react'
import Image from "next/image";

export default function StoryPage() {
  return (
    <main className="w-full bg-[#FFFAF5] flex items-center">
      <div className="landing_container mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN – HEADING + TEXT */}
          <div className="lg:col-span-7">
            <h1
              className="font-jersey text-[#F7A23B] text-8xl font-normal md:text-[5.5rem] leading-none"
              style={{ lineHeight: 0.9 }}
            >
              Story
            </h1>

            <div className="mt-6 max-w-xl text-[#2E2B26]">
              <p className="text-lg font-jersey leading-relaxed mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique dolorem dolores atque laudantium aut doloremque nihil veniam recusandae odio, sapiente, ut dicta reprehenderit molestiae, nisi consequuntur. Natus culpa est quae ea vero nesciunt delectus iusto rerum numquam. Eos quam iusto nobis, facere voluptas accusamus, minima odit excepturi, nisi modi quo voluptate ad unde? Expedita dicta esse molestiae debitis laboriosam incidunt temporibus quo unde, deserunt similique ut tempora saepe culpa voluptas hic veniam? Sequi illum iusto ab praesentium necessitatibus dolorem, nostrum, voluptatem explicabo eius modi veritatis maxime deserunt odio quo, eveniet architecto atque cupiditate ullam et commodi exercitationem iste! Provident!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE + SPRITE + CLOUD */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] relative">
              
              {/* Background Scene */}
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/story.png"
                  alt="Scene Image"
                  width={640}
                  height={420}
                  className="w-full h-auto block"
                />
              </div>

              {/* Sprite Character */}
              <div className="absolute bottom-6 left-6 lg:left-auto lg:right-8 w-20 h-20">
                <Image
                  src="/file.svg"
                  alt="Character Sprite"
                  width={80}
                  height={80}
                  className="pixelated"
                />
              </div>

              {/* Decorative Cloud */}
              <div className="absolute -top-6 right-0 hidden md:block">
                <svg
                  width="96"
                  height="36"
                  viewBox="0 0 96 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20C20 13.37 25.37 8 32 8C33.8 8 35.5 8.4 37 9.1C40 4.5 46 -0.5 53 0C62 0.7 68 8 70 13C75 13 80 17 80 22C80 27 75 31 68 31H22C20.9 31 20 30.1 20 29V20Z"
                    fill="#CDEDF8"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
