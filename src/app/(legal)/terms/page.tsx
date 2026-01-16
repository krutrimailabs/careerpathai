import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-zinc-500 mb-8">Last updated: January 16, 2026</p>

      <div className="prose prose-blue max-w-none space-y-8 text-zinc-700">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using CareerPath.AI, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. User Accounts</h2>
          <p>
            You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Content & Conduct</h2>
          <p>
            You retain all rights to the content you post on our Community Forums. However, you grant us a license to use, modify, and display that content in connection with the service.
          </p>
          <p>
            Strictly prohibited content includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal exam materials or leaked papers.</li>
            <li>Harassment, hate speech, or bullying.</li>
            <li>Spam or unauthorized advertising.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>
      </div>
    </div>
  );
}
