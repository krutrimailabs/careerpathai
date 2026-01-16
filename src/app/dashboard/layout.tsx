"use client";
import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Bell, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar type="student" />
      
      <div className="flex-1 flex flex-col">
        {/* Mobile / Tablet Header */}
        <header className="h-16 border-b border-zinc-200 bg-white px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <button className="md:hidden">
               <Menu className="w-5 h-5 text-zinc-600" />
             </button>
             <div className="relative w-64 hidden md:block">
               <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
               <Input 
                 placeholder="Search anything..." 
                 className="pl-9 h-9 bg-zinc-50 border-zinc-200" 
               />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-zinc-500">
               <Bell className="w-5 h-5" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 border border-blue-200">
              AS
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
