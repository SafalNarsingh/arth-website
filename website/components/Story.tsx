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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dicta est non odit, voluptates culpa ducimus similique corporis a praesentium vitae tempore rem repellendus cumque. Similique, quibusdam. Culpa, magni quod.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE + SPRITE + CLOUD */}
          <div className="lg:col-span-5 relative flex bottom-0 justify-center lg:justify-end">
            <div className="w-full max-w-[600px] relative bottom-0">
              
              {/* Background Scene */}
              <div className="overflow-hidden">
                <Image
                  src="/story.png"
                  alt="Scene Image"
                  width={640}
                  height={420}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
