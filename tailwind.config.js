module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          darkbg: '#1E293B',
          blue: {
            850: "#14b8a6"
          }
        },
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        }
      },
    },
    plugins: [],
  }