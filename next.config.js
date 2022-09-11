/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
          fs: false
      }
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
          } 
        ],
        
      })
  }

    
    return config
  },

  experimental: {
    images: {
        unoptimized: true
    },
    scrollRestoration: true,
},
resolve: {
        fallback: {
            "fs": false
        },
    }
}
