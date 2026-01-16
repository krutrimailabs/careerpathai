'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

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
          <Link href="/colleges" className="hover:text-blue-600 transition-colors">Colleges</Link>
          <Link href="/exams" className="hover:text-blue-600 transition-colors">Exam</Link>
          <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
          <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
          <Link href="/news" className="hover:text-blue-600 transition-colors">Latest Updates</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer py-2">
              More <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 w-48 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-lg rounded-xl p-2 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
              <Link href="/assessment" className="block px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">Career Compass</Link>
              <Link href="/mentors" className="block px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">Mentors</Link>
              <Link href="/parent" className="block px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">Parent Portal</Link>
              <Link href="/about" className="block px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">About Us</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg text-sm">Contact Us</Link>
            </div>
          </div>
        </nav>

        {/* Search & Actions */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="relative w-64 lg:w-80">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              type="search" 
              placeholder="Search careers, colleges, exams..." 
              className="pl-9 h-9 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" 
            />
          </div>
          <div className="flex items-center gap-2 border-l pl-4 ml-2 border-zinc-200 dark:border-zinc-800">
             <Button variant="ghost" size="sm" className="hidden lg:flex">Login</Button>
             <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
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
        <div className="md:hidden border-t bg-white dark:bg-zinc-950 p-4 space-y-4 animate-in slide-in-from-top-5">
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
            <Link href="/assessment" className="p-2 hover:bg-zinc-100 rounded">Assessment</Link>
            <Link href="/mentors" className="p-2 hover:bg-zinc-100 rounded">Mentors</Link>
            <Link href="/parent" className="p-2 hover:bg-zinc-100 rounded">Parent Portal</Link>
          </nav>
          <div className="flex gap-2 pt-2 border-t">
             <Button variant="outline" className="w-full">Login</Button>
             <Button className="w-full bg-blue-600">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
}
