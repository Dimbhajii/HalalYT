'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 sm:mb-8 leading-tight">
            We Help Local Businesses <span className="text-gray-600">THRIVE</span> Online.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
            Get <span className="text-[#0EA5E9] font-semibold">world-class</span> digital marketing services - professional websites, social media videos, daily social presence, and SEO optimization that drives <span className="text-[#0EA5E9] font-semibold">constant customer flow</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-900 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#showcase"
              className="border-2 border-black text-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              see the work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

