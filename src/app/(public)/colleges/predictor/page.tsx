import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CollegePredictorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
           <Card>
               <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                   <CardTitle>JEE Mains / NEET Predictor</CardTitle>
                   <p className="text-blue-100">Enter your rank to see where you can get admission.</p>
               </CardHeader>
               <CardContent className="space-y-4 pt-6">
                   <div>
                       <label className="block text-sm font-medium mb-1">Your Rank</label>
                       <Input placeholder="e.g. 15000" />
                   </div>
                   <div>
                       <label className="block text-sm font-medium mb-1">Category</label>
                       <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                           <option>General</option>
                           <option>OBC</option>
                           <option>SC/ST</option>
                       </select>
                   </div>
                   <Button className="w-full bg-blue-600 hover:bg-blue-700">Predict My Colleges</Button>
               </CardContent>
           </Card>
      </div>
    </div>
  );
}
