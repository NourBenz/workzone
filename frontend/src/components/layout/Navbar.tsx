import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center mr-auto">
          <img src="/images/logobalck.png" alt="WorkZone Logo" className="w-40 h-auto" />
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 text-sm font-medium text-black">
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/virtual-tour" className="hover:text-primary transition-colors">Visite Virtuelle</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <button className="hover:text-primary transition-colors">Languages</button>
        </nav>

        {/* Right: Buttons */}
        <div className="hidden md:flex gap-2 ml-auto">
          <Button
            size="sm"
            className="bg-black text-white hover:bg-gray-800 px-4 py-1 text-sm rounded-full font-medium"
          >
            Join us
          </Button>
          <Button
            size="sm"
            className="bg-primary text-white hover:bg-primary/90 px-4 py-1 text-sm rounded-full font-medium"
          >
            espace membre
          </Button>
        </div>
        
      </div>
    </header>
  )
}
