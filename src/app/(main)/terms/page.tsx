import Link from "next/link";

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function TermsPage() {
  return (
    <section className="terms-section py-16 bg-black text-white">
      <div className="terms-container max-w-2xl mx-auto px-4">
        <div className="terms-header text-center mb-12">
          <h1 className="terms-title text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent pb-2">Terms of Service</h1>
        </div>
        <div className="terms-content bg-[#111] rounded-xl p-10 mb-12 shadow-xl">
          <p className="mb-4">These Terms of Service govern your use of the website located at <Link href="/" className="underline">https://hypertask.ai</Link> and any related services provided by Hypertask Lab Ltd.</p>
          <p className="mb-4">By accessing <Link href="/" className="underline">https://hypertask.ai</Link>, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Hypertask Lab Ltd.</p>
          <p className="mb-4">We, Hypertask Lab Ltd., reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication.</p>
          <p className="mb-4">These Terms of Service were last updated on 25 August 2023.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Limitations of Use</h2>
          <p className="mb-4">By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;</li>
            <li>remove any copyright or other proprietary notations from any materials and software on this website;</li>
            <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server;</li>
            <li>knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Hypertask Lab Ltd. provides;</li>
            <li>use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;</li>
            <li>use this website or its associated services in violation of any applicable laws or regulations;</li>
            <li>use this website in conjunction with sending unauthorised advertising or spam;</li>
            <li>harvest, collect, or gather user data without the user&apos;s consent; or</li>
            <li>use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
          <p className="mb-4">The intellectual property in the materials contained in this website are owned by or licensed to Hypertask Lab Ltd. and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use.</p>
          <p className="mb-4">This constitutes the grant of a licence, not a transfer of title. This licence shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by Hypertask Lab Ltd. at any time.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">User-Generated Content</h2>
          <p className="mb-4">You retain your intellectual property ownership rights over content you submit to us for publication on our website. We will never claim ownership of your content, but we do require a licence from you in order to use it.</p>
          <p className="mb-4">When you use our website or its associated services to post, upload, share, or otherwise transmit content covered by intellectual property rights, you grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide licence to use, distribute, modify, run, copy, publicly display, translate, or otherwise create derivative works of your content in a manner that is consistent with your privacy preferences and our Privacy Policy.</p>
          <p className="mb-4">The licence you grant us can be terminated at any time by deleting your content or account. However, to the extent that we (or our partners) have used your content in connection with commercial or sponsored content, the licence will continue until the relevant commercial or post has been discontinued by us.</p>
          <p className="mb-4">You give us permission to use your username and other identifying information associated with your account in a manner that is consistent with your privacy preferences and our Privacy Policy.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Liability</h2>
          <p className="mb-4">Our website and the materials on our website are provided on an &apos;as is&apos; basis. To the extent permitted by law, Hypertask Lab Ltd. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.</p>
          <p className="mb-4">In no event shall Hypertask Lab Ltd. or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Hypertask Lab Ltd. or an authorised representative has been notified, orally or in writing, of the possibility of such damage.</p>
          <p className="mb-4">In the context of this agreement, &quot;consequential loss&quot; includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity or otherwise.</p>
          <p className="mb-4">Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Accuracy of Materials</h2>
          <p className="mb-4">The materials appearing on our website are not comprehensive and are for general information purposes only. Hypertask Lab Ltd. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Links</h2>
          <p className="mb-4">Hypertask Lab Ltd. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval or control by Hypertask Lab Ltd. of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Right to Terminate</h2>
          <p className="mb-4">We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Severance</h2>
          <p className="mb-4">Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Governing Law</h2>
          <p className="mb-4">These Terms of Service are governed by and construed in accordance with the laws of London. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
    </section>
  );
} 