import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ultra-minimal static export configuration
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  
  // Disable unnecessary features for static export
  experimental: {
    // Disable features not needed for static sites
    optimizePackageImports: [], // Don't optimize - we want minimal bundles
  },
  
  // Aggressive webpack optimization for static sites
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Ultra-minimal bundle splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          maxSize: 100000, // Very small chunks
          cacheGroups: {
            // Only bundle what's absolutely necessary
            interactive: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'interactive',
              priority: 30,
              chunks: 'all',
              enforce: true,
            },
            // UI components only for interactive elements
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react)[\\/]/,
              name: 'ui',
              priority: 20,
              chunks: 'all',
              enforce: true,
            },
            // Everything else in minimal vendor chunk
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              priority: 10,
              chunks: 'all',
              enforce: true,
            },
          },
        },
        // Minimize runtime
        runtimeChunk: false, // No runtime chunk for static export
      };
      
      // Remove Next.js specific features
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
        process: false,
      };
      
      // Exclude heavy dependencies
      config.externals = config.externals || []
      config.externals.push({
        'posthog-js': 'posthog-js',
        'vwo-smartcode-nextjs': 'vwo-smartcode-nextjs',
        '@builder.io/partytown': '@builder.io/partytown'
      });
    }
    
    return config;
  },
  
  // Images configuration for static export
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Disable unnecessary features
  poweredByHeader: false,
  compress: true,
  
  // Remove headers that don't work with static export
  // headers: () => [], // Commented out since it causes warnings
};

export default nextConfig;
