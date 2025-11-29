'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              HalalYT
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-6 lg:space-x-10">
              <Link href="#home" className="text-gray-700 hover:text-black px-2 lg:px-3 py-2 text-sm lg:text-base font-semibold transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-black px-2 lg:px-3 py-2 text-sm lg:text-base font-semibold transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-black px-2 lg:px-3 py-2 text-sm lg:text-base font-semibold transition-colors">
                Services
              </Link>
              <Link href="#showcase" className="text-gray-700 hover:text-black px-2 lg:px-3 py-2 text-sm lg:text-base font-semibold transition-colors">
                Showcase
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-black px-2 lg:px-3 py-2 text-sm lg:text-base font-semibold transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-semibold hover:bg-gray-800 transition-all shadow-lg">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="#home" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link href="#showcase" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
              Showcase
            </Link>
            <Link href="#reviews" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
              Reviews
            </Link>
            <Link href="#contact" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

