'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-cream">
      <div className="landing_container mx-auto px-6 py-2 flex items-center justify-between">

        {/* Branding */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AR Treasure Hunt"
            width={36}
            height={36}
          />
          <div className="text-xl md:text-2xl font-jersey tracking-tight text-deepblue">
            AR TREASURE HUNT <span className="text-brown">v4</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex font-jersey text-xl md:text-2xl font-medium items-center gap-6">
            <li><Link className="text-brown hover:text-darkbrown transition-colors" href="/">Home</Link></li>
            <li><Link className="text-brown hover:text-darkbrown transition-colors" href='#about'>About</Link></li>
            <li><Link className="text-brown hover:text-darkbrown transition-colors" href="#faq">FAQ</Link></li>
           
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="#A65A2A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream">
          <ul className="flex flex-col font-jersey text-lg gap-4 px-6 py-4">
             <li><Link className="text-brown hover:text-darkbrown transition-colors" href="/">Home</Link></li>
            <li><Link className="text-brown hover:text-darkbrown transition-colors" href='#about'>About</Link></li>
            <li><Link className="text-brown hover:text-darkbrown transition-colors" href="#faq">FAQ</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
