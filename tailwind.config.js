/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      borderColor: {
        'gray': '#909090',
      },
      backgroundColor: {
        'custom-gray': '#909090',
      },
      colors: {
        'text-gray': '#666666',
        'nav-text': '#999999',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ], 
}

