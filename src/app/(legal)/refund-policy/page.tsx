import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <p className="text-zinc-500 mb-8">Last updated: January 16, 2026</p>

      <div className="prose prose-blue max-w-none space-y-8 text-zinc-700">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Overview</h2>
          <p>
            At CareerPath.AI, we strive to provide the best career guidance tools. If you are not satisfied with your purchase, we are here to help.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Eligibility for Refunds</h2>
          <p>
            We offer a full money-back guarantee for all purchases made on our website under the following conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The request is made within <strong>7 days</strong> of the purchase.</li>
            <li>You have not completed more than 50% of any premium course or assessment series.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Non-Refundable Items</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>One-on-one mentorship sessions that have already taken place.</li>
            <li>Downloadable digital resources (PDFs) once downloaded.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. How to Request</h2>
          <p>
            To initiate a refund, please contact our support team at <a href="mailto:support@careerpath.ai" className="text-blue-600 hover:underline">support@careerpath.ai</a> with your order ID and the reason for the refund.
          </p>
        </section>
      </div>
    </div>
  );
}
