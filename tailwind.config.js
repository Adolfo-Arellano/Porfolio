export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetBrainsMono': ['JetBrainsMono', 'monospace', 'sans-serif'],
        'sans': ['JetBrainsMono', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#0ea5e9',
      },
    },
  },
  plugins: [],
}