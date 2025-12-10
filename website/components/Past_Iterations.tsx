import React from 'react'
import Image from "next/image";
import P_2024 from '@/components/P_2024'
import P_2023 from '@/components/P_2023'
import P_2022 from '@/components/P_2022'

const Past_Iterations = () => {
      return (
        <main className="w-full bg-[#FFFAF5] px-8 py-16">
          {/* HEADER */}
          <section className="landing_container mx-auto">
            <h1 className="text-8xl font-extralight tracking-tight font-jersey">PAST ITERATIONS
            </h1>
          </section>
          <P_2024></P_2024>
          <P_2023></P_2023>
          <P_2022></P_2022>
        </main>
      );
    }

export default Past_Iterations
