'use client';

import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell, ReferenceLine } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { College } from '@/types/college';

export function ROIChart({ colleges }: { colleges: College[] }) {
  // Transform data: Fees (Lakhs) vs Avg Package (Lpa)
  const data = colleges.map(c => ({
    name: c.name,
    fees: c.financials.fees_per_year / 100000, // Convert to Lakhs
    package: c.placement.avg_package_lpa,
    roi: c.placement.avg_package_lpa / (c.financials.fees_per_year / 100000), // Simple ROI Metric
    type: c.overview.college_type
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-zinc-200 shadow-xl rounded-lg text-xs">
          <p className="font-bold text-[#002147] mb-1">{data.name}</p>
          <div className="space-y-1">
             <p className="text-zinc-500">Fees: <span className="font-bold text-zinc-900">₹{data.fees.toFixed(1)}L</span></p>
             <p className="text-zinc-500">Pkg: <span className="font-bold text-green-600">₹{data.package} LPA</span></p>
             <p className="text-zinc-500">ROI Score: <span className="font-bold text-blue-600">{data.roi.toFixed(1)}x</span></p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-zinc-200 overflow-hidden">
        <CardHeader className="bg-zinc-50 border-b border-zinc-100">
            <div className="flex justify-between items-center">
                <div>
                     <CardTitle className="text-lg font-bold text-[#002147]">💰 ROI Analysis: Fees vs Placement</CardTitle>
                     <CardDescription>Top Left = Best ROI (Low Fees, High Package)</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-4 h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <XAxis type="number" dataKey="fees" name="Fees" unit="L" label={{ value: 'Annual Fees (Lakhs)', position: 'insideBottom', offset: -10, fontSize: 12 }} tick={{fontSize: 10}} domain={[0, 'auto']} />
                    <YAxis type="number" dataKey="package" name="Package" unit="LPA" label={{ value: 'Avg Package (LPA)', angle: -90, position: 'insideLeft', fontSize: 12 }} tick={{fontSize: 10}} domain={[0, 'auto']} />
                    <ZAxis type="number" range={[100, 300]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                    <ReferenceLine y={10} stroke="#22c55e" strokeDasharray="3 3" label={{ value: 'Good Placement (10LPA)', position: 'insideTopRight', fontSize: 10, fill: '#22c55e' }} />
                    <Scatter name="Colleges" data={data} fill="#8884d8">
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.roi > 1.5 ? '#16a34a' : entry.roi > 0.8 ? '#2563eb' : '#fbbf24'} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  );
}
