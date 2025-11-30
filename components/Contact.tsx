'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-4 sm:mb-6 px-2">
          Get In Touch
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              Let&apos;s grow your business together
            </h3>
            <p className="text-gray-700 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
              Ready to take your local business to the next level? Contact us today for a free consultation and discover how we can help you get more customers, increase your online presence, and grow your revenue.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Email</p>
                  <p className="text-sm sm:text-base text-black font-medium break-words">halalytt@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Phone</p>
                  <p className="text-sm sm:text-base text-black font-medium">+44 7757277744</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Location</p>
                  <p className="text-sm sm:text-base text-black font-medium">Serving Local Businesses Nationwide</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 lg:p-10 border border-gray-200">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="business" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                  Business Type
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all text-sm sm:text-base"
                  placeholder="e.g., Restaurant, Salon, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your business needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

