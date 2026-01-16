'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  Users, 
  Settings, 
  LogOut, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  type: 'student' | 'parent';
}

export function Sidebar({ type }: SidebarProps) {
  const pathname = usePathname();

  const studentLinks = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/assessment/results', label: 'My Career Path', icon: Map },
    { href: '/colleges', label: 'College Shortlist', icon: GraduationCap },
    { href: '/mentors', label: 'Mentorship', icon: Users },
    { href: '/applications', label: 'Applications', icon: BookOpen },
  ];

  const parentLinks = [
    { href: '/parent', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/parent/progress', label: 'Child Progress', icon: Sparkles },
    { href: '/parent/financial', label: 'Financial Plan', icon: BookOpen },
    { href: '/parent/safety', label: 'Safety Hub', icon: Map },
  ];

  const links = type === 'student' ? studentLinks : parentLinks;

  return (
    <div className="w-64 border-r border-zinc-200 h-screen bg-white hidden md:flex flex-col sticky top-0">
      <div className="p-6 border-b border-zinc-100">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CareerPath.AI
          </span>
        </Link>
        <span className="text-xs font-bold text-zinc-400 mt-1 block uppercase tracking-wider">
          {type === 'student' ? 'Student Portal' : 'Parent Portal'}
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-700" 
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-blue-600" : "text-zinc-400")} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-100">
        <Link 
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
        >
          <Settings className="w-4 h-4 text-zinc-400" />
          Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors mt-1">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
