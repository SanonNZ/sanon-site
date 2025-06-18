import Link from "next/link"
import { Button } from "@/components/ui/button"

// Arcova color palette
const arcovaColors = {
  deepNavy: "#16253B",
  tealDark: "#00a4b4",
}

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: June 18, 2025</p>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          At SAnon, we recognize how deeply personal and sensitive it can be to seek support for the effects of another person's sex addiction. Your privacy matters to us. This Privacy Policy explains how we handle your information with care, respect, and transparency.
        </p>

        <p className="mb-6">
          This policy applies to your use of our website (the "Website"), and to any information you may share with us through forms, emails, phone calls, or contributions. Our intention is to help you feel safe and supported in your engagement with SAnon.
        </p>

        <p className="mb-8">
          By using the Website, you acknowledge that you have read and understood our privacy practices. If you have any questions or concerns, we encourage you to reach out — we are always here to listen and help.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect minimal information and only what is necessary to support your interaction with SAnon. This may include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Contact information (such as your name, email address, or phone number) if you choose to provide it via forms or emails.</li>
          <li>Contribution information if you make a donation or offer support.</li>
          <li>Technical information such as IP address, browser type, or general website usage data (collected automatically through cookies or similar technologies) to help us maintain and improve the Website.</li>
        </ul>
        <p className="mb-8">
          We do not knowingly collect personal information from individuals under the age of 18.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information solely to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Respond to your inquiries and requests.</li>
          <li>Process any contributions or donations.</li>
          <li>Maintain and improve the Website.</li>
          <li>Communicate important updates, if you have opted in to receive them.</li>
        </ul>
        <p className="mb-8">
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Protect Your Information</h2>
        <p className="mb-8">
          We take reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure. While no system can guarantee absolute security, we are committed to protecting your privacy to the best of our ability.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Anonymity and Confidentiality</h2>
        <p className="mb-8">
          We deeply respect the principle of anonymity that is central to our fellowship. Any information you choose to share with us is handled with the utmost care and confidentiality.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies and Website Analytics</h2>
        <p className="mb-8">
          We may use cookies or similar technologies to understand how visitors interact with the Website, so we can continue to improve. You can adjust your browser settings to manage or disable cookies if you prefer.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Choices</h2>
        <p className="mb-8">
          You are not required to provide any personal information to use the Website. If you do share information with us and later wish to update, correct, or delete it, you may contact us directly.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent changes. Continued use of the Website indicates your acceptance of any changes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-8">
          If you have any questions, concerns, or requests regarding your privacy, please feel free to contact us at:
        </p>
        <p className="mb-8">
          <a href="mailto:nzsanon@gmail.com" className="text-sanon-purpleDark hover:text-sanon-purpleDark/80">
            nzsanon@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
} 