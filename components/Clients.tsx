'use client'

export default function Clients() {
  const clients = [
    { name: 'Local Restaurant', category: 'Food & Beverage', metric: '300%', metricLabel: 'Revenue Increase' },
    { name: 'Beauty Salon', category: 'Beauty Services', metric: '250%', metricLabel: 'Growth' },
    { name: 'Fitness Center', category: 'Health & Fitness', metric: '400%', metricLabel: 'ROI' },
    { name: 'Auto Repair Shop', category: 'Automotive', metric: '200%', metricLabel: 'More Leads' },
    { name: 'Dental Clinic', category: 'Healthcare', metric: '350%', metricLabel: 'Growth' },
    { name: 'Real Estate Agency', category: 'Real Estate', metric: '500%', metricLabel: 'Increase' },
    { name: 'Law Firm', category: 'Legal Services', metric: '280%', metricLabel: 'Growth' },
    { name: 'Home Services', category: 'Home Improvement', metric: '320%', metricLabel: 'ROI' },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 sm:mb-6 px-2">
          What You Can Cook For You
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-md">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700">
                  {client.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1 sm:mb-2">{client.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{client.category}</p>
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{client.metric}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">{client.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

