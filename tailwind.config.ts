import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImage':    "url('/assets/wallpaper.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'desconto': ' #181818',
        'photoItem': '#EBE9EA',
        'freteFree': '#474747',
        'bgNav': '#00AEFF',
        'titleSub': '#F9F9F9'
      },
      fontFamily: {
        'Montserrat': 'Montserrat'
      },
    },
  },
  plugins: [],
}
export default config
