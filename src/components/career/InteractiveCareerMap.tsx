'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CareerNode {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  details: string[];
}

interface InteractiveCareerMapProps {
  path: {
    stream_selection_10th: string[];
    subject_combination_12th: string[];
    entrance_exams: string[];
    degree_requirements: string[];
  };
}

export function InteractiveCareerMap({ path }: InteractiveCareerMapProps) {
  const roadmap: CareerNode[] = [
    {
      title: 'Class 10th',
      description: 'Stream Selection',
      icon: BookOpen,
      color: 'bg-blue-500',
      details: path.stream_selection_10th,
    },
    {
      title: 'Class 12th',
      description: 'Subject Focus',
      icon: BookOpen,
      color: 'bg-indigo-500',
      details: path.subject_combination_12th,
    },
    {
      title: 'Entrance Exams',
      description: 'Gateway to College',
      icon: CheckCircle2,
      color: 'bg-purple-500',
      details: path.entrance_exams,
    },
    {
      title: 'Undergraduation',
      description: 'Degree Requirements',
      icon: GraduationCap,
      color: 'bg-pink-500',
      details: path.degree_requirements,
    },
    {
      title: 'First Job',
      description: 'Career Launch',
      icon: Briefcase,
      color: 'bg-rose-500',
      details: ['Entry Level Positions', 'Internships'],
    },
  ];

  return (
    <div className="w-full py-10 px-4">
      <h3 className="text-2xl font-bold mb-8 text-center text-zinc-900 dark:text-zinc-100">Your Roadmap to Success</h3>
      
      <div className="relative max-w-4xl mx-auto">
         {/* Vertical connector line for mobile, horizontal for desktop could be complex, sticking to responsive vertical for now or simple horizontal grid */}
        <div className="hidden md:block absolute top-[28px] left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800 -z-10 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 place-items-start md:place-items-center">
          {roadmap.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full"
            >
              <div className="flex flex-row md:flex-col items-start md:items-center gap-4 group cursor-pointer">
                
                {/* Icon Circle */}
                <div className={`
                   w-14 h-14 rounded-full flex items-center justify-center shrink-0
                   shadow-lg transition-transform duration-300 group-hover:scale-110 
                   ${step.color} text-white
                `}>
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content Card */}
                <Card className="flex-1 w-full md:w-48 md:text-center border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors">
                  <CardContent className="p-4 pt-5">
                    <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-1 justify-start md:justify-center">
                      {step.details.slice(0, 2).map((detail, idx) => (
                         <Badge key={idx} variant="secondary" className="text-[10px] px-1 h-5 truncate max-w-full">
                           {detail}
                         </Badge>
                      ))}
                      {step.details.length > 2 && (
                         <Badge variant="outline" className="text-[10px] px-1 h-5">+{step.details.length - 2}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>

              {/* Mobile connector line override */}
              {index !== roadmap.length - 1 && (
                  <div className="md:hidden absolute left-[27px] top-[56px] bottom-[-32px] w-1 bg-zinc-200 dark:bg-zinc-800 -z-10" />
              )}
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
