'use client';

import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function DiscoveryTabs() {
  return (
      <section className="container mx-auto px-4 md:px-6 mb-24">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-2">Explore Top Colleges</h2>
                <p className="text-zinc-600">Curated lists based on Placement, ROI, and Student Reviews.</p>
             </div>
             <Button variant="outline" className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-semibold">
                View All Colleges <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CollegeCard 
                name="IIT Bombay" 
                location="Mumbai, Maharashtra" 
                rating="4.9"
                tags={["#1 Engineering", "Highest ROI"]}
                image="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80"
            />
            <CollegeCard 
                name="IIM Ahmedabad" 
                location="Ahmedabad, Gujarat" 
                rating="5.0"
                tags={["#1 MBA", "100% Placement"]}
                image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            />
             <CollegeCard 
                name="AIIMS Delhi" 
                location="New Delhi" 
                rating="4.9"
                tags={["#1 Medical", "Top Research"]}
                image="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            />
             <CollegeCard 
                name="BITS Pilani" 
                location="Pilani, Rajasthan" 
                rating="4.8"
                tags={["Top Private Engg", "No Reservation"]}
                image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
         </div>
      </section>
  );
}

function CollegeCard({ name, location, rating, tags, image }: { name: string, location: string, rating: string, tags: string[], image: string }) {
    return (
        <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[4/3] relative">
                <Image 
                   src={image} 
                   alt={name}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="text-yellow-500 text-xs">★</span>
                    <span className="text-xs font-bold text-zinc-900">{rating}</span>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold mb-1 leading-tight">{name}</h3>
                <div className="flex items-center gap-1 text-zinc-300 text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5" /> {location}
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0 text-[10px] font-medium backdrop-blur-md">
                           {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}
