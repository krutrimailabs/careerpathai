'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function AIChatbot() {
  return (
      <div className="fixed bottom-6 right-6 z-50">
         <div className="absolute bottom-20 right-0 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl w-64 border border-zinc-200 dark:border-zinc-700 mb-2 animate-in slide-in-from-right-10 fade-in duration-700">
             <div className="text-xs font-bold mb-1 text-blue-600">Career Navigator</div>
             <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Ask me: &quot;What can I do if I like Biology but hate Math?&quot;
             </p>
             <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-zinc-800 border-b border-r border-zinc-200 dark:border-zinc-700 transform rotate-45"></div>
         </div>
         <Button className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl flex flex-col items-center justify-center gap-1 border-4 border-white dark:border-zinc-900 transition-transform hover:scale-105">
            <MessageCircle className="w-6 h-6" />
            <span className="text-[10px] font-bold">AI Help</span>
         </Button>
      </div>
  );
}
