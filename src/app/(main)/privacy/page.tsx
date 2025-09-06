import Link from "next/link";

// Static generation configuration for maximum caching
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function PrivacyPage() {
  return (
    <section className="privacy-section py-16 bg-black text-white">
      <div className="privacy-container max-w-2xl mx-auto px-4">
        <div className="privacy-header text-center mb-12">
          <h1 className="privacy-title text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent pb-2">Hypertask Lab Ltd. Privacy Policy</h1>
        </div>
        <div className="privacy-content bg-[#111] rounded-xl p-10 mb-12 shadow-xl">
          <p className="mb-4">Your privacy is important to us. It is Hypertask Lab Ltd.&apos;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <Link href="/" className="underline">https://hypertask.ai</Link>, and other sites we own and operate.</p>
          <p className="mb-4">Personal information is any information about you which can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and even information about how you use a website or online service.</p>
          <p className="mb-4">In the event our site contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our site.</p>
          <p className="mb-4">This policy is effective as of 25 August 2023</p>
          <p className="mb-4">Last updated: 25 August 2023</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
          <p className="mb-4">Information we collect falls into one of two categories: &quot;voluntarily provided&quot; information and &quot;automatically collected&quot; information.</p>
          <p className="mb-4">&quot;Voluntarily provided&quot; information refers to any information you knowingly and actively provide us when using or participating in any of our services and promotions.</p>
          <p className="mb-4">&quot;Automatically collected&quot; information refers to any information automatically sent by your devices in the course of accessing our products and services.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Log Data</h2>
          <p className="mb-4">When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device&apos;s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details about your visit.</p>
          <p className="mb-4">Additionally, if you encounter certain errors while using the site, we may automatically collect data about the error and the circumstances surrounding its occurrence. This data may include technical details about your device, what you were trying to do when the error happened, and other technical information relating to the problem. You may or may not receive notice of such errors, even in the moment they occur, that they have occurred, or what the nature of the error is.</p>
          <p className="mb-4">Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Device Data</h2>
          <p className="mb-4">When you visit our website or interact with our services, we may automatically collect data about your device, such as:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Device type</li>
            <li>Operating system</li>
            <li>Unique device identifiers</li>
            <li>Device settings</li>
            <li>Geo-location data</li>
          </ul>
          <p className="mb-4">Data we collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Personal Information</h2>
          <p className="mb-4">We may ask for personal information — for example, when you subscribe to our newsletter or when you contact us — which may include one or more of the following:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Name</li>
            <li>Email</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Transaction Data</h2>
          <p className="mb-4">Transaction data refers to data that accumulates over the normal course of operation on our platform. This may include transaction records, stored files, user profiles, analytics data and other metrics, as well as other types of information, created or generated, as users interact with our services.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Legitimate Reasons for Processing Your Personal Information</h2>
          <p className="mb-4">We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Collection and Use of Information</h2>
          <p className="mb-4">We may collect personal information from you when you do any of the following on our website:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Register for an account</li>
            <li>Purchase a subscription</li>
            <li>Sign up to receive updates from us via email or social media channels</li>
            <li>Use a mobile device or web browser to access our content</li>
            <li>Contact us via email, social media, or on any similar technologies</li>
            <li>When you mention us on social media</li>
          </ul>
          <p className="mb-4">We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>to provide you with our platform&apos;s core features and services</li>
            <li>to enable you to customise or personalise your experience of our website</li>
            <li>for analytics, market research, and business development, including to operate and improve our website, associated applications, and associated social media platforms</li>
            <li>to enable you to access and use our website, associated applications, and associated social media platforms</li>
            <li>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
          </ul>
          <p className="mb-4">We may combine voluntarily provided and automatically collected personal information with general information or research data we receive from other trusted sources. For example, If you provide us with your location, we may combine this with general information about currency and language to provide you with an enhanced experience of our site and service.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Security of Your Personal Information</h2>
          <p className="mb-4">When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
          <p className="mb-4">Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure and no one can guarantee absolute data security.</p>
          <p className="mb-4">You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. For example, ensuring any passwords associated with accessing your personal information and accounts are secure and confidential.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">How Long We Keep Your Personal Information</h2>
          <p className="mb-4">We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. For example, if you have provided us with personal information as part of creating an account with us, we may retain this information for the duration your account exists on our system. If your personal information is no longer required for this purpose, we will delete it or make it anonymous by removing all details that identify you.</p>
          <p className="mb-4">However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Children&apos;s Privacy</h2>
          <p className="mb-4">We do not aim any of our products or services directly at children under the age of 13 and we do not knowingly collect personal information about children under 13.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Disclosure of Personal Information to Third Parties</h2>
          <p className="mb-4">We may disclose personal information to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>a parent, subsidiary or affiliate of our company</li>
            <li>third-party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing providers, professional advisors, and payment systems operators</li>
            <li>our employees, contractors, and/or related entities</li>
            <li>our existing or potential agents or business partners</li>
            <li>credit reporting agencies, courts, tribunals, and regulatory authorities, in the event you fail to pay for goods or services we have provided to you</li>
            <li>courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights</li>
            <li>third parties, including agents or sub-contractors who assist us in providing information, products, services, or direct marketing to you</li>
            <li>third parties to collect and process data</li>
            <li>an entity that buys, or to which we transfer all or substantially all of our assets and business</li>
          </ul>
          <p className="mb-4">Third parties we currently use include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Google Analytics</li>
            <li>Gmail</li>
            <li>Stripe</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights and Controlling Your Personal Information</h2>
          <p className="mb-4">Your choice: By providing personal information to us, you understand we will collect, hold, use, and disclose your personal information in accordance with this privacy policy. You do not have to provide personal information to us, however, if you do not, it may affect your use of our website or the products and/or services offered on or through it.</p>
          <p className="mb-4">Information from third parties: If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person&apos;s consent to provide the personal information to us.</p>
          <p className="mb-4">Marketing permission: If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below.</p>
          <p className="mb-4">Access: You may request details of the personal information that we hold about you.</p>
          <p className="mb-4">Correction: If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</p>
          <p className="mb-4">Non-discrimination: We will not discriminate against you for exercising any of your rights over your personal information. Unless your personal information is required to provide you with a particular service or offer (for example processing transaction data), we will not deny you goods or services and/or charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties, or provide you with a different level or quality of goods or services.</p>
          <p className="mb-4">Notification of data breaches: We will comply with laws applicable to us in respect of any data breach.</p>
          <p className="mb-4">Complaints: If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</p>
          <p className="mb-4">Unsubscribe: To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in the communication. We may need to request specific information from you to help us confirm your identity.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Business Transfers</h2>
          <p className="mb-4">If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data, including your personal information, among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the extent permitted by applicable law, continue to use your personal information according to this policy, which they will be required to assume as it is the basis for any ownership or use rights we have over such information.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Limits of Our Policy</h2>
          <p className="mb-4">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
          <p className="mb-4">At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p>
          <p className="mb-4">If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.</p>
          <p className="mb-4">If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
          <p className="mb-4">For any questions or concerns regarding your privacy, you may contact us using the following details:</p>
          <p className="mb-4">Hypertask Lab Ltd.<br />Valentin Yeo<br /><Link href="/contact" className="underline">Contact Form</Link><br />35 Buckingham Road<br />E182NH London</p>
        </div>
      </div>
    </section>
  );
} 