import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        default: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        white: {
          primary: '#F5F5F5',
        },
        grey: {
          primary :'#1B1E22',
          secondary: '#83838D',
        },
        black: {
          primary: '#15171B',
          secondary: '#0B0B0F',
        },
        green: {
          primary: '#24FFBC',
          secondary: '#22be8f',
        },
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%)',
        'gradient-bottom': 'linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%)',
      },
      boxShadow: {
        custom: '0px 0px 0px 1px #00000014, 0px 2px 8px 0px #0000000F',
        footer: '0px 0px 25px 0px #0000000D',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
    }
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;
