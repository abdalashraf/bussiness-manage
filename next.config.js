/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  env: {
    DB_URL: "mongodb+srv://aliabdal12345:ali123@cluster0.isu4hkx.mongodb.net/?retryWrites=true&w=majority"
  }
};

module.exports = nextConfig;
