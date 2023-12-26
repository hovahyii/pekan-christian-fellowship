const withMDX = require('@next/mdx')()


/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
    images: {
        domains: [
        'images.squarespace-cdn.com', 
        'th.bing.com', 
        'media.timeout.com',
        'assets.traveltriangle.com',
        'images.unsplash.com'],
      },
      reactStrictMode: true,
       // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  
  }

  module.exports = withMDX(nextConfig)
