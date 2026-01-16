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
      <HeroSection />
      <StatsSection />
      <StreamSelector />
      <AITrustSection />
      <ScholarshipTeaser />
      <MarketPulse />
      <JourneyRoadmap />
      <VideoGallery />
      <ROIComparison />
      <SkillGapRoadmap />
      <MentorSpotlight />
      <ParentPeace />
      <DiscoveryTabs />
      <Testimonials />
      <LeadForm />
      <AIChatbot />
    </div>
  );
}
