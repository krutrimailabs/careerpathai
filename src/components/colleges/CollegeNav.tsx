'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Briefcase, Building2, Info, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CollegeNav() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'courses', label: 'Courses & Fees', icon: BookOpen },
    { id: 'admission', label: 'Admission 2024', icon: GraduationCap },
    { id: 'placement', label: 'Placements', icon: Briefcase },
    { id: 'campus', label: 'Campus', icon: Building2 },
    { id: 'reviews', label: 'Reviews', icon: Star },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex overflow-x-auto no-scrollbar">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={cn(
                            "flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap",
                            activeSection === tab.id 
                                ? "border-[#FF9900] text-[#002147] bg-blue-50/50" 
                                : "border-transparent text-zinc-500 hover:text-[#002147] hover:bg-zinc-50"
                        )}
                    >
                        {/* Icons hidden on mobile to save space, visible on MD */}
                        <tab.icon className="w-4 h-4 hidden md:block opacity-70" />
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    </div>
  );
}
