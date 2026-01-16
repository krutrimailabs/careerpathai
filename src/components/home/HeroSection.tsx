'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {

  return (
      <section className="relative bg-blue-50 pt-12 pb-16 overflow-hidden border-b border-zinc-200">
         {/* Animated Grid Background */}
         <div className="absolute inset-0 z-0 opacity-40" 
              style={{
                  backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)", 
                  backgroundSize: "40px 40px"
              }}>
         </div>
         <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
               <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100 shadow-sm text-xs font-semibold text-blue-800 mb-2">
                  <span className="flex h-2 w-2 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Backed by 10 Years of Data
               </div>
               
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#002147] tracking-tight">
                  Stop Guessing. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                     Start Knowing.
                  </span>
               </h1>
               
               <p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-medium">
                  Discover your perfect career path based on your <b>Personality</b>, <b>Interests</b>, and <b>Aptitude</b>.
                  <span className="block mt-1 text-zinc-500 font-normal text-base">Backed by modern psychology & AI.</span>
               </p>
               
               <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/assessment/tests/interest">
                     <Button size="lg" className="bg-[#FF9900] hover:bg-orange-600 text-white h-14 px-8 text-lg font-bold shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
                        Start Free Assessment
                     </Button>
                  </Link>
                  <Link href="/assessment">
                     <Button variant="outline" className="h-14 px-6 text-[#002147] border-[#002147] bg-white/50 hover:bg-blue-50 font-semibold backdrop-blur-sm">
                        View Sample Report
                     </Button>
                  </Link>
               </div>

               {/* Social Proof */}
               <div className="flex items-center gap-4 pt-4 text-sm font-medium text-zinc-600">
                  <div className="flex -space-x-3">
                     {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative">
                           <Image 
                             src={`https://i.pravatar.cc/100?img=${10+i}`} 
                             alt="Student" 
                             fill
                             className="object-cover"
                           />
                        </div>
                     ))}
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                        +4M
                     </div>
                  </div>
                  <div>
                     <div className="flex text-yellow-500">★★★★★</div>
                     <span className="text-xs text-zinc-500">Trusted by students & parents</span>
                  </div>
               </div>
            </div>

            {/* Right Side: Hero Visual */}
            <div className="md:w-[45%] relative mt-8 md:mt-0">
                {/* Floating Badge 1 - Top Left */}
                <div className="absolute -left-12 top-10 z-20 hidden md:flex items-center gap-3 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-50 animate-bounce-slow">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">💰</span>
                   </div>
                   <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase">Scholarship</div>
                      <div className="text-sm font-bold text-zinc-900">₹5 Lakhs Saved</div>
                   </div>
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute -right-4 bottom-12 z-20 hidden md:flex items-center gap-3 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-50 animate-bounce-reverse-slow">
                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🎯</span>
                   </div>
                   <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase">Target Achieved</div>
                      <div className="text-sm font-bold text-zinc-900">IIT Bombay</div>
                   </div>
                </div>

                {/* Main Hero Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 aspect-[4/3]">
                    <Image 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                      alt="Students Learning" 
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay Text/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 z-20">
                        <div className="text-white">
                           <p className="font-bold text-lg">Your Future Starts Here</p>
                           <p className="text-sm text-zinc-300">Join 4 Million+ Students on CareerPath</p>
                        </div>
                    </div>
                </div>
                
                {/* Decoration blob behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
         </div>
         
         <style jsx global>{`
             @keyframes bounce-slow {
                 0%, 100% { transform: translateY(0); }
                 50% { transform: translateY(-10px); }
             }
             @keyframes bounce-reverse-slow {
                 0%, 100% { transform: translateY(0); }
                 50% { transform: translateY(10px); }
             }
             .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
             .animate-bounce-reverse-slow { animation: bounce-reverse-slow 5s infinite ease-in-out; }
         `}</style>
      </section>
  );
}
