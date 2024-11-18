import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          100: '#23252E',
          200: '#191B24',
          DEFAULT: '#000000'
        },
        
        white: {
          DEFAULT: '#FFFFFF',
        },
        orange: {
          900: '#CF4D35',
          DEFAULT: '#F1A25D',
        },
        purple: {
          900: '#8865E7',
          DEFAULT: '#8C6CEB',
        },
        gray: {
          900: '#D1D1D3',
          DEFAULT: '#D8D8D8',
        }
      },
      borderRadius: {
        '4xl': '32px'
      },
      spacing: {
        16: '60px',
      },
      fontSize: {
        lg: ['28px', '1rem'],
      },
    },
  },
  plugins: [],
} satisfies Config;
