/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosanReg: ["NotoSans_reg"],
        notosanBold: ["NotoSans_bold"],
        notosanSemi: ["NotoSans_semibld"],
      },
    },
  },
  plugins: [],
}
