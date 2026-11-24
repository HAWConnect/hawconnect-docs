import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: false,
  contentDirBasePath: '/',
  unstable_shouldAddLocaleToLinks: true
})
 
export default (withNextra({
  reactStrictMode: false,
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'en'
  },
  output: 'standalone',
  // The terms page moved from /legal/terms-of-service to /legal/terms.
  async redirects() {
    return [
      {
        source: '/:lang(de|en)/legal/terms-of-service',
        destination: '/:lang/legal/terms',
        permanent: true,
        locale: false
      }
    ]
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Use the raw assets instead of the Next.js image optimizer to avoid runtime breakage
    // (e.g., when proxies/CDNs don't forward _next/image correctly).
    unoptimized: true,
    loader: 'default',
  },
  // React Compiler currently breaks the landing page during SSR in production; keep it off.
  reactCompiler: false,

  experimental: {
    optimizePackageImports: [],
    webpackMemoryOptimizations: true,
  }
}))
