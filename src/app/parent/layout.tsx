import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Bell, Menu, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ParentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar type="parent" />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-zinc-200 bg-white px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <button className="md:hidden">
               <Menu className="w-5 h-5 text-zinc-600" />
             </button>
             <h1 className="text-lg font-bold text-[#002147] hidden md:block">Parent Portal</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2 text-zinc-600">
               <HelpCircle className="w-4 h-4" /> Help & Support
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-500">
               <Bell className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-700 border border-orange-200">
              P
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
