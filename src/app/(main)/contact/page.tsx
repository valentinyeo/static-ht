import Link from "next/link";

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function ContactPage() {
  return (
    <section className="contact-section py-16 bg-black text-white flex-1">
      <div className="contact-container max-w-2xl mx-auto px-4">
        <div className="contact-header text-center mb-12">
          <h1 className="contact-title text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent pb-2">Contact Us</h1>
        </div>
        <div className="contact-content bg-[#111] rounded-xl p-10 mb-12 shadow-xl text-center">
          <div className="contact-email text-2xl font-semibold mb-6 text-white">
            <a href="mailto:help@hypertask.ai" className="text-purple-400 hover:text-blue-400 transition">help@hypertask.ai</a>
          </div>
          <p className="mb-4">For support, partnership, or press inquiries, please email us or use our <Link href="/" className="underline">homepage</Link> for more information.</p>
        </div>
      </div>
    </section>
  );
} 