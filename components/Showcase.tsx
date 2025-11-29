'use client'

import { useEffect } from 'react'
import { ExternalLink } from 'lucide-react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function Showcase() {
  const instagramReels = [
    {
      url: 'https://www.instagram.com/reel/DKcBjDGSUY-/?igsh=M3Vvc2lvdXY2NjNw',
      reelId: 'DKcBjDGSUY-',
    },
    {
      url: 'https://www.instagram.com/reel/DQrTxCyDDC5/?igsh=djFldHMzcmpweDR1',
      reelId: 'DQrTxCyDDC5',
    },
    {
      url: 'https://www.instagram.com/reel/DRHaAB1jB11/?igsh=NjJ0dWxvaTdudnQy',
      reelId: 'DRHaAB1jB11',
    },
    {
      url: 'https://www.instagram.com/reel/DIKWblAT72V/?igsh=MWtoMmd2bzk5MjI2Mg==',
      reelId: 'DIKWblAT72V',
    },
    {
      url: 'https://www.instagram.com/reel/DFxn_XyNA_K/?igsh=MXg0bmphbHV0NTd6eA==',
      reelId: 'DFxn_XyNA_K',
    },
    {
      url: 'https://www.instagram.com/reel/DJ65cRCRdKU/?igsh=MWRycncwcDZlYnIyNg==',
      reelId: 'DJ65cRCRdKU',
    },
    {
      url: 'https://www.instagram.com/reel/DJwlkJeO3Zx/?igsh=Z2ZueDM4aGY0Ymwz',
      reelId: 'DJwlkJeO3Zx',
    },
    {
      url: 'https://www.instagram.com/reel/DHOJfbtTxmg/?igsh=MXU2azNlMW01ZnU3aQ==',
      reelId: 'DHOJfbtTxmg',
    },
    {
      url: 'https://www.instagram.com/reel/DFHK1wlMdtP/?igsh=MWM0ZXF1dm40ODgzNQ==',
      reelId: 'DFHK1wlMdtP',
    },
    {
      url: 'https://www.instagram.com/reel/DIJsLMGMXnb/?igsh=N2Z2dTV5Mno4OW10',
      reelId: 'DIJsLMGMXnb',
    },
    {
      url: 'https://www.instagram.com/reel/DFsr-7UJFCq/?igsh=MXBqdTVjbXlxNmF4cQ==',
      reelId: 'DFsr-7UJFCq',
    },
  ]

  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup is handled by Instagram's script
    }
  }, [])

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 sm:mb-6 px-2">
          Our Showcase
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {instagramReels.map((reel, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={reel.url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '1rem',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%',
                  }}
                >
                </blockquote>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-bold text-base sm:text-lg hover:text-gray-700 transition-colors inline-flex items-center gap-2"
          >
            See More
            <span className="text-lg sm:text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
