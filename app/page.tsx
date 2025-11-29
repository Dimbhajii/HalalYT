import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import Showcase from '@/components/Showcase'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Showcase />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

