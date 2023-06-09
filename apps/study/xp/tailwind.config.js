const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')
const { join } = require('path')

const {
  presetTailwindCss
} = require('./../../../libs/ui/src/lib/preset-tailwindcss')

module.exports = {
  presets: [presetTailwindCss],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'layouts/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'modules/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname)
  ]
}
