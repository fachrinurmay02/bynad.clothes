/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/bynad.clothes",
  output: "export",  // <=== enables static exports
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
