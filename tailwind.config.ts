import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Bundle Media color palette
        'bundle-black': '#000000',
        'bundle-white': '#FFFFFF',
        'bundle-gray-light': '#F5F5F5',
        'bundle-gray': '#FAFAFA',
        // Sky blue for highlights
        'sky-blue': '#0EA5E9',
      },
    },
  },
  plugins: [],
}
export default config

