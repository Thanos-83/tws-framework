const typography = require('@tailwindcss/typography');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './general-styles/**/*.{js,jsx}',
    './custom-design-hooks/**/*.{js,jsx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      gridTemplateColumns: {
        fit: 'repeat(auto-fit,minmax(300px,1fr))',
      },
      colors: {
        tws_color1: '#E3E3E3',
        tws_color2: '#49BEAA',
        tws_color3: '#003D91',
        tws_color4: '#8DA9C4',
        tws_color5: '#2E3D4E',
        tws_color6: '#349B8A',
        tws_color7: '#000000',
        tws_color8: '#FF0000',
        tws_color9: '#C90910',
        tws_color10: '#F7F7F7',
        tws_color11: '#E5B955',
      },
    },
  },

  plugins: [typography],
};
