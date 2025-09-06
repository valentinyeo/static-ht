'use client'

import { useState } from "react";
import ComparisonTable from '@/components/pages/LandingPage/Comparison/comparison-table';
import ClientLogos from '@/components/pages/LandingPage/client-logos';
import { Testimonials, Testimonials2 } from '@/components/pages/LandingPage/testimonials';
import { APP_LOGIN_URL } from "@/lib/redirect-utils";
import { InternalLink } from "@/components/ui/internal-link";
import ProductivityComparisonTable from "@/components/pages/LandingPage/Comparison/comparison-table-productivity-features";
import AIComparisonTable from "@/components/pages/LandingPage/Comparison/comparison-table-ai-features";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricing = (plan: 'monthly' | 'yearly') => {
    setIsYearly(plan === 'yearly');
  };

  return (
    <div className="bg-black min-h-screen">
      <section className="pricing-section py-16 bg-black text-white text-center">
        <div className="pricing-container max-w-6xl mx-auto px-4">
          <div className="pricing-header mb-12">
            <h1 className="text-6xl font-bold mb-12 leading-tight text-white pb-1">
              Pricing that pays for itself in saved time
            </h1>
          </div>
          
          {/* Pricing Toggle */}
          <div className="pricing-toggle flex justify-center items-center mb-12">
            <div className="toggle-container flex bg-white/5 rounded-lg p-1 relative border border-white/10 shadow-lg">
              <button 
                className={`toggle-option px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 relative z-10 min-w-[120px] ${
                  !isYearly 
                    ? 'text-black font-semibold bg-white shadow-md' 
                    : 'text-white/70 bg-transparent'
                }`}
                onClick={() => togglePricing('monthly')}
              >
                Pay monthly
              </button>
              <button 
                className={`toggle-option px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 relative z-10 min-w-[120px] ${
                  isYearly 
                    ? 'text-black font-semibold bg-white shadow-md' 
                    : 'text-white/70 bg-transparent'
                }`}
                onClick={() => togglePricing('yearly')}
              >
                Pay yearly 
                <span className="text-purple-400 text-xs font-semibold ml-1">save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-5xl mx-auto">
            {/* Free Trial Plan */}
            <div className="pricing-card bg-white/5 rounded-xl overflow-hidden w-full max-w-[350px] mx-auto text-left relative border border-gray-800">
              <div className="card-header p-6 pb-0 h-[220px] flex flex-col justify-start relative">
                <h2 className="text-xl font-bold mb-4 text-white">Free Trial</h2>
                <div className="card-price text-6xl font-bold mb-2 text-white flex items-center justify-start leading-none">
                  FREE
                  <span className="text-xs font-normal opacity-70 ml-1 flex flex-col leading-tight text-left">
                    <span>7 DAYS</span>
                    <span>TRIAL</span>
                  </span>
                </div>
              </div>
              <div className="px-6 py-2 ">
                <p className="text-sm opacity-80 text-white/70">Test Hypertask for free</p>
              </div>
              <div className="card-body p-6 pt-4">
                <InternalLink href={APP_LOGIN_URL} className="w-full py-4 px-6 bg-white text-black text-sm font-semibold rounded-md text-center block mb-4 uppercase tracking-wide hover:bg-gray-100 transition-all duration-200">
                  START FREE TRIAL
                </InternalLink>
                <ul className="features-list space-y-1">
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Auto Summary</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Task Writer</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Writing Assistant</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited members</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited boards</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited file uploads</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited upload volume</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="pricing-card bg-white/5 rounded-xl overflow-hidden w-full max-w-[350px] mx-auto text-left relative transform scale-105 shadow-2xl shadow-purple-500/20 border-2 border-purple-500">
              <div className="card-header p-6 pb-0 h-[220px] flex flex-col justify-start relative">
                {isYearly && (
                  <div className="yearly-savings-top mb-2 text-left">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-white text-xs font-semibold px-2 py-1 rounded inline-block">
                      20% SAVINGS
                    </span>
                  </div>
                )}
                <h2 className="text-xl font-bold mb-4 text-white">Hypertask Seat + AI</h2>
                <div className="card-price text-6xl font-bold mb-2 text-white flex items-center justify-start leading-none">
                  ${isYearly ? '16' : '20'}
                  <span className="text-xs font-normal opacity-70 ml-1 flex flex-col leading-tight text-left">
                    <span>/ USER</span>
                    <span>/ MONTH</span>
                  </span>
                </div>
                {isYearly && (
                  <div className="yearly-savings mt-2 text-sm opacity-80 flex items-center">
                    <span className="line-through mr-2 opacity-60">$240</span>
                    billed $192 / year
                  </div>
                )}
              </div>
              <div className="px-6 py-2 ">
                <p className="text-sm opacity-80 text-white/70">For high-performing teams</p>
              </div>
              <div className="card-body p-6 pt-4">
                <InternalLink href={APP_LOGIN_URL} className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-blue-400 text-white text-sm font-semibold rounded-md text-center block mb-4 uppercase tracking-wide hover:opacity-90 transition-all duration-200">
                  GET STARTED
                </InternalLink>
                <ul className="features-list space-y-1">
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Auto Summary</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Task Writer</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited <span className="text-purple-400 font-semibold">AI</span> Writing Assistant</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited members</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited boards</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited file uploads</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited upload volume</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Unlimited issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card bg-white/5 rounded-xl overflow-hidden w-full max-w-[350px] mx-auto text-left relative border border-gray-800">
              <div className="card-header p-6 pb-0 h-[220px] flex flex-col justify-start relative">
                <h2 className="text-xl font-bold mb-4 text-white">Enterprise</h2>
                <div className="card-price text-5xl font-bold mb-2 text-white flex items-center justify-start leading-none">
                  Let&apos;s talk
                </div>
              </div>
              <div className="px-6 py-2 ">
                <p className="text-sm opacity-80 text-white/70">For large organizations with specific requirements</p>
              </div>
              <div className="card-body p-6 pt-4">
                <a href="https://calendly.com/hypertask/30min" className="w-full py-4 px-6 bg-white/10 text-white text-sm font-semibold rounded-md text-center block mb-4 uppercase tracking-wide hover:bg-white/20 transition-all duration-200">
                  BOOK A DEMO
                </a>
                <ul className="features-list space-y-1">
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Everything in Hypertask Seat, plus:</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Custom onboarding</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>SLA guarantees</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-white mr-2 mt-0.5">✓</span>
                    <span>Custom contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Trusted By Section with Client Logos */}
      <ClientLogos />

      {/* Testimonials Section */}
      <Testimonials2 />
      <AIComparisonTable />
      <ProductivityComparisonTable />
    </div>
  );
} 