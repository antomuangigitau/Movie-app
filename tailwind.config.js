/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'cool-color': 'var(--cool-color)',
        'button-color': 'var(--button-color)',
        'some-text-color': 'var(--some-text-color)',
        'movie-text-color': 'var( --moviepage-text-color)',
        'stars-text-color': 'var( --stars-text-color)',
        'blacklike-text-color': 'var( --blacklike-text-color)',
        'button-bg-color': 'var( --button-bg-color)',
        'no-help-color': 'var( --no-help-color)',
        'fill-color': 'var( --fill-color)',
      },
    },
  },
  plugins: [],
};
