import React from 'react';

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: January 16, 2026</p>

      <div className="prose prose-blue max-w-none space-y-8 text-zinc-700">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. How We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for you to log in and access secure areas.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
            <li><strong>Functional Cookies:</strong> Remember your language or region choices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Managing Preferences</h2>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
        </section>
      </div>
    </div>
  );
}
