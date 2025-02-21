'use client';
import Banner from '@/components/Banner';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <><Banner/>
    <div className="bg-[#fcfaf8] text-[#15130f] p-4 sm:p-8 lg:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Pronest</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Pronest (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By using Pronest, you agree to the terms outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-1">2.1 Personal Information</h3>
        <ul className="list-disc ml-5">
          <li>Name, email address, phone number</li>
          <li>Payment details and billing information</li>
          <li>User account credentials and profile information</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1">2.2 Non-Personal Information</h3>
        <ul className="list-disc ml-5">
          <li>Device details, operating system, and browser type</li>
          <li>Usage data, such as interaction with our platform and features accessed</li>
          <li>IP address, location data, and log files</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1">2.3 Cookies and Tracking Technologies</h3>
        <p>
          We use cookies, beacons, and similar tracking tools to enhance user experience, measure performance, and deliver relevant advertisements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc ml-5">
          <li>Provide, maintain, and improve our services</li>
          <li>Process payments and complete transactions</li>
          <li>Personalize and enhance the user experience</li>
          <li>Respond to customer inquiries and provide support</li>
          <li>Prevent fraud, abuse, and ensure security</li>
          <li>Comply with legal obligations and enforce terms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Information Sharing and Disclosure</h2>
        <p>We do not sell personal data. However, we may share information with:</p>
        <h3 className="text-xl font-semibold mt-4 mb-1">4.1 Service Providers</h3>
        <p>
          We collaborate with third-party vendors to provide hosting, payment processing, analytics, and other services essential to our operations.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">4.2 Legal and Regulatory Authorities</h3>
        <p>
          If required by law, we may disclose your information to comply with legal obligations, protect our rights, or respond to government requests.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-1">4.3 Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement robust security measures, including encryption, access controls, and monitoring systems, to safeguard personal data. However, no system is entirely secure, and users should take precautions when sharing personal information online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul className="list-disc ml-5">
          <li>Access, modify, or delete personal data</li>
          <li>Object to data processing or request restriction</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact us at <a href="mailto:Privacy@pronest.co.in" className="text-[#f3b75e] underline">Privacy@pronest.co.in</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Cookies and Tracking Technologies</h2>
        <p>
          Pronest uses cookies to collect and store data. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Third-Party Links and Services</h2>
        <p>
          Our platform may contain links to third-party websites and services. We are not responsible for their privacy practices, and users should review their policies separately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Data Retention</h2>
        <p>
          We retain personal data as long as necessary to fulfill service obligations and comply with legal requirements. Upon user request, data may be deleted in accordance with applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted with a revised effective date, and continued use of Pronest after updates constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Pronest<br /><a href="mailto:Privacy@pronest.co.in" className="text-[#f3b75e] underline">Privacy@pronest.co.in</a></p>
      </section>
    </div>
    </>
  );
};

