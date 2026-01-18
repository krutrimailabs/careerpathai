'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowRight, Brain } from 'lucide-react';
import Link from 'next/link';

interface PersonalityDNAWidgetProps {
  assessmentData: {
    primary_trait?: string;
    secondary_trait?: string;
    completed_at: string;
    scores?: Record<string, number>;
  } | null;
}

export function PersonalityDNAWidget({ assessmentData }: PersonalityDNAWidgetProps) {
  if (!assessmentData) {
    // Empty state
    return (
        <Card className="shadow-sm border-zinc-200 hover:border-blue-300 transition-colors cursor-pointer group h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <h4 className="font-bold text-lg text-[#002147]">Discover Your DNA</h4>
                    <p className="text-sm text-zinc-500">Take the assessment to unlock career matches.</p>
                </div>
                <Link href="/assessment" className="w-full">
                    <Button className="w-full bg-[#002147] hover:bg-[#003366]">
                        Start Assessment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
  }

  const { primary_trait, secondary_trait, completed_at } = assessmentData;
  const date = new Date(completed_at).toLocaleDateString();

  return (
    <Card className="shadow-sm border-zinc-200 hover:border-blue-300 transition-colors group cursor-pointer h-full">
        <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs font-bold text-zinc-400">Completed {date}</span>
            </div>
            <h4 className="font-bold text-lg text-[#002147] mb-1">
                {primary_trait} {secondary_trait ? `- ${secondary_trait}` : ''}
            </h4>
            <p className="text-sm text-zinc-500 mb-4">Your personalized career roadmap matches these traits.</p>
            <Link href="/assessment/results">
                <Button variant="outline" className="w-full gap-2 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200">
                    View Full Report <ArrowRight className="w-4 h-4" />
                </Button>
            </Link>
        </CardContent>
    </Card>
  );
}
