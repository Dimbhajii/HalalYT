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
      url: 'https://www.instagram.com/reel/DQrTxCyDDC5/',
      reelId: 'DQrTxCyDDC5',
    },
    {
      url: 'https://www.instagram.com/reel/DRHaAB1jB11/',
      reelId: 'DRHaAB1jB11',
    },
    {
      url: 'https://www.instagram.com/reel/DIKWblAT72V/',
      reelId: 'DIKWblAT72V',
    },
    {
      url: 'https://www.instagram.com/reel/DFxn_XyNA_K/',
      reelId: 'DFxn_XyNA_K',
    },
    {
      url: 'https://www.instagram.com/reel/DJ65cRCRdKU/',
      reelId: 'DJ65cRCRdKU',
    },
    {
      url: 'https://www.instagram.com/reel/DJwlkJeO3Zx/',
      reelId: 'DJwlkJeO3Zx',
    },
    {
      url: 'https://www.instagram.com/reel/DHOJfbtTxmg/',
      reelId: 'DHOJfbtTxmg',
    },
    {
      url: 'https://www.instagram.com/reel/DFHK1wlMdtP/',
      reelId: 'DFHK1wlMdtP',
    },
   
  ]

  useEffect(() => {
    // Load Instagram embed script
    const loadInstagramScript = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
        return
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process()
        }
        return
      }

      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    }

    // Initial load
    loadInstagramScript()

    // Process again after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process()
      }
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-4 sm:mb-6 px-2">
          Our Showcase
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-10 sm:mb-12 lg:mb-16"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {instagramReels.map((reel, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-black transition-all duration-300"
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
                <a
                  href={reel.url}
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div
                        style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          flexGrow: 0,
                          height: '40px',
                          marginRight: '14px',
                          width: '40px',
                        }}
                      ></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            marginBottom: '6px',
                            width: '100px',
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: 0,
                            height: '14px',
                            width: '60px',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}></div>
                    <div style={{ paddingTop: '8px' }}>
                      <div
                        style={{
                          color: '#3897f0',
                          fontFamily: 'Arial,sans-serif',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 550,
                          lineHeight: '18px',
                        }}
                      >
                        View this post on Instagram
                      </div>
                    </div>
                    <div style={{ padding: '12.5% 0' }}></div>
                  </div>
                  <p
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      lineHeight: '17px',
                      marginBottom: 0,
                      marginTop: '8px',
                      overflow: 'hidden',
                      padding: '8px 0 7px',
                      textAlign: 'center',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <a
                      href={reel.url}
                      style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        lineHeight: '17px',
                        textDecoration: 'none',
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      A post shared by Instagram
                    </a>
                  </p>
                </a>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-bold text-base sm:text-lg hover:text-gray-600 transition-colors inline-flex items-center gap-2"
          >
            See More
            <span className="text-lg sm:text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
