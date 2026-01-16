'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'brand';
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({ 
  children, 
  id, 
  className, 
  background = 'white',
  title,
  subtitle
}: SectionWrapperProps) {
  
  const bgColors = {
    white: "bg-white dark:bg-black",
    gray: "bg-zinc-50 dark:bg-zinc-900/50",
    dark: "bg-black text-white",
    brand: "bg-blue-600 text-white"
  };

  return (
    <section id={id} className={cn("py-6 md:py-12 relative overflow-hidden", bgColors[background], className)}>
       
       {/* Background Decoration (optional, generic) */}
       {background === 'brand' && (
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
       )}

       <div className="container mx-auto px-4 md:px-6 relative z-10">
          {(title || subtitle) && (
              <div className="max-w-4xl mx-auto text-left md:text-center mb-6 space-y-1 border-b border-zinc-100 dark:border-zinc-800 pb-3 md:border-none md:pb-0">
                  {title && <h2 className={cn("text-xl md:text-3xl font-bold tracking-tight", background === 'brand' || background === 'dark' ? "text-white" : "text-zinc-900 dark:text-white")}>{title}</h2>}
                  {subtitle && <p className={cn("text-sm md:text-base", background === 'brand' || background === 'dark' ? "text-blue-100" : "text-zinc-500 dark:text-zinc-400")}>{subtitle}</p>}
              </div>
          )}
          
          {children}
       </div>
    </section>
  );
}
