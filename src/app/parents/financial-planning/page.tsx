'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Calculator, IndianRupee, PiggyBank } from 'lucide-react';
import { FINANCIAL_GOALS } from '@/data/parents';

export default function FinancialPlanningPage() {
  const [target, setTarget] = useState(FINANCIAL_GOALS.target_amount);
  const [savings] = useState(FINANCIAL_GOALS.current_savings);
  
  const gap = target - savings;
  const progress = Math.min((savings / target) * 100, 100);

  // Simple inflation adjustment mockup
  const adjustedTarget = target * Math.pow((1 + FINANCIAL_GOALS.projected_inflation/100), FINANCIAL_GOALS.years_until_college);

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
         <h1 className="text-3xl font-bold mb-8">Financial Planning</h1>

         <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <PiggyBank className="w-5 h-5 text-green-600" /> Savings Tracker
                  </CardTitle>
                  <CardDescription>Track your progress towards the education fund.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-6">
                  <div>
                     <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-zinc-500">Progress</span>
                        <span className="font-bold">{progress.toFixed(1)}%</span>
                     </div>
                     <Progress value={progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <Label className="text-zinc-500">Current Savings</Label>
                        <div className="text-2xl font-bold">₹{(savings/100000).toFixed(2)}L</div>
                     </div>
                     <div>
                        <Label className="text-zinc-500">Target Goal</Label>
                        <div className="text-2xl font-bold">₹{(target/100000).toFixed(2)}L</div>
                     </div>
                  </div>
                  <div className="p-4 bg-orange-50 text-orange-800 rounded-lg text-sm">
                     You need to save <strong>₹{(gap/100000).toFixed(2)}L</strong> more in next {FINANCIAL_GOALS.years_until_college} years.
                  </div>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <Calculator className="w-5 h-5 text-blue-600" /> Inflation Adjuster
                  </CardTitle>
                  <CardDescription>Estimated cost considering {FINANCIAL_GOALS.projected_inflation}% education inflation.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-8">
                  <div className="text-center py-4">
                     <div className="text-zinc-500 mb-1">Projected Cost in {2025+FINANCIAL_GOALS.years_until_college}</div>
                     <div className="text-4xl font-bold text-zinc-900">₹{(adjustedTarget/100000).toFixed(2)} Lakhs</div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="space-y-2">
                        <Label>Adjust Target Amount (Current Value)</Label>
                        <div className="relative">
                           <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                           <Input 
                              type="number" 
                              className="pl-9" 
                              value={target}
                              onChange={(e) => setTarget(Number(e.target.value))}
                           />
                        </div>
                     </div>
                     <Button className="w-full">Recalculate Monthly SIP</Button>
                  </div>
               </CardContent>
            </Card>
         </div>

         <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none">
            <CardContent className="p-8 flex items-center justify-between">
               <div>
                  <h3 className="text-2xl font-bold mb-2">Need Expert Advice?</h3>
                  <p className="text-blue-100 max-w-lg">
                     Consult with our education loan partners and financial planners to secure your child&apos;s future.
                  </p>
               </div>
               <Button variant="secondary" size="lg" className="text-blue-700">Get Free Consultation</Button>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
