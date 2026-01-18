'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  UserCog, 
  Settings, 
  LogOut, 
  FileText,
  TrendingUp
} from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();

  const groups = [
    {
      label: "Overview",
      items: [
         { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
         { href: '/admin/finance', label: 'Finance', icon: TrendingUp },
      ]
    },
    {
      label: "User Management",
      items: [
         { href: '/admin/users', label: 'Users', icon: UserCog },
         { href: '/admin/mentors/approvals', label: 'Mentor Approvals', icon: Users },
         { href: '/admin/admissions', label: 'Admissions', icon: Users },
      ]
    },
    {
      label: "Content (CMS)",
      items: [
         { href: '/admin/content/careers', label: 'Careers', icon: FileText },
         { href: '/admin/content/careers/categories', label: 'Car. Categories', icon: FileText },
         { href: '/admin/content/colleges', label: 'Colleges', icon: Building2 },
         { href: '/admin/cms', label: 'Blog Posts', icon: FileText },
         { href: '/admin/exams', label: 'Exams', icon: FileText },
         { href: '/admin/assessments', label: 'Assessments', icon: FileText },
      ]
    }
  ];

  return (
    <div className="w-64 border-r border-zinc-200 h-screen bg-zinc-900 text-white hidden md:flex flex-col sticky top-0">
      <div className="p-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-white">
            CareerPath <span className="text-blue-400">Admin</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
        {groups.map((group, idx) => (
            <div key={idx}>
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {group.label}
                </h3>
                <div className="space-y-1">
                    {group.items.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
                    
                    return (
                        <Link 
                        key={link.href} 
                        href={link.href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                            isActive 
                            ? "bg-blue-600 text-white" 
                            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        )}
                        >
                        <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-zinc-400")} />
                        {link.label}
                        </Link>
                    );
                    })}
                </div>
            </div>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <Link 
          href="/admin/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-zinc-800 transition-colors mt-1">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
