import Link from 'next/link';

const Footer = () => {
    return(
        <footer className="footer bg-[#111] py-8 mt-8 text-center">
          <div className="footer-content max-w-5xl mx-auto flex flex-col items-center">
            <div className="footer-links flex flex-wrap gap-8 mb-4 justify-center">
              <Link href="/" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Home</Link>
              <Link href="/pricing" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Pricing</Link>
              <Link href="/privacy" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Privacy</Link>
              <Link href="/contact" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Contact</Link>
              <Link href="/terms" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Terms</Link>
              <a href="https://help.hypertask.ai/" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Help Center</a>
              <a href="https://blog.hypertask.ai" className="footer-link text-white no-underline text-sm opacity-80 hover:opacity-100">Blog</a>
            </div>
            <div className="footer-copyright text-xs opacity-60">© 2025 Hypertask Lab Ltd.</div>
          </div>
        </footer>
    )
  
}

export default Footer