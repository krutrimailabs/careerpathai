'use client';

import React from 'react';
import { ExamTicker } from "@/components/home/ExamTicker";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { StreamSelector } from "@/components/home/StreamSelector";
import { AITrustSection } from "@/components/home/AITrustSection";
import { ScholarshipTeaser } from "@/components/home/ScholarshipTeaser";
import { MarketPulse } from "@/components/home/MarketPulse";
import { JourneyRoadmap } from "@/components/home/JourneyRoadmap";
import { VideoGallery } from "@/components/home/VideoGallery";
import { ROIComparison } from "@/components/home/ROIComparison";
import { SkillGapRoadmap } from "@/components/home/SkillGapRoadmap";
import { MentorSpotlight } from "@/components/home/MentorSpotlight";
import { ParentPeace } from "@/components/home/ParentPeace";
import { DiscoveryTabs } from "@/components/home/DiscoveryTabs";
import { Testimonials } from "@/components/home/Testimonials";
import { LeadForm } from "@/components/home/LeadForm";
import { AIChatbot } from "@/components/home/AIChatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black font-sans text-zinc-900 dark:text-zinc-50 relative">
      <ExamTicker />
      
      {/* ZONE 1: The Promise */}
      <HeroSection />
      <StatsSection />
      <AITrustSection />

      {/* ZONE 2: Define Your Path */}
      <div className="bg-zinc-50 dark:bg-zinc-900/20 pb-20">
          <div className="container mx-auto px-4 md:px-6 py-16 text-center">
             <h2 className="text-4xl font-bold mb-4">Confusion Ends Here. Data Begins.</h2>
             <p className="text-zinc-500 text-xl max-w-2xl mx-auto">Most students follow the herd. You follow a plan.</p>
          </div>
          <JourneyRoadmap />
          <StreamSelector />
          <VideoGallery />
      </div>

      {/* ZONE 3: The Data Engine */}
      <div className="bg-white dark:bg-black py-20">
         <div className="container mx-auto px-4 md:px-6 text-center mb-16">
             <h2 className="text-4xl font-bold mb-4">Make Decisions Based on ROI, Not Hype.</h2>
         </div>
         <div className="space-y-12">
            <SkillGapRoadmap />
            <ROIComparison />
            <ScholarshipTeaser />
         </div>
         <MarketPulse />
      </div>

      {/* ZONE 4: The Network */}
      <div className="bg-slate-50 dark:bg-slate-900/20 py-20">
          <MentorSpotlight />
          <DiscoveryTabs />
          <ParentPeace />
      </div>

      {/* ZONE 5: Closing */}
      <Testimonials />
      <LeadForm />
      
      <AIChatbot />
    </div>
  );
}
