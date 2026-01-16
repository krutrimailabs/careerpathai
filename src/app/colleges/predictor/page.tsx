'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator,AlertTriangle } from 'lucide-react';
import { PREDICTOR_DATA } from '@/data/colleges';

export default function CollegePredictorPage() {
  const [exam, setExam] = useState('');
  const [rank, setRank] = useState('');
  const [prediction, setPrediction] = useState<string[] | null>(null);

  const handlePredict = () => {
    const rankNum = parseInt(rank);
    if (!rankNum || !exam) return;

    // Simple logic based on mock data ranges
    // Find ranges that include the rank
    const matches = PREDICTOR_DATA.filter(d => 
      d.exam === exam && rankNum >= d.rank_range[0] && rankNum <= d.rank_range[1]
    );

    if (matches.length > 0) {
      // Flatten all matching colleges
      const colleges = matches.flatMap(m => m.colleges);
      setPrediction(colleges);
    } else {
      setPrediction([]);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
         <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 bg-blue-100 rounded-2xl items-center justify-center text-blue-600 mb-6">
               <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">College Predictor</h1>
            <p className="text-xl text-zinc-500">
               Enter your rank to see where you have the highest chance of admission.
            </p>
         </div>

         <Card className="mb-12 shadow-lg border-blue-100">
            <CardContent className="p-8">
               <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                     <Label>Select Exam</Label>
                     <Select onValueChange={setExam}>
                        <SelectTrigger>
                           <SelectValue placeholder="Choose Exam..." />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="JEE Main">JEE Main</SelectItem>
                           <SelectItem value="JEE Advanced">JEE Advanced</SelectItem>
                           <SelectItem value="NEET">NEET</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="space-y-2">
                     <Label>Enter Rank / Percentile</Label>
                     <Input 
                        type="number" 
                        placeholder="e.g. 4500" 
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                     />
                  </div>
               </div>
               
               <Button className="w-full h-12 text-lg" onClick={handlePredict} disabled={!exam || !rank}>
                  Predict My Colleges
               </Button>
            </CardContent>
         </Card>

         {prediction !== null && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h2 className="text-2xl font-bold text-center mb-6">Prediction Results</h2>
               
               {prediction.length > 0 ? (
                  <div className="grid gap-4">
                     {prediction.map((college, idx) => (
                        <Card key={idx} className="border-l-4 border-l-green-500">
                           <CardContent className="p-6 flex items-center justify-between">
                              <div className="font-bold text-lg">{college}</div>
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">High Chance</Badge>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               ) : (
                  <div className="text-center p-8 bg-red-50 rounded-xl text-red-700 border border-red-200">
                     <AlertTriangle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                     <h3 className="font-bold text-lg mb-2">Tough Luck!</h3>
                     <p>Based on our data, it might be difficult to get top-tier colleges with this rank. Try exploring other private universities.</p>
                  </div>
               )}
            </div>
         )}
      </div>
    </div>
  );
}
