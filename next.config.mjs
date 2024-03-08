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
        domains: [
        'images.squarespace-cdn.com', 
        'th.bing.com', 
        'media.timeout.com',
        'assets.traveltriangle.com',
        'images.unsplash.com'],
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