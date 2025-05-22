import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-header fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="flex h-20">
        {/* Left Accent Bar with Wider Logo Area */}
        <div className="bg-[#ff5757] w-44 min-w-[176px] h-full flex items-center justify-center">
          <Link to="/" className="navbar-logo w-full flex items-center justify-center">
            <img src="/dist/assets/logo-noir-horizontale1-ConvertImage.png" alt="WorkZone" className="h-14 max-w-[150px] w-auto" />
          </Link>
        </div>
        {/* Main Navbar Content */}
        <nav className="flex-1 flex items-center justify-between px-8">
          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-8 text-base font-medium">
              <li className="relative group">
                <Link to="/services" className="text-[#1e293b] hover:text-[#ff5757] transition-colors">Services</Link>
                {/* Dropdown */}
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block z-50">
                  <li><Link to="/services/coworking" className="block px-4 py-2 text-[#1e293b] hover:bg-[#ff5757] hover:text-white">Coworking Zone</Link></li>
                  <li><Link to="/services/private" className="block px-4 py-2 text-[#1e293b] hover:bg-[#ff5757] hover:text-white">Private Zone</Link></li>
                  <li><Link to="/services/meeting" className="block px-4 py-2 text-[#1e293b] hover:bg-[#ff5757] hover:text-white">Meeting Zone</Link></li>
                  <li><Link to="/services/domiciliation" className="block px-4 py-2 text-[#1e293b] hover:bg-[#ff5757] hover:text-white">Domiciliation</Link></li>
                </ul>
              </li>
              <li><Link to="/virtual-tour" className="text-[#1e293b] hover:text-[#ff5757] transition-colors">Visite Virtuelle</Link></li>
              <li><Link to="/blog" className="text-[#1e293b] hover:text-[#ff5757] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-[#1e293b] hover:text-[#ff5757] transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-[#ff5757] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#e04a4a] transition">Join us</Button>
            <Button variant="outline" className="border-[#ff5757] text-[#ff5757] px-6 py-2 rounded-full font-semibold hover:bg-[#ff5757] hover:text-white transition">Espace membre</Button>
            <button className="ml-2 text-[#1e293b] hover:text-[#ff5757] transition-colors">
              <Globe className="h-5 w-5" />
            </button>
        </div>
        {/* Mobile Menu Button */}
          <button
            className="ml-4 md:hidden text-[#1e293b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-8 py-6">
          <ul className="space-y-4 text-base font-medium">
            <li><Link to="/services" className="text-[#1e293b] hover:text-[#ff5757] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li className="pl-4 space-y-2">
              <Link to="/services/coworking" className="block text-[#1e293b] hover:bg-[#ff5757] hover:text-white px-2 py-1 rounded" onClick={() => setIsMenuOpen(false)}>Coworking Zone</Link>
              <Link to="/services/private" className="block text-[#1e293b] hover:bg-[#ff5757] hover:text-white px-2 py-1 rounded" onClick={() => setIsMenuOpen(false)}>Private Zone</Link>
              <Link to="/services/meeting" className="block text-[#1e293b] hover:bg-[#ff5757] hover:text-white px-2 py-1 rounded" onClick={() => setIsMenuOpen(false)}>Meeting Zone</Link>
              <Link to="/services/domiciliation" className="block text-[#1e293b] hover:bg-[#ff5757] hover:text-white px-2 py-1 rounded" onClick={() => setIsMenuOpen(false)}>Domiciliation</Link>
            </li>
            <li><Link to="/virtual-tour" className="text-[#1e293b] hover:text-[#ff5757] transition-colors" onClick={() => setIsMenuOpen(false)}>Visite Virtuelle</Link></li>
            <li><Link to="/blog" className="text-[#1e293b] hover:text-[#ff5757] transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" className="text-[#1e293b] hover:text-[#ff5757] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="mt-6 flex flex-col space-y-3">
            <Button className="bg-[#ff5757] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#e04a4a] transition">Join us</Button>
            <Button variant="outline" className="border-[#ff5757] text-[#ff5757] px-6 py-2 rounded-full font-semibold hover:bg-[#ff5757] hover:text-white transition">Espace membre</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;