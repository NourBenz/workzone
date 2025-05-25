import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"


export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">WorkZone</Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/services">Services</Link>
          <Link to="/virtual-tour">Visite virtuelle</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Button size="sm">Se connecter</Button>
        </div>
      </div>
    </header>
  )
}
