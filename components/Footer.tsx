'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6">HalalYT</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Digital Marketing & Creative Agency helping local businesses thrive online.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="hover:text-white transition-colors">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li>Web Development</li>
              <li>Video Production</li>
              <li>Social Media Management</li>
              <li>SEO Optimization</li>
              <li>Google Maps SEO</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Connect</h4>
            <div className="flex gap-4 sm:gap-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 sm:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base text-gray-400">
            <p className="text-center md:text-left">Copyright © {new Date().getFullYear()} HalalYT. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

