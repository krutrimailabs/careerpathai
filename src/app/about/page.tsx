import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Target, Trophy, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-16 px-4 md:px-6">
       
       {/* Hero / Vision */}
       <section className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold">
             Our Vision
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
             To become India&apos;s most trusted AI-powered career guidance platform.
          </h1>
          <p className="text-xl text-muted-foreground">
             Empowering every student with personalized career pathways, bridging the gap between aspirations and opportunities.
          </p>
       </section>

       {/* The Crisis Stats */}
       <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">The Indian Career Guidance Crisis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <StatCard 
                icon={AlertCircle} 
                title="93%" 
                desc="Students know only 7 career paths despite 12,000+ options." 
                color="text-red-500" 
             />
             <StatCard 
                icon={TrendingUp} 
                title="47%" 
                desc="Graduates are unemployable due to misalignment with industry needs." 
                color="text-orange-500" 
             />
             <StatCard 
                icon={Target} 
                title="₹15k Cr" 
                desc="Spent annually on wrong career choices by Indian families." 
                color="text-yellow-500" 
             />
             <StatCard 
                icon={Trophy} 
                title="1:3000" 
                desc="Counselor-to-student ratio in India (vs. 1:250 global standard)." 
                color="text-blue-500" 
             />
          </div>
       </section>

       {/* Mission */}
       <section className="bg-white dark:bg-zinc-900 py-16 rounded-3xl border border-zinc-100 dark:border-zinc-800 max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300 max-w-4xl mx-auto leading-relaxed">
             &quot;To democratize career guidance by providing data-driven insights, personalized roadmaps, and expert mentorship to <span className="text-blue-600">50 million Indian students</span> by 2030.&quot;
          </p>
       </section>

       {/* Solution Overview */}
       <section className="max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Comprehensive Solution</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
             <SolutionItem title="Career Discovery" desc="500+ career paths with detailed roadmaps and salary insights." />
             <SolutionItem title="AI Assessment" desc="Psychometric + AI-based career matching with 98% accuracy." />
             <SolutionItem title="College Ecosystem" desc="5000+ colleges with advanced comparison and prediction tools." />
             <SolutionItem title="Verified Mentors" desc="1000+ industry experts available for 1:1 guidance." />
             <SolutionItem title="Parent Portal" desc="Dedicated dashboard for ROI analysis and safety insights." />
             <SolutionItem title="Skill Tracking" desc="Real-time skill gap analysis and upskilling recommendations." />
          </div>
       </section>

    </div>
  );
}

function StatCard({ icon: Icon, title, desc, color }: { icon: React.ElementType, title: string, desc: string, color: string }) {
   return (
      <Card className="text-center h-full hover:shadow-lg transition-shadow">
         <CardContent className="pt-6 flex flex-col items-center">
            <Icon className={`w-10 h-10 mb-4 ${color}`} />
            <div className={`text-4xl font-bold mb-2 ${color}`}>{title}</div>
            <p className="text-muted-foreground">{desc}</p>
         </CardContent>
      </Card>
   )
}

function SolutionItem({ title, desc }: { title: string, desc: string }) {
   return (
      <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
         <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
         <p className="text-blue-800/70 dark:text-blue-200/70">{desc}</p>
      </div>
   )
}
