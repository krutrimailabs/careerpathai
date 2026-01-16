import React from 'react';

export default function CommunityGuidelinesPage() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-purple-700">Community Guidelines</h1>
        <p className="text-xl text-zinc-600 mb-12">
            Let&apos;s keep CareerPath.AI a safe, helpful, and inspiring place for every student.
        </p>
  
        <div className="prose prose-purple max-w-none space-y-12 text-zinc-700">
          <section className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-4">✅ Do&apos;s</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Be Supportive:</strong> Help others with their questions. We were all beginners once.</li>
              <li><strong>Share Knowledge:</strong> If you found a great resource for studying, share it!</li>
              <li><strong>Report Issues:</strong> If you see spam or harassment, use the report button.</li>
              <li><strong>Stay on Topic:</strong> Keep discussions relevant to the forum category (e.g., JEE queries in the JEE section).</li>
            </ul>
          </section>
  
          <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-800 mb-4">❌ Dont&aposs</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>No Cheating:</strong> Do not ask for or share answers during live exams. Zero tolerance policy.</li>
              <li><strong>No Hate Speech:</strong> Discrimination of any kind is banned.</li>
              <li><strong>No Spam:</strong> Don&apos;t promot unrelated products or services.</li>
              <li><strong>Privacy Violations:</strong> Do not post anyone&apos;s private contact info (doxing).</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Moderation Policy</h2>
            <p>
              Our moderators have the final say in interpreting these guidelines. Violations may result in content removal, temporary suspension, or permanent account bans.
            </p>
          </section>
        </div>
      </div>
    );
  }
