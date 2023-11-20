/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,

    },
    images: {
        domains: [
        'images.squarespace-cdn.com', 
        'th.bing.com', 
        'media.timeout.com',
        'assets.traveltriangle.com'],
      },

  }

