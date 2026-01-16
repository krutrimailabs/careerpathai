'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROICalculator } from './ROICalculator';
import { CheckCircle2 } from 'lucide-react';

export function CollegeSidebar() {
  return (
    <div className="space-y-6">
        {/* Lead Form */}
        <Card className="border-t-4 border-t-[#FF9900] shadow-xl sticky top-24">
            <CardHeader className="bg-blue-50/50 pb-4">
                <CardTitle className="text-lg text-[#002147]">Check Your Chances</CardTitle>
                <p className="text-xs text-zinc-500">Get free counselling & admission guidance.</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Name" />
                    <Input placeholder="+91 Mobile" />
                </div>
                <Input placeholder="Email Address" />
                <Input placeholder="Current City" />
                <Input placeholder="Course Interested In" />
                
                <Button className="w-full bg-[#002147] hover:bg-blue-900 text-white font-bold py-6">
                    Check Eligibility Now
                </Button>
                
                <div className="flex items-center gap-2 justify-center text-[10px] text-zinc-400">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> 100% Privacy Guaranteed
                </div>
            </CardContent>
        </Card>

        {/* ROI Calculator Widget */}
        <ROICalculator fees={800000} avgPackage={12} />

        {/* Brochure Widget */}
        <div className="bg-zinc-900 text-white rounded-xl p-5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF9900] blur-2xl opacity-20 rounded-full"></div>
             <h3 className="font-bold text-lg mb-2 relative z-10">Download Brochure</h3>
             <p className="text-xs text-zinc-400 mb-4 relative z-10">Get detailed info on Fees, Placements & Cutoff.</p>
             <Button variant="secondary" className="w-full relative z-10 font-bold text-zinc-900">
                 Download Now
             </Button>
        </div>
    </div>
  );
}
