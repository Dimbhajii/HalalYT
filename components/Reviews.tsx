'use client'

import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      business: 'Local Restaurant Owner',
      rating: 5,
      comment: 'HalalYT transformed our online presence. Our website looks amazing and we\'re getting more customers than ever!',
    },
    {
      name: 'Mike Chen',
      business: 'Fitness Center Owner',
      rating: 5,
      comment: 'The social media videos they create are professional and engaging. Our followers have tripled in just 3 months!',
    },
    {
      name: 'Emily Rodriguez',
      business: 'Beauty Salon Owner',
      rating: 5,
      comment: 'Best investment we\'ve made. The SEO work has us ranking #1 for local searches. Constant flow of new clients!',
    },
    {
      name: 'David Thompson',
      business: 'Auto Repair Shop',
      rating: 5,
      comment: 'Affordable pricing and amazing results. They handle everything - website, social media, SEO. Highly recommend!',
    },
  ]

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-4 sm:mb-6 px-2">
          What Our Clients Think
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-200 hover:border-black transition-all duration-300"
            >
              <div className="flex mb-4 sm:mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg italic">
                &ldquo;{review.comment}&rdquo;
              </p>
              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <p className="font-bold text-black text-base sm:text-lg">{review.name}</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{review.business}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <button className="text-black font-bold text-base sm:text-lg hover:text-gray-600 transition-colors inline-flex items-center gap-2">
            View More
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

