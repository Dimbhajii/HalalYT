'use client'

import { Users, Clock, Video, TrendingUp } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Customers Served',
    },
    {
      icon: TrendingUp,
      number: '250%',
      label: 'Average Growth',
    },
    {
      icon: Video,
      number: '1000+',
      label: 'Videos Created',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 px-2">
          Our Statistics
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-white mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-4">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-base lg:text-xl font-medium px-2">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

