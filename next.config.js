/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  distDir: "build" //this line will tell the build to create a file with this name
}

module.exports = nextConfig
