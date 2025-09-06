import type { Metadata } from "next";
import "../globals.css";
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import TopBanner from '@/components/ui/TopBanner'
// No analytics for static site
import TryHypertask from "@/components/pages/LandingPage/try-hypertask"

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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBanner />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <TryHypertask />
      <Footer />
    </>
  );
} 