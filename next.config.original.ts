import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async headers() {
    return [
      // Security headers for all routes
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      
      // Static assets - aggressive caching (Next.js serves these)
      {
        source: '/(.*)\\.(js|css|woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Images and media files
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // Next.js static files
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      
      // API routes - short cache with revalidation
      {
        source: '/api/((?!auth).*)', // Exclude auth routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=600',
          },
        ],
      },
      
      // Auth/dynamic API routes - no cache
      {
        source: '/api/auth/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
      
      // Partytown service worker
      {
        source: '/~partytown/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
      
      // Analytics and tracking scripts
      {
        source: '/(.*)(analytics|gtag|gtm|fbevents|vwo|hotjar)(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      
      // VWO specific caching (if you serve VWO assets)
      {
        source: '/(.*vwo.*|.*variation.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, stale-while-revalidate=3600', // 30min cache
          },
        ],
      },
      
      // PostHog assets and API
      {
        source: '/(.*posthog.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://us.i.posthog.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ]
  },
  
  // Optimize webpack for Cloudflare Workers
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimized bundle splitting for static sites - smaller chunks for better performance
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 250000, // Smaller chunks = faster parsing, less blocking
          cacheGroups: {
            // React and React DOM in separate chunk
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              priority: 30,
              reuseExistingChunk: true,
              chunks: 'all',
              enforce: true,
            },
            // Next.js framework chunk
            nextjs: {
              test: /[\\/]node_modules[\\/](next)[\\/]/,
              name: 'nextjs',
              priority: 25,
              reuseExistingChunk: true,
              chunks: 'all',
              enforce: true,
            },
            // UI libraries chunk
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|class-variance-authority|clsx|tailwind-merge)[\\/]/,
              name: 'ui',
              priority: 20,
              reuseExistingChunk: true,
              chunks: 'all',
              enforce: true,
            },
            // Analytics chunk (only if used)
            analytics: {
              test: /[\\/]node_modules[\\/](posthog-js|vwo-smartcode|@builder.io\/partytown)[\\/]/,
              name: 'analytics',
              priority: 15,
              reuseExistingChunk: true,
              chunks: 'all',
              enforce: true,
            },
            // Other vendor libraries
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
              chunks: 'all',
              enforce: true,
            },
            // Minimal common chunk
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              chunks: 'all',
            },
          },
        },
        // Minimize runtime chunk
        runtimeChunk: {
          name: 'runtime',
        },
      };
      
      // Optimize for Workers runtime
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
      
      // Exclude analytics from main bundle when not used
      config.externals = config.externals || []
      config.externals.push({
        'posthog-js': 'posthog-js',
        'vwo-smartcode-nextjs': 'vwo-smartcode-nextjs',
        '@builder.io/partytown': '@builder.io/partytown'
      });
    }
    
    return config;
  },
  
  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Experimental features for performance
  experimental: {
    // Enable if you're using app directory
    // appDir: true,
    
    // Optimize CSS
    optimizeCss: true,
    
    // Enable tree shaking for better bundle optimization
    esmExternals: 'loose',
    
    // Optimize package imports for smaller vendor chunks
    optimizePackageImports: ['react', 'react-dom', 'lucide-react', '@radix-ui/react-icons'],
    
    // SWC minification is enabled by default in Next.js 15
    
    // Reduce memory usage
    memoryBasedWorkersCount: true,
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production (keep error and warn)
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  
  // Output configuration for static export
  output: 'export',
  trailingSlash: true,
  assetPrefix: './', // Use relative paths for static export
  
  // Optimize static export
  distDir: 'out',
  generateBuildId: async () => {
    return 'static-build'
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'duv2gcpdgd578.cloudfront.net',
        port: '',
        pathname: '/tasks/attachments/**',
      },
      // Facebook domains for pixel tracking
      {
        protocol: 'https',
        hostname: 'connect.facebook.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/tr**',
      },
      // LinkedIn domains for profile images
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Compress responses
  compress: true,
};

export default nextConfig;