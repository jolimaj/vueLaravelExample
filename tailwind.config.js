import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Verdana', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue': '#00138C',
        'orange-gradient-top': '#F79D25',
        'orange-gradient-bottom': '#F05E16', 
        'blue-gradient-top': '#0044ee',
        'blue-gradient-bottom': '#00138c'
      },
    },
  },

  plugins: [forms, typography],
};
