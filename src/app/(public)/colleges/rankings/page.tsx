import React from 'react';
import { Button } from "@/components/ui/button";

export default function RankingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Top Colleges Rankings 2024</h1>
      <p className="text-zinc-500 mb-8">Discover the best colleges in India based on placement, infrastructure, and ROI.</p>
      
      <div className="space-y-4">
        {/* Placeholder Content */}
        {[1, 2, 3, 4, 5].map((rank) => (
            <div key={rank} className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
                <div className="text-2xl font-bold text-zinc-300">#{rank}</div>
                <div>
                    <h3 className="font-bold text-lg">Institute of Technology {rank}</h3>
                    <p className="text-sm text-zinc-500">New Delhi, India</p>
                </div>
                <div className="ml-auto">
                    <Button variant="outline">View Profile</Button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
