/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Optional: ensures all routes have a trailing slash in the URL
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
};

export default nextConfig;


