import type { Metadata } from "next";
import "../../globals.css";
import Footer from '@/components/ui/footer'

import TryHypertask from "@/components/pages/LandingPage/try-hypertask"
import RodrigoHeader from "@/components/ui/header/rodrigo-header";

export const metadata: Metadata = {
  title: "Stop Project Chaos Instantly - Hypertask",
  description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
  openGraph: {
    title: "Stop Project Chaos Instantly - Hypertask", 
    description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
    images: ['/hypertasklogo.avif'],
    url: 'https://hypertask.ai/rodrigo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stop Project Chaos Instantly - Hypertask",
    description: "The best project management app for AI-powered productivity. Turn voice into tasks, get smart summaries, and eliminate project chaos with Hypertask.",
    images: ['/hypertasklogo.avif'],
  }
};

export default function RodrigoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* No TopBanner or Header for Rodrigo's version */}
      <RodrigoHeader/>
      <main className="flex-1">
        {children}
      </main>
      <TryHypertask />
      <Footer />
    </>
  );
} 