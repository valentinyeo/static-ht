
import type { Metadata } from "next";
import "./globals.css";
// No third-party imports for static site

export const metadata: Metadata = {
  title: "Stop Project Chaos Instantly - Hypertask",
  description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
  openGraph: {
    title: "Stop Project Chaos Instantly - Hypertask", 
    description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
    images: ['/hypertasklogo.avif'],
    url: 'https://hypertask.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stop Project Chaos Instantly - Hypertask",
    description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
    images: ['/hypertasklogo.avif'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical hero styles */
            .gradient-bg-12 { 
              background-image: url('/images/gradients/gradient(13).avif');
              background-size: cover;
              background-position: center;
            }
            
            /* Prevent layout shifts */
            body { margin: 0; padding: 0; background: #000; color: #fff; font-family: Inter, system-ui, sans-serif; }
            * { box-sizing: border-box; }
            
            /* Critical above-the-fold styles */
            .header-container { display: flex; justify-content: space-between; align-items: center; }
            .logo { display: flex; align-items: center; font-weight: bold; color: white; text-decoration: none; }
            .desktop-nav { display: none; }
            @media (min-width: 768px) { .desktop-nav { display: flex; } }
            
            /* Prevent FOUC */
            .loading { opacity: 0; }
            .loaded { opacity: 1; transition: opacity 0.2s; }
          `
        }} />
        
        {/* Preload only critical above-the-fold resources */}
        <link
          rel="preload"
          as="image"
          href="/images/gradients/gradient(13).avif"
          type="image/avif"
          fetchPriority="high"
        />
        
        {/* Optimized font loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        
        {/* Load fonts with display=swap for better performance */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        
        {/* Essential performance monitoring - non-blocking */}
        <script src="/essential.min.js" defer></script>
        
        {/* No third-party connections for static site */}
      </head>
      <body className={`body-bg text-white  min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
