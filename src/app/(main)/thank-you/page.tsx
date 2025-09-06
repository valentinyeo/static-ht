import Link from "next/link";
import { CTAButton } from '@/components/ui/cta-button';
import { APP_LOGIN_URL } from "@/lib/redirect-utils";

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function ThankYouPage() {
  return (
    <section className="thank-you-section flex-1 py-16 bg-black text-white flex items-center justify-center">
      <div className="gradient-container relative w-[94%] max-w-2xl bg-cover bg-center rounded-lg mx-auto flex flex-col items-center overflow-hidden pt-8 px-6 text-center" style={{ backgroundImage: "url('/gradient1.avif')" }}>
        <div className="thank-you-icon text-6xl mb-8 text-green-500">✅</div>
        <h1 className="thank-you-title text-4xl font-bold mb-6">Thank You!</h1>
        <p className="thank-you-subtitle text-xl uppercase mb-4">Your demo has been scheduled successfully</p>
        <p className="thank-you-message text-lg text-gray-200 mb-8 max-w-lg mx-auto">
          We&apos;re excited to show you how Hypertask can transform your project management workflow.<br />
          You should receive a calendar invitation shortly with all the meeting details.
        </p>
        <div className="cta-container flex flex-wrap gap-4 justify-center">
          <CTAButton href={APP_LOGIN_URL} variant="primary" size="lg">Get Started Now</CTAButton>
          <CTAButton href="/" variant="outline" size="lg">Back to Home</CTAButton>
        </div>
      </div>
    </section>
  );
} 