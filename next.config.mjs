import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.squarespace-cdn.com',
             
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
          
              },
              {
                protocol: 'https',
                hostname: 'media.timeout.com',
                
              },
              {
                protocol: 'https',
                hostname:   'assets.traveltriangle.com',
               
              },
              {
                protocol: 'https',
                hostname:  'images.unsplash.com',
              
              },
              {
                protocol: 'https',
                hostname:  'media.swncdn.com',
    
              },
              {
                protocol: 'https',
                hostname:  'd626yq9e83zk1.cloudfront.net',
    
              },
          ],
      },
      reactStrictMode: true,
  // Optionally, add any other Next.js config below
};
 
const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig);