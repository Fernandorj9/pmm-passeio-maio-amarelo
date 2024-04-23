/** @type {import('next').NextConfig} */

const withImages = require('next-images')


const nextConfig = {
  images: {
    disableStaticImages: true
  },
  reactStrictMode: true,
  esModule: true
}

module.exports = withImages(nextConfig)
