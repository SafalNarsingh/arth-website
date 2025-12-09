
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="min-w-full bg-cream header-top">
      <div className="landing_container mx-auto px-6 py-4 dashed-accent flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[FFFFA4] shadow-sm">
            <Image src="/logo.png" alt="AR Treasure Hunt" width={36} height={36} />
          </div>
          <div>
            <div className="text-2xl font-jersey tracking-tight text-deepblue">AR TREASURE HUNT <span className="text-brown">v4</span></div>
          </div>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="hidden md:flex font-jersey text-2xl font-mediumitems-center gap-8">
            <li><a className="text-brown hover:text-darkbrown transition-colors">Home</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">About</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">FAQ</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">Code of Conduct</a></li>
          </ul>

          {/* Mobile hamburger (simple) */}
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#A65A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
