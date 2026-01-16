'use client';

import React from 'react';
import { Video, Play } from "lucide-react";

export function VideoGallery() {
  return (
      <section className="bg-black text-white py-24 mb-24 overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Day in the Life</h2>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
               <VideoCard title="Aviation Law" time="Drafting Contracts" views="5k" />
               <VideoCard title="Sustainability Mgmt" time="Site Audit" views="8k" />
               <VideoCard title="UX Design" time="User Research" views="12k" />
               <VideoCard title="Marine Biologist" time="Underwater Sampling" views="15k" />
               <VideoCard title="Ethical Hacker" time="Bug Bounty Hunting" views="22k" />
            </div>
         </div>
      </section>
  );
}

function VideoCard({ title, time, views }: { title: string, time: string, views: string }) {
    return (
        <div className="min-w-[200px] w-[200px] bg-zinc-900 rounded-xl overflow-hidden relative aspect-[9/16] group cursor-pointer border border-zinc-800">
           <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                 <Play className="w-6 h-6 fill-white text-white" />
              </div>
           </div>
           <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-10">
              <div className="text-white font-bold">{title}</div>
              <div className="text-xs text-zinc-300">{time}</div>
              <div className="text-[10px] text-zinc-400 mt-1 flex items-center gap-1"><Video className="w-3 h-3"/> {views} views</div>
           </div>
        </div>
    )
}
