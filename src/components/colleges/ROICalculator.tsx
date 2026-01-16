import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { IndianRupee, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ROICalculatorProps {
    fees: number;
    avgPackage: number;
}

export function ROICalculator({ fees, avgPackage }: ROICalculatorProps) {
    const [loanAmount, setLoanAmount] = useState(fees);

    // Derived state directly calculated
    const annualRepayment = avgPackage * 100000 * 0.30; // 30% of package
    const years = loanAmount > 0 ? loanAmount / annualRepayment : 0;
    const yearsToRepay = parseFloat(years.toFixed(1));
    const emi = (loanAmount * (1 + 0.10 * 5)) / (5 * 12); // Rough 10% interest for 5 years calculation
    const monthlyEMI = Math.round(emi);

    const isGoodROI = yearsToRepay < 2.5;

    return (
        <Card className="border-indigo-100 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#002147] text-white py-4">
                <CardTitle className="text-sm flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-green-400" /> ROI Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
                
                {/* Visual Stickiness */}
                <div className="text-center">
                    <div className={cn(
                        "text-3xl font-black mb-1",
                        isGoodROI ? "text-green-600" : "text-orange-500"
                    )}>
                        {yearsToRepay} Years
                    </div>
                    <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                        To Recover Your Fees
                    </div>
                </div>

                <div className="space-y-4 bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-600">Total Fees:</span>
                        <span className="font-bold">₹{(fees/100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-600">Avg Package:</span>
                        <span className="font-bold text-green-600">₹{avgPackage} LPA</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-200">
                         <div className="flex justify-between text-xs mb-2">
                            <span className="text-zinc-500">Loan Amount (Adj.)</span>
                            <span className="font-bold">₹{(loanAmount/100000).toFixed(1)}L</span>
                        </div>
                        <Slider 
                            value={[loanAmount]} 
                            max={fees * 1.5} 
                            step={10000}
                            onValueChange={(val) => setLoanAmount(val[0])}
                            className="py-2"
                        />
                        <div className="flex justify-between text-xs mt-2 text-zinc-500">
                            <span>Est. Monthly EMI:</span>
                            <span className="font-bold text-zinc-900">₹{monthlyEMI.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg flex gap-3 items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-800 leading-relaxed">
                        <strong>Analysis:</strong> This college has {isGoodROI ? "Excellent" : "Moderate"} ROI. 
                        Most students repay their education loan within <strong>{yearsToRepay} years</strong> of graduating.
                    </p>
                </div>

                <Button variant="outline" className="w-full text-xs h-8 text-zinc-500 hover:text-indigo-600">
                    See Detailed Report
                </Button>

            </CardContent>
        </Card>
    );
}
