'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, ChevronDown, Globe, BookOpen, Users, GraduationCap, Layout } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-zinc-950 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl mr-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CareerPath.AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
          <Link href="/colleges" className="hover:text-blue-600 transition-colors">Colleges</Link>
          
          {/* Study Abroad Dropdown */}
          <div className="relative group h-full flex items-center">
            <Link href="/study-abroad" className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-2">
              Study Abroad <ChevronDown className="w-3 h-3" />
            </Link>
            <div className="absolute top-10 left-0 w-56 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl rounded-xl p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
               <Link href="/study-abroad/countries" className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">
                 <Globe className="w-4 h-4 text-zinc-500" /> Countries
               </Link>
               <Link href="/study-abroad/universities" className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">
                 <GraduationCap className="w-4 h-4 text-zinc-500" /> Universities
               </Link>
               <Link href="/study-abroad/exams" className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">
                 <BookOpen className="w-4 h-4 text-zinc-500" /> Exam Prep
               </Link>
            </div>
          </div>

          <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
          <Link href="/community" className="hover:text-blue-600 transition-colors">Community</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          
          {/* More Dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-2">
              More <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-10 right-0 w-56 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl rounded-xl p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
              <Link href="/mentors" className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">
                <Users className="w-4 h-4 text-zinc-500" /> Mentors
              </Link>
              <Link href="/admin" className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">
                <Layout className="w-4 h-4 text-zinc-500" /> Admin Portal
              </Link>
              <Link href="/about" className="block px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">About Us</Link>
              <Link href="/contact-us" className="block px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Search & Actions */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="relative w-64 lg:w-72">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 h-9 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" 
            />
          </div>
          <div className="flex items-center gap-2 border-l pl-4 ml-2 border-zinc-200 dark:border-zinc-800">
             <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="hidden lg:flex">Dashboard</Button>
             </Link>
             <Link href="/login">
               <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
             </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-zinc-950 p-4 space-y-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
           <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 h-10 w-full" 
            />
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/careers" className="p-2 hover:bg-zinc-100 rounded">Careers</Link>
            <Link href="/colleges" className="p-2 hover:bg-zinc-100 rounded">Colleges</Link>
            
            <div className="p-2 font-semibold text-xs text-zinc-500 uppercase tracking-wider mt-2">Study Abroad</div>
            <Link href="/study-abroad" className="pl-4 p-2 hover:bg-zinc-100 rounded">Overview</Link>
            <Link href="/study-abroad/countries" className="pl-4 p-2 hover:bg-zinc-100 rounded">Countries</Link>
            
            <div className="p-2 font-semibold text-xs text-zinc-500 uppercase tracking-wider mt-2">Explore</div>
            <Link href="/resources" className="p-2 hover:bg-zinc-100 rounded">Resources</Link>
            <Link href="/community" className="p-2 hover:bg-zinc-100 rounded">Community</Link>
            <Link href="/mentors" className="p-2 hover:bg-zinc-100 rounded">Mentors</Link>
            <Link href="/pricing" className="p-2 hover:bg-zinc-100 rounded">Pricing</Link>
          </nav>
          <div className="flex gap-2 pt-4 border-t">
             <Link href="/login" className="w-full">
               <Button variant="outline" className="w-full">Login</Button>
             </Link>
             <Link href="/register" className="w-full">
               <Button className="w-full bg-blue-600">Sign Up</Button>
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}
