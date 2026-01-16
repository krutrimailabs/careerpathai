import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BrainCircuit, Target, Lightbulb, Compass, ArrowRight } from 'lucide-react';

export default function AssessmentPage() {
  const steps = [
    { title: 'Interest Assessment', desc: "Discover what you love doing based on Holland's RIASEC model.", icon: Lightbulb, time: '10 min' },
    { title: 'Aptitude Evaluation', desc: "Test your logical, numerical, and verbal reasoning capabilities.", icon: BrainCircuit, time: '45 min' },
    { title: 'Personality Profiling', desc: "Understand your work style and traits via Big Five model.", icon: Target, time: '20 min' },
    { title: 'Value Alignment', desc: "Prioritize what matters: Money, Work-life balance, or Impact.", icon: Compass, time: '15 min' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-12 px-4 md:px-6">
       <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Career Assessment</h1>
          <p className="text-xl text-muted-foreground">
             Our multi-dimensional engine analyzes your interests, aptitude, and personality to recommend your perfect career match.
          </p>
          <div className="mt-8">
             <Button size="lg" className="h-12 px-8 text-lg">Start Full Assessment</Button>
          </div>
       </div>

       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
             <Card key={index} className="relative overflow-hidden group hover:border-blue-500 transition-colors">
                <CardHeader>
                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6" />
                   </div>
                   <CardTitle>{step.title}</CardTitle>
                   <CardDescription>{step.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-muted-foreground">{step.time}</span>
                      <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer">
                         Start <ArrowRight className="w-4 h-4" />
                      </span>
                   </div>
                </CardContent>
             </Card>
          ))}
       </div>
    </div>
  );
}
