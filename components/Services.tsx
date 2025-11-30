'use client'

import { Globe, Video, Share2, TrendingUp, Search, MapPin, DollarSign } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Great Website',
      description: 'Professional, responsive websites that convert visitors into customers. Mobile-optimized and fast-loading.',
    },
    {
      icon: Video,
      title: 'Professional Videos',
      description: 'High-quality video content for social media that engages your audience and drives results.',
    },
    {
      icon: Share2,
      title: 'Daily Social Presence',
      description: 'Consistent, engaging content posted daily across all your social media platforms to keep your audience engaged.',
    },
    {
      icon: TrendingUp,
      title: 'Constant Customer Flow',
      description: 'Strategic marketing campaigns that bring in a steady stream of new customers to your business.',
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Advanced SEO strategies to rank higher on Google and drive organic traffic to your website.',
    },
    {
      icon: MapPin,
      title: 'Google Maps SEO',
      description: 'Optimize your Google Business Profile to appear in local searches and get more foot traffic.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Monthly Pricing',
      description: 'Transparent, affordable monthly packages with no hidden fees. Get all services in one convenient package.',
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-4 sm:mb-6 px-2">
          Our Services
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-lg flex items-center justify-center mb-6 sm:mb-8">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

