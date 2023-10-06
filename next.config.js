/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['naru396-aws-storage.s3-ap-northeast-1.amazonaws.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
