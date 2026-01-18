'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { InteractiveCareerMap } from '@/components/career/InteractiveCareerMap';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {  Target, Award, Share2, Wallet, MapPin, ArrowRight,
  TrendingUp, IndianRupee, BookOpen
} from 'lucide-react';
import { CareerProfile } from '@/types/career';

interface CareerProfileClientProps {
  career: CareerProfile;
}

export default function CareerProfileClient({ career }: CareerProfileClientProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // ROI Calculator State
  const [eduCost, setEduCost] = useState(career?.financials.education_cost_india.min || 0);
  const [salary, setSalary] = useState(career?.financials.starting_salary.min || 0);

  if (!career) {
    // In a real app we'd handle notFound() better or await params
    return <div className="p-10 text-center">Career not found. <br/><Link href="/careers" className="text-blue-600 underline">Back to Directory</Link></div>;
  }

  const sections = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'path', label: 'Path to Become', icon: Target },
    { id: 'financials', label: 'Financials', icon: IndianRupee },
    { id: 'skills', label: 'Skills & Tools', icon: Award },
    { id: 'market', label: 'Job Market', icon: TrendingUp },
    { id: 'related', label: 'Related Careers', icon: Share2 },
  ];

  const calculateROI = () => {
     const monthlySavings = (salary * 0.7) / 12;
     if (monthlySavings <= 0) return '∞';
     return (eduCost / monthlySavings).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-20">
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-12 px-4 md:px-6">
         <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Link href="/careers" className="hover:text-blue-600">Careers</Link>
                    <span>/</span>
                    <span className="text-zinc-900 dark:text-zinc-100">{career.category}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-4">
                    {career.title}
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">{career.short_description}</p>
               </div>
               
               <div className="flex gap-3">
                  <Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                    Plan My Path
                  </Button>
               </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Starting Salary</div>
                  <div className="font-semibold text-lg">₹{(career.financials.starting_salary.min/100000).toFixed(1)}L - {(career.financials.starting_salary.max/100000).toFixed(1)}L</div>
               </div>
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Growth (5Y)</div>
                  <div className="font-semibold text-lg text-emerald-600">+{career.financials.five_year_growth_percentage}%</div>
               </div>
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Demand</div>
                  <div className="font-semibold text-lg">{career.job_market.demand_trend}</div>
               </div>
               <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Future Proof</div>
                  <div className="font-semibold text-lg text-blue-600">{career.job_market.future_proof_score}/100</div>
               </div>
            </div>
         </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex gap-8">
           {sections.map(section => (
             <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`
                   flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                   ${activeTab === section.id 
                     ? 'border-blue-600 text-blue-600' 
                     : 'border-transparent text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100'}
                `}
             >
               <section.icon className="w-4 h-4" />
               {section.label}
             </button>
           ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        
        {/* OVERVIEW */}
        {activeTab === 'overview' && (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader><CardTitle>What is it?</CardTitle></CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                       {career.overview.what_is}
                    </CardContent>
                 </Card>
                 <Card>
                    <CardHeader><CardTitle>Future Outlook (2030)</CardTitle></CardHeader>
                    <CardContent className="text-muted-foreground leading-relaxed">
                       {career.overview.future_outlook_2030}
                    </CardContent>
                 </Card>
              </div>

              <Card>
                 <CardHeader><CardTitle>Day in the Life</CardTitle></CardHeader>
                 <CardContent>
                    <ul className="space-y-3">
                       {career.overview.day_in_life.map((item, i) => (
                          <li key={i} className="flex gap-3 items-start">
                             <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold">{i+1}</div>
                             <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                          </li>
                       ))}
                    </ul>
                 </CardContent>
              </Card>

              <Card>
                 <CardHeader><CardTitle>Who is it for?</CardTitle></CardHeader>
                 <CardContent>
                    <ul className="space-y-2">
                       {career.overview.who_is_it_for.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-zinc-700 dark:text-zinc-300">
                             <span className="text-blue-500">•</span>
                             <span>{item}</span>
                          </li>
                       ))}
                    </ul>
                 </CardContent>
              </Card>
           </div>
        )}

        {/* PATH TO BECOME */}
        {activeTab === 'path' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <InteractiveCareerMap path={career.path_to_become} />
           </div>
        )}

        {/* FINANCIALS */}
        {activeTab === 'financials' && (
           <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                 <Card>
                    <CardHeader><CardTitle>Education Cost</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                       <div>
                          <p className="text-sm text-muted-foreground">In India</p>
                          <p className="text-2xl font-bold">₹{(career.financials.education_cost_india.min/100000).toFixed(1)}L - {(career.financials.education_cost_india.max/100000).toFixed(1)}L</p>
                       </div>
                       <div>
                          <p className="text-sm text-muted-foreground">Abroad</p>
                          <p className="text-2xl font-bold">${(career.financials.education_cost_abroad.min/1000).toFixed(0)}k - ${(career.financials.education_cost_abroad.max/1000).toFixed(0)}k</p>
                       </div>
                    </CardContent>
                 </Card>
                 <Card>
                    <CardHeader><CardTitle>Top Paying Companies</CardTitle></CardHeader>
                    <CardContent>
                       <div className="flex flex-wrap gap-2">
                          {career.financials.top_paying_companies.map(c => (
                             <Badge key={c} variant="secondary" className="text-sm py-1 px-3">{c}</Badge>
                          ))}
                       </div>
                    </CardContent>
                 </Card>
              </div>

              {/* ROI Calculator */}
              <Card className="bg-zinc-900 text-white border-zinc-700">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Wallet className="w-5 h-5 text-emerald-400" /> ROI Calculator</CardTitle>
                    <CardDescription className="text-zinc-400">Estimate how quickly you&apos;ll recover your education investment.</CardDescription>
                 </CardHeader>
                 <CardContent className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-zinc-400">Total Education Cost (₹)</label>
                       <Input 
                          type="number" 
                          value={eduCost} 
                          onChange={(e) => setEduCost(Number(e.target.value))}
                          className="bg-black border-zinc-700 text-lg"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-zinc-400">Starting Annual Salary (₹)</label>
                       <Input 
                          type="number" 
                          value={salary} 
                          onChange={(e) => setSalary(Number(e.target.value))}
                          className="bg-black border-zinc-700 text-lg"
                       />
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-800">
                       <div className="text-sm text-zinc-400 mb-1">Estimated Break-even time</div>
                       <div className="text-4xl font-bold text-emerald-400">
                          {calculateROI()} <span className="text-lg font-normal text-white">months</span>
                       </div>
                       <p className="text-[10px] text-zinc-500 mt-2">*Assuming 30% saving rate from salary post-tax</p>
                    </div>
                 </CardContent>
              </Card>
           </div>
        )}

        {/* SKILLS */}
        {activeTab === 'skills' && (
           <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card>
                 <CardHeader><CardTitle>Technical Skills</CardTitle></CardHeader>
                 <CardContent className="flex flex-wrap gap-2">
                    {career.skills.technical_skills.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                 </CardContent>
              </Card>
              <Card>
                 <CardHeader><CardTitle>Soft Skills</CardTitle></CardHeader>
                 <CardContent className="flex flex-wrap gap-2">
                    {career.skills.soft_skills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
                 </CardContent>
              </Card>
              <Card>
                 <CardHeader><CardTitle>Tools</CardTitle></CardHeader>
                 <CardContent className="flex flex-wrap gap-2">
                    {career.skills.tools_and_software.map(s => <Badge key={s} className="bg-zinc-800">{s}</Badge>)}
                 </CardContent>
              </Card>
              <Card>
                 <CardHeader><CardTitle>Certifications</CardTitle></CardHeader>
                 <CardContent className="flex flex-wrap gap-2">
                    {career.skills.certifications.map(s => <Badge key={s} variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300">{s}</Badge>)}
                 </CardContent>
              </Card>
           </div>
        )}
        
        {/* MARKET */}
        {activeTab === 'market' && (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="text-center py-6">
                     <div className="text-4xl font-bold mb-2 text-blue-600">{career.job_market.future_proof_score}</div>
                     <div className="text-sm text-muted-foreground">Future Proof Score</div>
                  </Card>
                  <Card className="text-center py-6">
                     <div className="text-4xl font-bold mb-2 text-emerald-600">{career.job_market.remote_opportunities_score}%</div>
                     <div className="text-sm text-muted-foreground">Remote Friendly</div>
                  </Card>
               </div>
               
               <Card>
                  <CardHeader><CardTitle>Top Hiring Cities</CardTitle></CardHeader>
                  <CardContent>
                     <div className="flex flex-wrap gap-4">
                        {career.job_market.top_hiring_cities.map(city => (
                           <div key={city} className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full">
                              <MapPin className="w-4 h-4 text-red-500" />
                              <span className="font-medium">{city}</span>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>
           </div>

        )}

        {/* RELATED CAREERS */}
        {activeTab === 'related' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="grid md:grid-cols-3 gap-6">
                  {career.related_careers.map(rel => (
                     <Card key={rel.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                           <Badge variant="outline" className="w-fit mb-2">{rel.type}</Badge>
                           <CardTitle className="text-lg">{rel.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground mb-4">
                              Explore this {rel.type.toLowerCase()} path in the {career.category} field.
                           </p>
                           {/* Note: In a real app we would link to the actual slug of the related career if available */}
                           <Button asChild variant="secondary" className="w-full">
                              <Link href="#">View Career <ArrowRight className="w-4 h-4 ml-2" /></Link>
                           </Button>
                        </CardContent>
                     </Card>
                  ))}
               </div>
           </div>
        )}

      </div>
    </div>
  );
}
