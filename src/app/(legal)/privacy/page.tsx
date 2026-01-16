import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: January 16, 2026</p>

      <div className="prose prose-blue max-w-none space-y-8 text-zinc-700">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, update your profile, take career assessments, or communicate with us. This may include your name, email address, academic history, and career interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. How We Use Your Data</h2>
          <p>
            We use your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide personalized career recommendations and college matches.</li>
            <li>Analyze your assessment results to generate psychometric reports.</li>
            <li>Connect you with relevant mentors and communities.</li>
            <li>Improve our AI algorithms (anonymized data only).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@careerpath.ai" className="text-blue-600 hover:underline">privacy@careerpath.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
