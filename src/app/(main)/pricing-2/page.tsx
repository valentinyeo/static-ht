'use client';
import { APP_LOGIN_URL } from "@/lib/redirect-utils";
import { InternalLink } from "@/components/ui/internal-link";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Pricing2Page() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push("/pricing");
  }, [router]);
  return (
    <>
      <section className="pricing-section py-16 bg-black text-white text-center">
        <div className="pricing-container max-w-5xl mx-auto px-4">
          <div className="pricing-header mb-12">
            <h1 className="pricing-title text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent pb-2">Pricing</h1>
          </div>
          {/* Pricing Cards (static for now, toggle can be added as a client component if needed) */}
          <div className="pricing-cards flex flex-wrap justify-center gap-6">
            {/* Free Plan */}
            <div className="pricing-card bg-[#111] rounded-xl max-w-xs w-full text-left flex flex-col">
              <div className="card-header p-6">
                <h2 className="card-title text-2xl font-bold mb-2">Free</h2>
                <div className="card-price text-4xl font-bold mb-2">$0 <span className="price-period text-base font-normal">FOREVER</span></div>
              </div>
              <div className="card-body p-6 flex-1">
                <InternalLink href={APP_LOGIN_URL} className="card-btn card-btn-secondary w-full mb-4 py-3 rounded bg-white/10 text-white font-bold text-lg uppercase text-center">Get Started</InternalLink>
                <ul className="features-list space-y-2">
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Up to 3 members</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>3 boards</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Basic task management</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Email support</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Mobile app access</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Basic file uploads</li>
                </ul>
              </div>
            </div>
            {/* Starter Plan */}
            <div className="pricing-card bg-[#111] rounded-xl max-w-xs w-full text-left flex flex-col">
              <div className="card-header p-6">
                <h2 className="card-title text-2xl font-bold mb-2">Starter</h2>
                <div className="card-price text-4xl font-bold mb-2">$20 <span className="price-period text-base font-normal">/ USER / MONTH</span></div>
              </div>
              <div className="card-body p-6 flex-1">
                <InternalLink href={APP_LOGIN_URL} className="card-btn card-btn-secondary w-full mb-4 py-3 rounded bg-white/10 text-white font-bold text-lg uppercase text-center">Get Started</InternalLink>
                <ul className="features-list space-y-2">
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span><span className="ai-highlight text-purple-500 font-semibold">AI</span> Auto Summary</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span><span className="ai-highlight text-purple-500 font-semibold">AI</span> Task Writer</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span><span className="ai-highlight text-purple-500 font-semibold">AI</span> Writing Assistant</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Up to 10 members</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Unlimited boards</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Basic file uploads</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Email support</li>
                </ul>
              </div>
            </div>
            {/* Business Plan */}
            <div className="pricing-card pro-card bg-[#111] rounded-xl max-w-xs w-full text-left flex flex-col border-2 border-purple-500 scale-105 shadow-lg relative">
              <div className="popular-badge absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold">Most Popular</div>
              <div className="card-header p-6">
                <h2 className="card-title text-2xl font-bold mb-2">Business</h2>
                <div className="card-price text-4xl font-bold mb-2">$40 <span className="price-period text-base font-normal">/ USER / MONTH</span></div>
              </div>
              <div className="card-body p-6 flex-1">
                <InternalLink href={APP_LOGIN_URL} className="card-btn card-btn-gradient w-full mb-4 py-3 rounded bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold text-lg uppercase text-center">Get Started</InternalLink>
                <ul className="features-list space-y-2">
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Everything in Starter, plus:</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Unlimited <span className="ai-highlight text-purple-500 font-semibold">AI</span> features</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Unlimited members</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Advanced integrations</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Unlimited file uploads</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Priority support</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Advanced analytics</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Custom workflows</li>
                </ul>
              </div>
            </div>
            {/* Enterprise Plan */}
            <div className="pricing-card bg-[#111] rounded-xl max-w-xs w-full text-left flex flex-col">
              <div className="card-header p-6">
                <h2 className="card-title text-2xl font-bold mb-2">Enterprise</h2>
                <div className="card-price text-2xl font-bold mb-2">Let&apos;s talk</div>
              </div>
              <div className="card-body p-6 flex-1">
                <InternalLink openInNewTab={true} href="https://calendly.com/hypertask/30min" className="card-btn card-btn-secondary w-full mb-4 py-3 rounded bg-white/10 text-white font-bold text-lg uppercase text-center">Book a Demo</InternalLink>
                <ul className="features-list space-y-2">
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Everything in Business, plus:</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Single Sign-On (SSO)</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Advanced security controls</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Custom onboarding</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>SLA guarantees</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Dedicated support</li>
                  <li className="feature-item flex items-center"><span className="feature-icon mr-2">✓</span>Custom contracts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Comparison Table */}
      <section className="module-section py-16 bg-black text-white text-center">
        <div className="module-container max-w-5xl mx-auto px-4">
          <h2 className="module-headline text-4xl font-bold mb-4">Feature Comparison</h2>
          <p className="module-subheadline text-lg text-gray-300 mb-8">Faster Work. Fewer Clicks.</p>
          <div className="comparison-table-container w-full max-w-5xl mx-auto overflow-x-auto rounded bg-transparent border border-white/10 p-4">
            <table className="comparison-table w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4">Feature</th>
                  <th className="py-2 px-4">Free</th>
                  <th className="py-2 px-4">Starter</th>
                  <th className="py-2 px-4">Business</th>
                  <th className="py-2 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Team Members</td>
                  <td className="py-2 px-4">Up to 3</td>
                  <td className="py-2 px-4">Up to 10</td>
                  <td className="py-2 px-4">Unlimited</td>
                  <td className="py-2 px-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Boards</td>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">Unlimited</td>
                  <td className="py-2 px-4">Unlimited</td>
                  <td className="py-2 px-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">AI Auto Summary</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">AI Task Writer</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">AI Writing Assistant</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">File Uploads</td>
                  <td className="py-2 px-4">Basic</td>
                  <td className="py-2 px-4">Basic</td>
                  <td className="py-2 px-4">Unlimited</td>
                  <td className="py-2 px-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Integrations</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Analytics</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Custom Workflows</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Single Sign-On (SSO)</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">X</td>
                  <td className="check py-2 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Support</td>
                  <td className="py-2 px-4">Email</td>
                  <td className="py-2 px-4">Email</td>
                  <td className="py-2 px-4">Priority</td>
                  <td className="py-2 px-4">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
} 